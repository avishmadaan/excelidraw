import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import {JWT_TOKEN} from "@repo/backend-common/config";
 
const authMiddleware = async (req:Request, res:Response, next:NextFunction) => {

    const token = req.headers.authorization;

    if(!token) {
        res.status(404).json({
            message:"Token Missing"
        })
        return ;
    }

    const decoded = jwt.verify(token,JWT_TOKEN);


    if(decoded) {

        //@ts-ignore
        req.userId = decoded.userId;
        return ;
    }
    else {
        res.status(403).json({
            message:"Unauthorised access"
        })

    }




}

export default authMiddleware;