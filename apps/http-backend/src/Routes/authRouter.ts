import {Request, Response, Router} from "express";
import jwt from "jsonwebtoken";
import {UserSignupSchema} from "@repo/common/schema";
import {prismaClient} from "@repo/db/primsaclient"
import bcrypt from "bcrypt"
import { JWT_TOKEN } from "@repo/backend-common/config";

const authRouter:Router = Router();

authRouter.post("/signup", async (req:Request, res:Response) => {

    try {

        const email = req.body.email;
        const password = req.body.email;
        

        const parsedData = UserSignupSchema.safeParse(req.body);

        if(!parsedData.success) {
            res.status(400).json({
                message:"Invalid Inputs",
                error:parsedData.error.errors
            })
            return ;
        }

        const hashedPassword = await bcrypt.hash(password, 100);

        await prismaClient.user.create({
            data:{
                email,
                password:hashedPassword
            }
        })

        res.status(200).json({
            message:"Account Creation Success"
        })


    }

    catch(err) {

        console.log(err);
                //@ts-ignore
                if(err.code === "P2002") {

                    res.status(409).json({
                     message:"User already exists with this email"
                    })
        
                }
        
                else {
        
                    res.status(500).json({
                        message:"Server error"
                       })
        
    }}


})

authRouter.get("/signin", async (req, res) => {

    try {

        const email = req.body.email;
        const password = req.body.password;

        const user = await prismaClient.user.findFirst({
            where:{
                email
            }
        })
        if(!user) {
            res.status(404).json({
                message:"No such user exists"
            })
            return ;
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if(comparePassword) {
            const token = jwt.sign({
                userId:user.id
            }, JWT_TOKEN);

            res.status(200).json({
                message:"Signin Success",
                token
            })

        }
        else {
            res.status(411).json({
                message:"Incorrect Password"
            })

        }


    }

    catch(err) {
        console.log(err);

       res.status(500).json({
        message:"Internal Server Error"
       })


    }
})

export default authRouter;