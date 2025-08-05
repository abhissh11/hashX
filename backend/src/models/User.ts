import mongoose, { Model, Schema } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    username: string;
    bio?: string;
    profileImage?: string;
    followers: string[];
    following: string[];
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema<IUser>(
    {
        clerkId: { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        bio: { type: String },
        profileImage: { type: String },
        followers: [{ type: String }],
        following: [{ type: String }],
    },
    { timestamps: true }
)




const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;