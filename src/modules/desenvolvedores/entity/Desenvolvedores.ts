import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

@Entity("desenvolvedores")
class Desenvolvedores {

    @PrimaryColumn()
    id: string;

    @Column()
    nivel: string

    @Column()
    nome: string;

    @Column()
    sexo: string;

    @Column()
    datanascimento: Date;

    @Column()
    idade: string;

    @Column()
    hobby: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }


}

export {Desenvolvedores}