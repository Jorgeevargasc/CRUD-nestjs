import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Persona } from "../enities/persona.entity";


export class PersonaService extends BaseService<Persona>{

    constructor(@InjectRepository(Persona) private personaRepo : Repository<Persona>){
        super();
    }

    getRepository(): Repository<Persona> {
        return this.personaRepo;
    }
    
}