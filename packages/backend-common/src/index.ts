import dotenv from "dotenv"

dotenv.config({path:"./.env"})

export const JWT_TOKEN = process.env.JWT_SECRET ||  "12344";