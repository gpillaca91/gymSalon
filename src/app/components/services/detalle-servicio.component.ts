import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';
@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styles: []
})
export class DetalleServicioComponent implements OnInit {

  categorias:any[]=[];
  cargoData= false;
  constructor( private activatedRoute:ActivatedRoute
              ,private _ps:ProductoService
              ,private route:Router ) { 
      
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params=>{
        this._ps.cargarCategoriaServicios( params['codigo'] ).subscribe(
          (data:any)=>{
            this.categorias = data;
            this.cargoData = true;
            console.log(data);
          }
        );
      }
    );
  }

   productos(id:string){
     this.route.navigate(['productos',id]);
   }

}
