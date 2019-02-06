import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Productos } from '../interfaces/servicio.interface';
import { Reserva } from '../interfaces/reserva.interface';
import { Http,Headers } from '@angular/http';

import { map } from 'rxjs/operators';
// import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // propiedades
  private urlParcial = 'https://esteticabelleza-9f474.firebaseio.com';
  servicios:Productos[];
  cargoData = false;
  constructor(private _hhtp:Http) {
    this.mostrarServicios();
  }

  private mostrarServicios(){
    
    let url = `${ this.urlParcial }/servicios.json`;
    this._hhtp.get( url ).pipe(map(
        data=>{
          return data.json();
        }
    )).subscribe(
      (data:any)=>{
            this.servicios = data;
            this.cargoData = true;
             console.log( this.servicios );
      }
    );
    
  }// mostrarServicios

  cargarCategoriaServicios(codigo:string){
    let url=`${ this.urlParcial }/categoriaServicios/${ codigo }.json`;
    return this._hhtp.get( url ).pipe(map(
      data=>{
        return data.json();
      }
    ));
  }
  mostrarProductos(codigo:string)
  {
      let url=`${ this.urlParcial }/productos/${ codigo }.json`;
      return  this._hhtp.get( url ).pipe(map(
        data=>{
          return data.json();
        }
      ));
  }

  guardarReserva( reserva:Reserva ){
    let url= `${ this.urlParcial }/reservas.json`;
    let body = JSON.stringify( reserva );
    let header = new Headers({
      'Content-Type':'application/json'
    });
    return this._hhtp.post( url, body,{ headers:header }  ).pipe(map(
      data=>{        
        return data.json(); 
      },error=>{
        console.log(error);
      }
    ));
  }
}
