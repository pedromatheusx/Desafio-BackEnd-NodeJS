import { inject, injectable } from "tsyringe";
import { INivelsRepository } from "../../repositories/INivelsRepository";

@injectable()
class RemoveNivelUseCase {

    constructor(
        @inject('NivelsRepository')
        private nivelsRepository: INivelsRepository
    ){}

    async execute(id: string){
        await this.nivelsRepository.remove(id)
    }

}

export {RemoveNivelUseCase}