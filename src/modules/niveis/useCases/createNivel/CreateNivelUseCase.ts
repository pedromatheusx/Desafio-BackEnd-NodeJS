import { inject, injectable } from "tsyringe";
import { INivelsRepository } from "../../repositories/INivelsRepository";

@injectable()
class CreateNivelUseCase {

constructor(
    @inject('NivelsRepository')
    private nivelsRepository: INivelsRepository
){}
    
    async execute(nivel: string){
    
      
    await this.nivelsRepository.create(nivel)        
        
    }

}

export { CreateNivelUseCase}