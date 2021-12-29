import { getRepository, Repository } from "typeorm";
import { DesenvolvedorDTO } from "../dtos/IDesenvolvedor";
import { Desenvolvedores } from "../entity/Desenvolvedores";
import { IDevRepository } from "./IDevRepository";

class DevRepository implements IDevRepository {

    private repository: Repository<Desenvolvedores>

    constructor() {
        this.repository = getRepository(Desenvolvedores)
    }


    async create({ hobby, datanascimento, idade, sexo, nivel, nome }: DesenvolvedorDTO): Promise<void> {
        const dev = this.repository.create({
            hobby, datanascimento, idade, sexo, nivel, nome
        })

        await this.repository.save(dev)

    }

    async list(): Promise<Desenvolvedores[]> {
        return this.repository.find()
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete({ id })
    }

    async edit({ id, nome, datanascimento, hobby, idade, nivel, sexo }: DesenvolvedorDTO): Promise<void> {


        await this.repository
            .createQueryBuilder()
            .update()
            .set({ nome, datanascimento, hobby, idade, nivel, sexo })
            .where("id = :id", { id })
            .execute();

    }


}


export { DevRepository }