import { z } from 'zod'

export const createCommentSchema = z.object({
    postId: z.string().min(1, 'Post ID is required'),
    authorId: z.string().min(1, 'Author ID is required'),
    content: z.string().min(2, 'Comment cannot be empty').max(500, 'Comment too long (max 500 characters)'),
});

export const updateCommentSchema = z.object({
    content: z.string()
        .min(2, "Comment cannot be empty")
        .max(500, 'comment too long (max 500 characters'),
})