import { AppConstants } from './../app-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentDate = new Date();
 
  

  constructor(private http: HttpClient) {

  }

  getListUsuario(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl)
  }

  getListUsuarioPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + "page/" + pagina)
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete<any>(AppConstants.baseUrl + id)
  }

  getUsuario(id: string): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id)
  }

  getUsuarioPesquisado(nome: string, page: number): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + "pesquisapornome?nome=" + nome + "?page=" + page)
  }

  salvarUsuario(usuario): Observable<any> {
    console.log(usuario.dataNascimento)
    console.log("======== sua data aquiiiiiiiiiiiiii ========")
    return this.http.post<any>(AppConstants.baseUrl, usuario)
  }

  atualizarUsuario(usuario): Observable<any> {

    return this.http.put<any>(AppConstants.baseUrl, usuario)
  }


  userAutenticado() {
    if (localStorage.getItem('token') != null &&
      localStorage.getItem('token').toString().trim() != null) {
      return true
    } else {
      return false
    }
  }

  
  

}
