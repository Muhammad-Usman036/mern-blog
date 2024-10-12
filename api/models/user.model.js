import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
//   this is beacause of to know about user's creation time and updation time
  { timestamps: true }
);

const User = mongoose.model('User',userSchema);
export default User;