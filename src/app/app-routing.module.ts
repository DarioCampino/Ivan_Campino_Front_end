import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarcomentarioComponent } from './components/listarcomentario/listarcomentario.component';
import { Routes } from '@angular/router';
import { AgregareditarcomentarioComponent } from './components/agregareditarcomentario/agregareditarcomentario.component';
import { VercomentarioComponent } from './components/vercomentario/vercomentario.component';


const routes: Routes =[
  {path:'', component:ListarcomentarioComponent},
  {path:'add', component:AgregareditarcomentarioComponent},
  {path:'editar/:id',component:AgregareditarcomentarioComponent},
  {path:'visualizar/:d',component:VercomentarioComponent},
  {path: '**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
