import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveNivelUseCase } from "./RemoveNivelUseCase";

class RemoveNivelController {

    async handle(req:Request, res:Response):Promise<Response>{
        const {id} = req.params
        
        const removeNivelUseCase = container.resolve(RemoveNivelUseCase)

        await removeNivelUseCase.execute(id)

        return res.status(204).send()
    }

}

export {RemoveNivelController}