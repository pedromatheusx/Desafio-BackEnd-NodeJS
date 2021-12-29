import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNivelUseCase } from "./ListNivelUseCase";

class ListNivelController {

    async handle(req: Request, res:Response):Promise<Response>{

    const listNivelUseCase = container.resolve(ListNivelUseCase)
    
    const listNivels = await listNivelUseCase.execute()

    return res.status(200).json(listNivels)


    }

}


export {ListNivelController}