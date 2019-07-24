import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { UsuarioEntity } from "src/usuarios/usuario.entity";

@Entity()
export class ProductoEntity{
    
    @PrimaryGeneratedColumn()
    idProducto?: string;

    @Column(
        {
            type:"varchar",length:45,
            name:'nombre'
        }
    )
    nombre: string;

    @Column(
        {
            type:'decimal',
            scale:2,
            name:'precio'
        }
    )
    precio: number;


    @ManyToOne(type=>UsuarioEntity,usuario => usuario.producto)
    usuario:UsuarioEntity;
}