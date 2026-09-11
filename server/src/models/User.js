import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    password: { type: String, required: true, select: false },
    avatar: String,
    role: { type: String, enum: ["guest", "host", "admin"], default: "guest" },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
