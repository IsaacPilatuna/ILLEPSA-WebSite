import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from "../interfaces/Producto";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  /*BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient){

  }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.BASE_URL}/producto`);
  }

  getProducto(id:string):Observable<Producto>{
    return this.http.get<Producto>(`${this.BASE_URL}/producto/${id}`);
  }

  crearProducto(producto: Producto):Observable<Producto>{
    return this.http.post<Producto>(`${this.BASE_URL}/producto/create`,producto);
  }

  deleteProducto(id: string):Observable<Producto>{
    return this.http.delete<Producto>(`${this.BASE_URL}/producto/delete?productID=${id}`)
  }

  updateProducto(id:string,producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(`${this.BASE_URL}/producto/update?productoID=${id}`,producto)
  }*/

  private subject = new Subject<any>();
  usuarios=[];
  usuarioLogeado:any;

    sendMessage(message: boolean) {
        this.subject.next(message);
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
   
}
