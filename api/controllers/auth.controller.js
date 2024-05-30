import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

const Register = async (req, res) => {
  const { username, email, password } = req.body;

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

  res.status(201).json({message:"User created successfully", data: newUser});

};
const Login = (req, res) => {
  res.send("login");
};
const Logout = (req, res) => {
  res.send("logout");
};

export { Register, Login, Logout };
