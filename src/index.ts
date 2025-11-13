import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()

const client = new PrismaClient()

app.use(express.json())

app.get("/" , async(req, res)=>{

        const data = await client.usersdata.findMany()

    res.json({
        message:"working ",
        data:data
    })
})

app.post("/user" , async(req,res)=>{
    await client.usersdata.create({
        data:{
            id:Math.random().toString(),
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })

    res.json({
        message:"users data stored "
    })
})





app.listen(3000)

console.log("hello docker and ci cs")

