import { HttpEvent , HttpRequest , HttpHandler , HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";
import { JWTUtils } from './jwtutils';
import 'rxjs/add/operator/map';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
      getToken: () => string = () => {
          return localStorage.getItem("token");
      };  
      constructor(public jwtUtils: JWTUtils){
      }
      intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = this.getToken();
        request = request.clone({
            setHeaders: {"Authorization": `Bearer ${token}`}
        });
        return next.handle(request);
    }    
  
}



