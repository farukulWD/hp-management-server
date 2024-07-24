import express, { Request, Response } from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import router from "./app/routes";



export const app = express()


app.use(express.json())
app.use(cors())
app.use(cookieParser())



app.use("/api/v1",router)




app.get("/",(req :Request, res:Response)=>{
    res.send("Hi, Server is running")
})
