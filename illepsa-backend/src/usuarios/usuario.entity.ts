import {Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany} from "typeorm";
import {ProductoEntity} from '../productos/producto.entity';

@Entity()
export class UsuarioEntity{

    @PrimaryGeneratedColumn()
    id?: number

    @Column({type: 'varchar', name: 'nombre_completo'})
    nombreCompleto: string

    @Column({type: 'varchar', name: 'empresa'})
    empresa: string

    @Column({type: 'varchar', name: 'ruc', unique: true})
    ruc: number

    @Column({type: 'varchar', name: 'usuario_password', default: 1234})
    password?: string

    @OneToMany(type=>ProductoEntity,producto=>producto.usuario)
    producto?:ProductoEntity
    
}
