import { z } from 'zod'

export const createUserSchema = z.object({
    clerkId: z.string().min(1, 'clerkId is required'),
    username: z.string().min(3, 'Username must be at least 3 characters').max(20, 'Username must be at most 20 characters').regex(/^[a-zA-Z0-9_]+$/, 'Username can contain letters, numbers, and underscores'),
    bio: z.string().max(200).optional(),
    profileImage: z.string().url().optional(),
});

export const updateUserSchema = z.object({
    username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/).optional(),
    bio: z.string().max(200).optional(),
    profileImage: z.string().url().optional(),
});


// // you can use these in your controller:
// const parsed = createUserSchema.safeParse(req.body);
// if (!parsed.success) {
//   return res.status(400).json({ error: parsed.error.errors });
// }
