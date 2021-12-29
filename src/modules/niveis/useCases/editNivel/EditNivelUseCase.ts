import { inject, injectable } from "tsyringe";
import { INivelsRepository } from "../../repositories/INivelsRepository";

interface IRequest {
    id: string,
    nivel: string
}

@injectable()
class EditNivelUseCase {

    constructor(
        @inject('NivelsRepository')
        private nivelsRepository: INivelsRepository
    ) { }

    async execute({ id, nivel }: IRequest) {
        await this.nivelsRepository.edit(
            id, nivel
        )
    }
}

export { EditNivelUseCase }