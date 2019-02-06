import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { Reserva } from './../../interfaces/reserva.interface';
import { ProductoService } from '../../servicios/producto.service';
import { ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styles: []
})
export class ReservaComponent implements OnInit {

  forma:FormGroup;  
  id:string;
  reserva:Reserva = {
     nombres: '',
     apellidos: '',
     correo : '',
     fecha : null,
     contacto: '',
     mensaje:'',
     productoId:'',
   }; 
   
  constructor( public _ps:ProductoService,private ar:ActivatedRoute  ) { 
    this.crearControles();

    this.ar.params.subscribe(data=>{
      this.id = data['codigo'];
      this.reserva.productoId = data['codigo'];
    });
     
    this.mostrarCalendario(); 
    // this.forma.setValue( this.reserva );
  
  }

  ngOnInit() {
  }
  crearControles(){
    this.forma = new FormGroup({
      'nombres': new FormControl(''),
      'apellidos': new FormControl(''),
      'correo': new FormControl('',[Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),Validators.required]),
      'fecha': new FormControl('',Validators.required),
      'contacto': new FormControl('',[Validators.required,Validators.maxLength(9),Validators.minLength(7)] ),
      'mensaje': new FormControl('')
    });
    this.forma.get('nombres').setValidators(Validators.required);
  }


  enviarForm(){
    console.log(this.forma);
    // console.log('Valores', this.forma.value );
  
    this._ps.guardarReserva( this.reserva ).subscribe(
      data=>{
        console.log('id Reserva',data['name']);
      }
    );
    console.log('Reserva : ',this.reserva);
    // this.forma.reset();
  }


  mostrarCalendario(){
    
    $(document).ready(function() {
      $('#appointment_date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });
    });
  }
  soloNumeros(event:any){
    let res=  (event.charCode === 8 || event.charCode === 0) ? null : event.charCode >= 48 && event.charCode <= 57; 
    console.log(res);
    return res; 
  }
  soloLetras(e:any){
    let key = e.keyCode || e.which;
    let tecla = String.fromCharCode(key).toLowerCase();
    let letras = ' áéíóúabcdefghijklmnñopqrstuvwxyz';
    let especiales:any = '8-37-39-46';

    let tecla_especial = false;
    for(let i in especiales){
         if(key === especiales[i]){
             tecla_especial = true;
             break;
         }
     }

     if(letras.indexOf(tecla)===-1 && !tecla_especial){
         return false;
     }
  }

  

  
}

