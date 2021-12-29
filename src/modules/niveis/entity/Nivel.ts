
import { Column, Entity, PrimaryColumn } from "typeorm"

import {v4 as uuidV4} from "uuid"

@Entity('niveis')
class Nivel {

    @PrimaryColumn()
    id?: string;

    @Column()
    nivel: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }

}

export {Nivel}