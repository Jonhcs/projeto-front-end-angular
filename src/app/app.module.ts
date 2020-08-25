import { UserService } from './service/user.service';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http' /**Requisições ajax */

import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { UsuarioaddComponent } from './componente/usuario/usuarioadd/usuarioadd.component';
import { GuardiaoGuard } from './guardiao.guard';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxCurrencyModule } from "ngx-currency";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioaddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpInterceptorModule,
    NgxMaskModule.forRoot(options),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule,
    NgxCurrencyModule
    
  ],
  providers: [
    UserService,
    GuardiaoGuard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
