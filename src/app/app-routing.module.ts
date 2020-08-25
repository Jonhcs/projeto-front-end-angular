import { GuardiaoGuard } from './guardiao.guard';

import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioaddComponent } from './componente/usuario/usuarioadd/usuarioadd.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [GuardiaoGuard]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuarios', component: UsuarioComponent, canActivate: [GuardiaoGuard]},
  {path: 'usuarioAdd', component: UsuarioaddComponent, canActivate: [GuardiaoGuard]},
  {path: 'usuarioAdd/:id', component: UsuarioaddComponent, canActivate: [GuardiaoGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
