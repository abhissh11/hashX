import { z } from 'zod'

export const createPostSchema = z.object(
    {
        authorId: z.string().min(1, 'AuthorId is required'),
        content: z.string().min(2, 'Content cannot be empty').max(700),
        imageUrl: z.string().url().optional(),
        tags: z.array(z.string()).optional()
    }
)

export const updatePostSchema = z.object(
    {
        content: z.string().min(2, 'Content cannot be empty').max(700).optional(),
        imageUrl: z.string().url().optional(),
        tags: z.array(z.string()).optional(),
    }
)


// You can use safeParse in controller like this:

// const parsed = createPostSchema.safeParse(req.body);
// if (!parsed.success) {
//   return res.status(400).json({ error: parsed.error.errors });
// }