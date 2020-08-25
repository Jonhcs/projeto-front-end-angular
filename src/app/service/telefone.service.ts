import { AppConstants } from './../app-constants';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  constructor(private http:HttpClient) { }

  deleteTelefone(id: number): Observable<any> {
    return this.http.delete<any>(AppConstants.baseUrlTelefone + id)
  }
}
