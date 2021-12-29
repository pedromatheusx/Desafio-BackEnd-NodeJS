import { inject, injectable } from "tsyringe";
import { DesenvolvedorDTO } from "../../dtos/IDesenvolvedor";
import { IDevRepository } from "../../repositories/IDevRepository";

@injectable()
class EditDevUseCase {

    constructor(
        @inject("DevRepository")
        private devRepository: IDevRepository
    ){}

    async execute({id,sexo,nivel,idade, hobby,datanascimento,nome}: DesenvolvedorDTO){
        await this.devRepository.edit({id,sexo,nivel,idade, hobby,datanascimento,nome})
    }


}

export {EditDevUseCase}