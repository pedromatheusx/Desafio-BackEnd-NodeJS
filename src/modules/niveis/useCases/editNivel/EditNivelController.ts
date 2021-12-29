import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditNivelUseCase } from "./EditNivelUseCase";

class EditNivelController {

    async handle(req: Request, res:Response):Promise<Response>{
        const {id} = req.params
        const {nivel} = req.body

        const editNivelUseCase = container.resolve(EditNivelUseCase)

        await editNivelUseCase.execute({
            id, nivel
        })

        return res.status(200).send()
        
    }
}

export {EditNivelController}