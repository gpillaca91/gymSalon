import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../servicios/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  anio = new Date().getFullYear();
  constructor( public _ip:InfoPaginaService ) { }

  ngOnInit() {
  }

}
