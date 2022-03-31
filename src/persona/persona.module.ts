import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonaController } from "./controllers/persona.controller";
import { Persona } from "./enities/persona.entity";
import { PersonaService } from "./services/persona.service";

@Module({
    imports: [TypeOrmModule.forFeature([Persona])],
    providers: [PersonaService],
    controllers: [PersonaController]
})
export class PersonaModule {

}