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
  productos:any[]=[];
  cargoData= false;
  constructor( private activatedRoute:ActivatedRoute
              ,private _ps:ProductoService
              ,private route:Router ) { 
      this.cargarCategorias();
      console.log( 'productos Constructor :',this.productos.length);
  }

  ngOnInit() {
  }

  cargarCategorias(){
    return new Promise((resolve, reject)=>{
      this.activatedRoute.params.subscribe(
        params=>{
          this._ps.cargarCategoriaServicios( params['codigo'] ).subscribe(
            (data:any)=>{
              this.categorias = data;
              this.cargoData = true;
              resolve();
              console.log('CATEGORIAS: ',this.categorias);
            }
          );
        }
      );
    });

   
  }
  mostrarProductos(id:string){
    //  this.route.navigate(['productos',id]);
    this.cargarCategorias().then(()=>{
      this._ps.mostrarProductos(id).subscribe(
        (info:any[])=>{
          this.productos = info;
            console.log('PRODUCTOS : ', info);
            // console.log('PRODUCTOS items: ', info.length);
        }
      );
    });
    
   }

}
