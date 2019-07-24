import {Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany} from "typeorm";
import { ProductoEntity } from "src/productos/producto.entity";

@Entity()
export class UsuarioEntity{
    
    @PrimaryGeneratedColumn()
    idUsuario?: string;

    @Column(
        {
            type:"varchar",length:45,
            name:'nombreCompleto'
        }
    )
    nombreCompleto: string;

    @Column(
        {
            type:'varchar',length:45,
            name:'empresa'
        }
    )
    empresa: string;

    @Column(
        {
            type:'decimal',
            length:'13',
            scale:2,
            name:'ruc'
        }
    )
    ruc: number;


    @OneToMany(type=>ProductoEntity,producto=>producto.usuario)
    producto:ProductoEntity
    
}