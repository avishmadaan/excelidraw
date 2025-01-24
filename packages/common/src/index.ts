import {z} from "zod";


export const UserSignupSchema = z.object({
    name: z.string().min(3).max(20),
    email:z.string(),
    password:z.string().min(3)
})