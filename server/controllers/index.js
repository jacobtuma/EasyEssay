import express from "express";
import topicRoutes from "./topics-api.controller";
import userRoutes from "./users";


const router = express.Router();

router.use('/topics', topicRoutes);
router.use('/users', userRoutes);

export default router;