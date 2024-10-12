import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res ,next) => {
  // console.log(req.body);
  // res.send(req.body);
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username == "" ||
    email == "" ||
    password == ""
  ) {
    // return res.status(400).json({ message: "All  filed are required" });
    next(errorHandler(400, "All fields are required"));
  }
//   
const hashPassword = bcryptjs.hashSync(password,10);
// 
  const newUser = new User({ username, email, password:hashPassword,});
  try {
    await newUser.save();
    res.json({ message: "Signup Successfully" });
  } catch (error) {
    next(error);
  }
};
