import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent implements OnInit {

  productos:any[];

  constructor( private route:ActivatedRoute,
               public _ps:ProductoService) { }

  ngOnInit() {
    this.route.params.subscribe(
      data=>{
        this._ps.mostrarProductos( data['id'] ).subscribe(
          (info:any[])=>{
            this.productos = info;
              console.log(info);
          }
        );
      }
    );

  }

}
