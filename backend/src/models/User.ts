import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: String,
        password: String,
        bio: String,
        followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    }, { timestamps: true }
);

export default mongoose.model("User", UserSchema)