import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, FindOneOptions } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()

export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>) {}

    async obtenerTodos(skip: number, limit: number): Promise<UsuarioEntity[]> {
        const obtenerTodosPromesa = await this._usuarioRepository.find({
            order: {
                id: 'DESC'
            },
            skip: skip,
            take: limit
        })

        return obtenerTodosPromesa
    }

    async obternPorId(id: number): Promise<UsuarioEntity> {
        return await this._usuarioRepository.findOne(id)
    }

    async obtenerPorEmail(correo: string): Promise<UsuarioEntity> {
        const opciones: FindOneOptions = {
            where: {
                correo
            }
        }

        const unUsuario = await this._usuarioRepository.findOne(undefined, opciones)
        return unUsuario
    }

    async crear(nuevoUsuario:UsuarioEntity):Promise<UsuarioEntity> {
        const usuarioCreado = await this._usuarioRepository.create(nuevoUsuario)
        return this._usuarioRepository.save(usuarioCreado)
    }

    async editar(id: number, usuarioAEditar: UsuarioEntity): Promise<UsuarioEntity> {
        await this._usuarioRepository.update(id, usuarioAEditar)

        return this.obternPorId(id)
    }

    async query(consulta: object): Promise<UsuarioEntity[]> {

        return await (this._usuarioRepository.find({
            order: {
                id: 'DESC'
            },
            where: consulta
        }))
    }

    contar(consulta:object) {
        return this._usuarioRepository.count({
            where: consulta
        })
    }
}
