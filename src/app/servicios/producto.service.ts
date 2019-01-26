import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/servicio.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // propiedades
  private urlParcial = 'https://esteticabelleza-9f474.firebaseio.com';
  servicios:Productos[];

  constructor(private _hhtp:HttpClient) {
    this.mostrarServicios();
  }

  private mostrarServicios(){
    let url = `${ this.urlParcial }/servicios.json`;
    this._hhtp.get( url ).subscribe(
      (data:Productos[])=>{
            this.servicios = data;
            console.log( this.servicios );
      }
    );
  }// mostrarServicios

  cargarCategoriaServicios(codigo:string){
    let url=`${ this.urlParcial }/categoriaServicios/${ codigo }.json`;
    return this._hhtp.get( url );
  }
  mostrarProductos(codigo:string)
  {
      let url=`${ this.urlParcial }/productos/${ codigo }.json`;
      return  this._hhtp.get( url );
  }
}
