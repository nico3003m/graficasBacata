import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', loadChildren:()=>
    import('./proyecto/pages/principal/proyecto.module').then(m=>m.ProyectoModule)
  },
  {
    path:'infoNostros', loadChildren:()=>
    import('./proyecto/pages/nosotros/nosotros.module').then(m=>m.NosotrosModule)
  },
  {
    path:'servicios', loadChildren:()=>
    import('./proyecto/pages/servicios/servicios.module').then(m=>m.ServiciosModule)
  },
  {
    path:'contacto', loadChildren:()=>
    import('./proyecto/pages/contacto/contacto.module').then(m=>m.ContactoModule)
  },
  {path:'', pathMatch:'full', redirectTo:''},
  {path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
