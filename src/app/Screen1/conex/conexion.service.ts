import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from '../Casa';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  precio: number = 0;
  url:string = 'http://GeraltRivia1.pythonanywhere.com/predecir_precio'
  constructor(public http:HttpClient) { 

  }

  Enviardatos(casa:Casa):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.url,casa,httpOptions)
  }
}
