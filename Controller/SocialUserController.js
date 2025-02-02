import prisma from "../DB/db.config.js";
import csvParser from "csv-parser";
import { Readable } from "stream";

// create Social User
export const createSocialUser = async (req , res) => {
    const {
        username,
        email,
        password,
    }  = req.body

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const findUser = await prisma.socialUser.findUnique({
        where: {
            email: email,
        },
    });

    if(findUser){
        return res.status(400).json({message:"Email already exists"})
    }

    const newUser = await prisma.socialUser.create({
        data:{
           username : username,
           email : email,
           password : password
        }
    })

    return res.status(201).json({
        status:201,
        message:"User created successfully",
        data: newUser,
    })
}

// update social user
export const updateSocialUser =async (req, res)=>{
    const userId= req.params.id
    const {
        username,
        email,
        password,
    } = req.body

    await prisma.socialUser.update({
        where:{
            id:Number(userId)
        },
        data:{
            username:username,
            email:email,
            password:password
        }
    })
    return res.status(200).json({
        status:200,
        message:"User updated successfully"
    })
    
}

// fetch all social users
export const fetchAllSocialUsers =async (req, res)=>{
    const users = await prisma.socialUser.findMany()
    return res.status(200).json({
        status:200,
        message:"Users fetched successfully",
        data:users
    })
}

// fetch single user
export const fetchSingleSocialUser =async (req, res)=>{
    const userId = req.params.id
    const user = await prisma.socialUser.findFirst({
        where:{
            id:Number(userId)
            }
            })
            return res.status(200).json({
                status:200,
                message:"User fetched successfully",
                data:user
            })
}

export const uploadCSV = async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "CSV file is required" });
    }
  
    const results = [];
  
    // Convert Buffer to Stream and parse CSV
    Readable.from(req.file.buffer.toString()) 
      .pipe(csvParser())
      .on("data", (data) => {
        results.push({
          name: data.name,
          mainCategory: data.main_category,
          subCategory: data.sub_category,
          image: data.image,
          link: data.link,
          ratings: parseFloat(data.ratings) || 0,
          noOfRatings: parseInt(data.no_of_ratings) || 0,
          discountPrice: parseFloat(data.discount_price) || 0,
          actualPrice: parseFloat(data.actual_price) || 0,
        });
      })
      .on("end", async () => {
        try {
          await prisma.product.createMany({ data: results });
          res.json({ status: 201, message: "CSV data stored successfully" });
        } catch (error) {
          res.status(500).json({ message: "Database error", details: error.message });
        }
      })
      .on("error", (error) => {
        res.status(500).json({ message: "CSV parsing error", details: error.message });
      });
  };

export const fetchAllProducts = async (req, res) => {
    try {
      const products = await prisma.product.findMany();
      res.json({ status: 200, message: "Products fetched successfully", data: products });
    } catch (error) {
      res.status(500).json({ message: "Database error", details: error });
    }
  };