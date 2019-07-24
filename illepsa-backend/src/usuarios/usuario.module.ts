import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity";
import {UsuarioController} from "./usuario.controller";
import {UsuarioService} from "./usuario.service";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [UsuarioEntity],
            'default'
        )
    ],  // Modulos
    controllers:[
        UsuarioController
    ], // Controladores
    providers:[
        UsuarioService
    ], // Servicios
    exports:[
        
    ] // Exportar Servicios
})
export class UsuarioModule{
}
