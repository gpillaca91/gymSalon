import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { Reserva } from './../../interfaces/reserva.interface';
import { ProductoService } from '../../servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var jQuery:any;
declare var $:any;
declare var swal:any;

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styles: []
})
export class ReservaComponent implements OnInit {

  forma:FormGroup;  
  id:string;
  arrayCuotas:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
  arrayTarjetas:any[] = [{
    codigo : 'VS001',
    nombre :'visa'
  },{
    codigo : 'MC001',
    nombre :'Mastercard'
  },{
    codigo : 'DI001',
    nombre :'Diners'
  },{
    codigo : 'AE001',
    nombre :'American Express'
  },];
  arrayMes:any[] = [{
    codigo : '1',
    nombre :'Enero'
  },{
    codigo : '2',
    nombre :'Febrero'
  },{
    codigo : '3',
    nombre :'Marzo'
  },{
    codigo : '4',
    nombre :'Abril'
  },{
    codigo : '5',
    nombre :'Mayo'
  },{
    codigo : '6',
    nombre :'Junio'
  },{
    codigo : '7',
    nombre :'Julio'
  },{
    codigo : '8',
    nombre :'Agosto'
  },{
    codigo : '9',
    nombre :'Septiembre'
  },{
    codigo : '10',
    nombre :'Octubre'
  },{
    codigo : '11',
    nombre :'Noviembre'
  },{
    codigo : '12',
    nombre :'Diciembre'
  },];
  arrayAnio:number[]=[];
  
  reserva:Reserva = {
     nombres: '',
     apellidos: '',
     correo : '',
     fecha : new Date(),
     contacto: '',
     mensaje:'',
     productoId:'',
     titular:'',
     numeroTarjeta:'',
     codigoCVV:'',
  }; 
   

  constructor( public _ps:ProductoService,private ar:ActivatedRoute,private route:Router  ) { 
    this.crearControles();

    this.ar.params.subscribe(data=>{
      this.id = data['codigo'];
      this.reserva.productoId = data['codigo'];
    });
     
    this.mostrarCalendario(); 
    // this.forma.setValue( this.reserva );
  }

  ngOnInit() {
    for (let index = new Date().getFullYear() ; index < 2031; index++) {
        this.arrayAnio.push(index);
    }
  }
  crearControles(){
    this.forma = new FormGroup({
      'nombres': new FormControl(''),
      'apellidos': new FormControl(''),
      'correo': new FormControl('',[Validators.pattern('([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)'),Validators.required]),
      'fecha': new FormControl('',Validators.required),
      'contacto': new FormControl('',[Validators.required,Validators.maxLength(9),Validators.minLength(7)] ),
      'mensaje': new FormControl(''),
      'titular': new FormControl(''),
      'numTarjeta': new FormControl(''),
      'codigoCVV': new FormControl(''),
    });
    this.forma.get('nombres').setValidators(Validators.required);
    this.forma.get('titular').setValidators(Validators.required);
    this.forma.get('numTarjeta').setValidators(Validators.required);
    this.forma.get('codigoCVV').setValidators([Validators.required,Validators.maxLength(4)]);
  }


  enviarForm(){
    console.log(this.forma);
    // console.log('Valores', this.forma.value );
    this._ps.guardarReserva( this.reserva ).subscribe(
      data=>{
        console.log('id Reserva',data['name']);
      }
    );
    this.mostrarModal();
    setTimeout(()=>{
      this.route.navigate(['/home']);
    },3000);
    console.log('Reserva : ',this.reserva);
    // this.forma.reset();
    
  }  
  mostrarModal(){
    swal({
      title: 'FELICIDADES',
      text: 'Su reserva fue registrada!',
      icon: 'success',
      buttons:false,
      timer: 2500,
    });
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

