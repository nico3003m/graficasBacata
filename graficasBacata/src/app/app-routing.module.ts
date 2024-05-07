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
  {path:'', pathMatch:'full', redirectTo:''},
  {path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
