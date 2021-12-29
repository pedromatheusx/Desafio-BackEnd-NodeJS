

import { inject, injectable } from "tsyringe";
import { DesenvolvedorDTO } from "../../dtos/IDesenvolvedor";
import { IDevRepository } from "../../repositories/IDevRepository";

@injectable()
class CreateDevUsecase {


    constructor(
        @inject("DevRepository")
        private devRepository: IDevRepository
    ){}

   async execute({ nivel, nome, sexo, datanascimento, idade, hobby}: DesenvolvedorDTO){
    
    await this.devRepository.create({
                nivel, nome, sexo, datanascimento, idade, hobby
            })
    }
}


export {CreateDevUsecase}