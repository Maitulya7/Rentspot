import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import asyncHandler from "express-async-handler";

const Register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  //all fields are required
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  //Hash password
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashPassword,
    },
  });

  res.status(201).json({ message: "User created successfully", data: newUser });
});

const Login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  //all fields are required
  if (!username || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  //check if user exits in the database
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    res.status(401);
    throw new Error("Invalid credentials");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

 


});

const Logout = (req, res) => {
  res.send("logout");
};

export { Register, Login, Logout };
