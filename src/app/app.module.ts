import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaProductosComponent } from './componentes/tabla-productos/tabla-productos.component';
import { BtnBorrarComponent } from './componentes/btn-borrar/btn-borrar.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaProductosComponent,
    BtnBorrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
