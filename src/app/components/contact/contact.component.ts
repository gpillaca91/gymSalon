import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var swal:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit() {
  }


  guardarInfo(){
    this.mostrarModal();
    setTimeout(()=>{
      this.route.navigate(['/home']);

    },2500);
    
  }
  mostrarModal(){
    swal({
      title: 'Mensaje Enviado!',
      text: 'correctamente, gracias por su preferencia',
      icon: 'success',
      buttons:false,
      timer: 2500,
    });
  }
}
