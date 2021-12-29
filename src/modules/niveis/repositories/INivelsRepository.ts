import { Nivel } from "../entity/Nivel";


interface INivelsRepository {
    create(nivel: string):Promise<void>
    list():Promise<Nivel[]>
    edit(id: string, nivel: string):Promise<void>
    remove(id: string):Promise<void>
}

export {INivelsRepository}