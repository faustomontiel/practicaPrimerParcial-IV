import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaProductosComponent } from '../../src/app/componentes/tabla-productos/tabla-productos.component';



const routes: Routes = [
  {path: '', component: TablaProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
