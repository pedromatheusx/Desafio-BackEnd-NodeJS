import { inject, injectable } from "tsyringe";
import { IDevRepository } from "../../repositories/IDevRepository";

@injectable()
class RemoveDevUseCase {

    constructor(
        @inject("DevRepository")
        private devRepository: IDevRepository
    ){}

    async execute(id: string){
        await this.devRepository.remove(id)
    }

}

export {RemoveDevUseCase}