import { Request, Response } from "express";
import { createUserSchema, updateUserSchema } from "../validations/userValidation";
import User from "../models/User";


//create user
export const createUser = async (req: Request, res: Response) => {
    const parsed = createUserSchema.safeParse(req.body);

    if (!parsed.success) return res.status(400).json({ error: parsed.error });
    const { clerkId, username, bio, profileImage } = parsed.data;

    try {
        const existing = await User.findOne({ clerkId });
        if (existing) return res.status(400).json({ error: 'User already exists' });

        const user = await User.create({ clerkId, username, bio, profileImage })
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error' })
    }
};

// get user
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({ clerkId: id });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user)
    } catch (err) {
        console.log('Error fetching user', err)
        res.status(500).json({ error: 'Server error' })
    }
}

// update user
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const parsed = updateUserSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error });

    try {
        const updatedUser = await User.findOneAndUpdate({ clerkId: id }, parsed.data, { new: true });
        res.status(200).json(updatedUser);

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Update failed' })
    }
}

//  follow a user

export const followUser = async (req: Request, res: Response) => {
    const { id } = req.params;        //target user to follow
    const { currentUserId } = req.body;     //logged in user

    if (id === currentUserId) return res.status(400).json({ error: 'Cannot follow yourself' });

    try {
        const target = await User.findOne({ clerkId: id });
        const current = await User.findOne({ clerkId: currentUserId });

        if (!target || !current) return res.status(404).json({ error: 'User not found' })

        if (!target.followers.includes(currentUserId)) {
            target.followers.push(currentUserId);
            await target.save();
        }

        if (!current.following.includes(id)) {
            current.following.push(id);
            await current.save();
        }

        res.status(200).json({ message: 'Followed successfully' })

    } catch {
        res.status(500).json({ error: 'Follow failed' })
    }
}

//unfollow user
export const unfollowUser = async (req: Request, res: Response) => {
    const { id } = req.params  // target user for unfollow
    const { currentUserId } = req.body;

    try {
        const target = await User.findOne({ clerkId: id });
        const current = await User.findOne({ clerkId: currentUserId })

        if (!target || !current) return res.status(404).json('User not found');

        target.followers = target.followers.filter(f => f !== currentUserId);
        current.following = current.following.filter(f => f !== id);

        await target.save();
        await current.save();
    }
    catch {
        res.status(500).json({ error: 'Failed to unfollow' })
    }
}

//get followers
export const getFollowers = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({ clerkId: id });
        if (!user) return res.status(404).json({ error: 'User not found' })
        res.status(200).json(user.followers);
    } catch {
        res.status(500).json({ error: 'Failed to get followers' })
    }
}
//get following
export const getFollowing = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({ clerkId: id });
        if (!user) return res.status(404).json({ error: 'User not found' })
        res.status(200).json(user.following);
    } catch {
        res.status(500).json({ error: 'Failed to get following' })
    }
}

//search user

export const searchUser = async (req: Request, res: Response) => {
    const { q } = req.query;

    try {
        const results = await User.find({
            username: { $regex: q, $options: 'i' },
        }).limit(10);

        res.status(200).json(results)
    }
    catch {
        res.status(500).json({ error: 'Search failed' })
    }
}