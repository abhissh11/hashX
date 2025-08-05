import mongoose, { Document, Model, Schema } from 'mongoose'
import { maxLength } from 'zod'

export interface IComment extends Document {
    postId: string,
    authorId: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
}

export const CommentSchema: Schema = new Schema({
    postId: { type: String, required: true },
    authorId: { type: String, required: true },
    content: { type: String, required: true, maxLength: 500 },
}, { timestamps: true });


const Comment: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema)
export default Comment;
