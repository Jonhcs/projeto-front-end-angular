import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token') != null) {
      const TOKEN = "Bearer " + localStorage.getItem('token');
      const TOKEN_REQUEST = req.clone({
        headers: req.headers.set('Authorization', TOKEN)
      });

      return next.handle(TOKEN_REQUEST);

    }
    else {
      return next.handle(req);
    }
  }

  constructor() { }
}

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:HeaderInterceptorService,
    multi:true
  },],
})
export class HttpInterceptorModule { }