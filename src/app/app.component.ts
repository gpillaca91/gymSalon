import { Component } from '@angular/core';
import { ProductoService } from './servicios/producto.service';
import { InfoPaginaService } from './servicios/info-pagina.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public _ps:ProductoService,public _infPagina:InfoPaginaService){
      
  }

}
