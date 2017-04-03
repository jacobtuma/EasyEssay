import express from "express";
import topicRoutes from "./topics-api.controller";
import productRoutes from "./products-api.controller";
import saleRoutes from "./sales-api.controller";
import userRoutes from "./users";


const router = express.Router();

router.use('/distributors', topicRoutes);
router.use('/products', productRoutes);
router.use('/sales', saleRoutes);
router.use('/topics', topicRoutes);
router.use('/users', userRoutes);

export default router;