import { inject, injectable } from "tsyringe";
import { Desenvolvedores } from "../../entity/Desenvolvedores";
import { IDevRepository } from "../../repositories/IDevRepository";

@injectable()
class ListDevUseCase {

    constructor(
        @inject("DevRepository")
        private devsRepository: IDevRepository
    ){}

    async execute():Promise<Desenvolvedores[]>{
        return await this.devsRepository.list()
    }

}

export {ListDevUseCase}