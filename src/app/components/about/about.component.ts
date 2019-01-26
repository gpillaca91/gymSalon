import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor( public _infoPagina:InfoPaginaService ) { }

  ngOnInit() {
  }

}
