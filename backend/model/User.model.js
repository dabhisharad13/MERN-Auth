import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: [true, "Username Exist"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Email already exist"],
  },
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
});

export default mongoose.model.User || mongoose.model("User", UserSchema);
