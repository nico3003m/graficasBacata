import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectoComponent } from './proyecto/pages/principal/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { nosotrosComponent } from './proyecto/pages/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    FooterComponent,
    HeaderComponent,
    nosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
