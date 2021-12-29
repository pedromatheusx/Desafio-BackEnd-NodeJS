import express, { NextFunction, Request, Response } from "express"
import createConnection from "./typeorm"
import 'express-async-errors'
import cors from "cors"

import "./shared/container"

import swagger from "swagger-ui-express"
import swaggerFile from "../swagger.json"
import { router } from "./routes"
import { AppError } from "./shared/errors/AppError"

createConnection()
const app = express()

app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile))

app.use(express.json())

app.use(cors())
app.use(router)


app.use((err: Error, request:Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({message: err.message})
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(3333, () => console.log("Ligado..."))


