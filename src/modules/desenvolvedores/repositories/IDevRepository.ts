import { DesenvolvedorDTO } from "../dtos/IDesenvolvedor";
import { Desenvolvedores } from "../entity/Desenvolvedores";


interface IDevRepository {

    create(data: DesenvolvedorDTO): Promise<void>
    list():Promise<Desenvolvedores[]>
    remove(id:string):Promise<void>
    edit(data: DesenvolvedorDTO):Promise<void>
}


export {IDevRepository}