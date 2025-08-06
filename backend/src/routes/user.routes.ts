import express from 'express'
import { createUser, followUser, getFollowers, getFollowing, getUser, searchUser, unfollowUser, updateUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/:id', getUser);
router.post('/', createUser);
router.put("/update/:id", updateUser);

router.post("/:id/follow", followUser);
router.post("/:id/unfollow", unfollowUser);

router.get("/:id/followers", getFollowers)
router.get("/:id/following", getFollowing);

router.get("/search/query", searchUser);

export default router;