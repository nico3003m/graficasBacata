import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectoComponent } from './proyecto/pages/principal/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { nosotrosComponent } from './proyecto/pages/nosotros/nosotros.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiciosComponent } from './proyecto/pages/servicios/servicios.component';
import { ContactoComponent } from './proyecto/pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    FooterComponent,
    HeaderComponent,
    nosotrosComponent,
    CaruselComponent,
   
    ServiciosComponent,
         ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
