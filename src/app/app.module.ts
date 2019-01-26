import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// rutas
import { AppRoutingModule } from './router.module';

// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { WrapperComponent } from './components/shared/wrapper/wrapper.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DetalleServicioComponent } from './components/services/detalle-servicio.component';
import { ProductosComponent } from './components/services/productos.component';
import { ReservaComponent } from './components/services/reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WrapperComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    DetalleServicioComponent,
    ProductosComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
