import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: []
})
export class ServicesComponent implements OnInit {

  constructor( public _productoService:ProductoService) { }

  ngOnInit() {
  }

}
