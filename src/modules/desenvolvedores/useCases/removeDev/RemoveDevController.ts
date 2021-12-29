import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveDevUseCase } from "./RemoveDevUseCase";

class RemoveDevController {

    async handle(req: Request, res:Response){
        const {id} = req.params

        const removeDevUseCase = container.resolve(RemoveDevUseCase)

        await removeDevUseCase.execute(id)

        return res.status(204).send()
    }

}

export {RemoveDevController}