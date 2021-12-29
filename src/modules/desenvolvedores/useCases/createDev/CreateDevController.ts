import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDevUsecase } from "./CreateDevUseCase";

class CreateDevController {

    async handle(req:Request, res:Response):Promise<Response>{
        const {nivel, nome, sexo, datanascimento, idade, hobby} = req.body

        const createDevUseCase = container.resolve(CreateDevUsecase)

        await createDevUseCase.execute({
            nivel, nome, sexo, datanascimento, idade, hobby
        })

        return res.status(201).send()
    }
}

export {CreateDevController}