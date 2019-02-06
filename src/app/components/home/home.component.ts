import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cargarData=false;
  constructor() {
    setTimeout(()=>{
      this.cargarData=true;
    },1000);
   }

  ngOnInit() {
  }
  
}
