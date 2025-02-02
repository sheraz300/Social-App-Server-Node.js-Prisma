import prisma from "../DB/db.config.js";

// ✅ Fetch All Products
export const fetchAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json({ status: 200, message: "Products fetched successfully", data: products });
  } catch (error) {
    res.status(500).json({ message: "Database error", details: error });
  }
};
