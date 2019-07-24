import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [UsuarioEntity],
            'default'
        )
    ],  // Modulos
    controllers:[
        
    ], // Controladores
    providers:[
        
    ], // Servicios
    exports:[
        
    ] // Exportar Servicios
})
export class UsuarioModule{
}