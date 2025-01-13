import prisma from "../DB/db.config.js";

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