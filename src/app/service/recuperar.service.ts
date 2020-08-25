import { Usuario } from './../model/usuario';
import { AppConstants } from './../app-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecuperarService {

  constructor(private http: HttpClient) { }

  recuperarEmail(login) {
    let usuario = new Usuario();
    usuario.login = login;

    return this.http.post<any>(AppConstants.baseUrlRecuperar, usuario).subscribe(data => { 
      console.log(data.error)
      alert(data.error)  
    }, error => {
      alert("Acesso Negado!!!")
    })
  }
}
