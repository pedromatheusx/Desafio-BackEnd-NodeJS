import { Request, response, Response } from "express";

import {container} from "tsyringe"
import { CreateNivelUseCase } from "./CreateNivelUseCase";

class CreateNivelController {

    async handle(req: Request , res: Response): Promise<Response>{
        const {nivel} = req.body
        
        const createNivelUseCase = container.resolve(CreateNivelUseCase)

        await createNivelUseCase.execute(nivel)

        return res.status(201).send()
    }

}


export {CreateNivelController}