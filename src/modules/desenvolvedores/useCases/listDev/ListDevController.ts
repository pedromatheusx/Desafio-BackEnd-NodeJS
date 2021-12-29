import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDevUseCase } from "./ListDevUseCase";

class ListDevController {


    async handle(req:Request, res:Response):Promise<Response>{

        const listDevUseCase = container.resolve(ListDevUseCase)

        const list =  await listDevUseCase.execute()

        return res.status(200).json({list})
    }
}

export {ListDevController}