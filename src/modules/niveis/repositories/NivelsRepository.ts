import { getRepository, Repository } from "typeorm";
import { Nivel } from "../entity/Nivel";
import { INivelsRepository } from "./INivelsRepository";


class NivelsRepository implements INivelsRepository {

    private repository: Repository<Nivel>

    constructor() {
        this.repository = getRepository(Nivel)
    }

    async create(nivel: string): Promise<void> {

        const nivels = this.repository.create({ nivel })
        await this.repository.save(nivels)
    }

    async list(): Promise<Nivel[]> {
        const nivels = await this.repository.find()
        return nivels
    }


    async edit(id: string, nivel: string): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ nivel })
            .where("id = :id", { id })
            .execute();
    }

   async remove(id: string): Promise<void> {
        await this.repository.delete(id)
    }

}


export { NivelsRepository }