import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditDevUseCase } from "./EditDevUseCase";


class EditDevController {

    async handle(req:Request, res:Response){
        const {id} = req.params
       
        const {nome, datanascimento,hobby,idade, nivel, sexo} = req.body

        const editDevUseCase = container.resolve(EditDevUseCase)

        await editDevUseCase.execute({id, nome, datanascimento,hobby,idade, nivel, sexo})

        return res.status(200).send()
    }
}

export {EditDevController}