import mongoose, { Model, Schema } from 'mongoose'

export interface IPost extends Document {
    authorId: string,
    content: string,
    imageUrl?: string,
    tags: string[];
    likes: string[];     // Clerk User IDs who liked
    createdAt: Date;
    updatedAt: Date;
}


const Postschema: Schema = new Schema<IPost>({
    authorId: { type: String, required: true },
    content: { type: String, required: true, maxlength: 700 },
    imageUrl: { type: String },
    tags: [{ type: String }],
    likes: [{ type: String }],
}, { timestamps: true });

const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', Postschema)
export default Post;
