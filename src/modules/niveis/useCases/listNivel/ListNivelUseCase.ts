import { inject, injectable } from "tsyringe";
import { Nivel } from "../../entity/Nivel";
import { INivelsRepository } from "../../repositories/INivelsRepository";

@injectable()
class ListNivelUseCase {

    constructor(
        @inject('NivelsRepository')
        private nivelsRepository: INivelsRepository 
    ){}

    async execute():Promise<Nivel[]>{
     const nivels =  await this.nivelsRepository.list()
     return nivels
    }
}


export {ListNivelUseCase}