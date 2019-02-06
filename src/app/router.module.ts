import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { DetalleServicioComponent } from './components/services/detalle-servicio.component';
import { ProductosComponent } from './components/services/productos.component';
import { ReservaComponent } from './components/services/reserva.component';


const router:Routes = [
    { path: 'home', component : HomeComponent  },
    { path: 'about' , component : AboutComponent },
    { path: 'çontact' , component: ContactComponent },
    { path: 'services' , component: ServicesComponent },
    { path: 'categoriaServicio/:codigo' , component: DetalleServicioComponent },
    { path: 'productos/:id' , component: ProductosComponent },
    { path: 'reserva/:codigo' , component: ReservaComponent },
    { path: '**', pathMatch:'full', redirectTo:'home'  },
    { path: '', pathMatch:'full', redirectTo:'home'  }
];

@NgModule({
    imports:[
        RouterModule.forRoot( router,{ useHash:true } )
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {

}
