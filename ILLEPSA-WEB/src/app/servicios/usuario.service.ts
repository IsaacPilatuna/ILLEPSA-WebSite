import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {UsuarioInterface} from '../interfaces/usuario-interface';

@Injectable()

export class UsuarioService {

  listaDeUsuarios: any;

  constructor(private readonly _httpClient: HttpClient) {}

  crear(nuevoUsuario: UsuarioInterface): Observable<UsuarioInterface> {
    return this._httpClient.post(environment.url + '/usuario/crear', nuevoUsuario);
  }

  editar(usuarioAEditar: UsuarioInterface): Observable<UsuarioInterface> {
    return this._httpClient.post(environment.url + `/usuario/editar/${usuarioAEditar.id}`, usuarioAEditar);
  }

  listarUsuarios(): Observable<any> {
    return this._httpClient.get(environment.url + '/usuario/obtenerTodos');
  }

  obtenerUno(id: number): Observable<any> {
    return this._httpClient.get(environment.url + `/usuario/${id}`);
  }
}
