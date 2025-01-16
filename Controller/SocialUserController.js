import prisma from "../DB/db.config.js";

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