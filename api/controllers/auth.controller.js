import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { json } from "express";

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

  const age = 1000 * 60 * 60 * 24 * 7;
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: age }
  );
  const { password: userPassword, ...userData } = user;

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: age,
    sameSite: 'None', 
    secure: true,
  }).status(200).json({ message: "User logged in successfully", data: userData });

});

const Logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: 'None',
    secure: true,
  }).status(200).json({ message: "Logout Successful" });
};


export { Register, Login, Logout };
