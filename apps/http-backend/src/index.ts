import express from "express"
import authRouter from "./Routes/authRouter";


const app = express();


app.use("/api/v1/user", authRouter );

app.listen("4000");