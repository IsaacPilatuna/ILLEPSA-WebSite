import { UsuarioDto } from "../dto/usuario.dto";

export function editarUsuario(usuario: UsuarioDto): UsuarioDto {

    const usuarioAEditar = new UsuarioDto()

    Object.keys(usuario).map(atributo => {
        usuarioAEditar[atributo] = usuario[atributo]
    })

    return usuarioAEditar
}
