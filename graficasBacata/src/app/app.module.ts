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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { ServiciosComponent } from './proyecto/pages/servicios/servicios.component';
import { ContactoComponent } from './proyecto/pages/contacto/contacto.component';
import { FormsModule } from '@angular/forms';

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
    BrowserAnimationsModule,   
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
