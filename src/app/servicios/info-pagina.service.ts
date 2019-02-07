import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interfaces
import { Trabajador } from '../interfaces/equipo.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  // propiedades
  private urlParcial = 'https://esteticabelleza-9f474.firebaseio.com';
  equipoTrabajo:Trabajador[] = [];
  objInfoPagina:any;
  constructor( private _http:HttpClient) {
    this.CargarEquipo();
    this.infoPagina();
   }

   private CargarEquipo(){
    // tslint:disable-next-line:prefer-const
    let url = `${ this.urlParcial }/EquipoTrabajo.json`;
      this._http.get( url ).subscribe(
        (data:Trabajador[])=>{
          this.equipoTrabajo = data  ;
        }
      );
  }

  private infoPagina(){
    let url = `${ this.urlParcial }/infoPagina.json`;
    this._http.get( url ).subscribe(
      (data):any=>{
        this.objInfoPagina =data;
      }
    );
  }
}
