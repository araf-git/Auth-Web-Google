import mongoose from "mongoose";
const { Schema } = mongoose;

// Defining Schema
const refreshTokenSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  token: { type: String, required: true },
  blacklisted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, expires: "5d" },
});

// Model
const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

export default RefreshToken;
