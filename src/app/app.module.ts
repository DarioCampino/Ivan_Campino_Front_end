import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregareditarcomentarioComponent } from './components/agregareditarcomentario/agregareditarcomentario.component';
import { ListarcomentarioComponent } from './components/listarcomentario/listarcomentario.component';
import { VercomentarioComponent } from './components/vercomentario/vercomentario.component';
import { ListarDatosPersonalesComponent } from './components/listar-datos-personales/listar-datos-personales.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregareditarcomentarioComponent,
    ListarcomentarioComponent,
    VercomentarioComponent,
    ListarDatosPersonalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
