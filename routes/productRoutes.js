import { Router } from "express";
import {fetchAllProducts } from "../Controller/ProductController.js";

const router = Router();

router.get('/fetchAllProducts', fetchAllProducts);

export default router;
