import { Controller, Get, Param, Post, Body, Put, Delete, BadRequestException, Query } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioDto } from "./dto/usuario.dto";
import { editarUsuario } from "./funciones/editar-usuario";
import { validate } from "class-validator";

@Controller('usuario')

export class UsuarioController {

    constructor(private readonly _usuarioService: UsuarioService) {}

    @Get('obtenerTodos')
    async obtenerTodos(
        @Query() objetosPaginacion: paginacion): Promise<UsuarioEntity[]>  {
        return await this._usuarioService.obtenerTodos(objetosPaginacion.skip, objetosPaginacion.limite)
    }


    @Get(':id')
    async obternPorId(
        @Param('id') id): Promise<UsuarioEntity> {
        return await this._usuarioService.obternPorId(id)
    }


    @Post('crear')
    async crear(
        @Body() nuevoUsuario): Promise<UsuarioEntity> {
        return await this._usuarioService.crear(nuevoUsuario)
    }

    @Post('editar/:id')
    async editar(
        @Param() id,
        @Body() usuario: UsuarioDto) {
        const usuarioAEditar = editarUsuario(usuario)
        const arregloErrores = await validate(usuarioAEditar)
        const existenErrores = arregloErrores.length > 0

        if(existenErrores)
        {
            console.error('Errores al editar al usuario', arregloErrores)
            throw new BadRequestException('Parametros incorrectos')
        }

        else {
            return this._usuarioService.editar(id, usuarioAEditar)
        }
    }

    @Get()
    async obtenerPorQuery(
        @Query() consulta: object): Promise<UsuarioEntity[]>  {
        return await this._usuarioService.query(consulta)
    }


    @Get('contar')
    contar(
        @Query() objetosPaginacion: paginacion) {
        return this._usuarioService.contar(objetosPaginacion.consulta)
    }
}

export interface paginacion {
    skip: number,
    limite: number,
    consulta: object
}

