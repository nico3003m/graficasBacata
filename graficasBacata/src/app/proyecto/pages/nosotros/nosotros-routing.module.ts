import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { nosotrosComponent } from './nosotros.component';


const routes: Routes = [
  { path: '', component: nosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }