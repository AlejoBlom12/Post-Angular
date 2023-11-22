import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as e from 'express';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  baseURL = 'https://www.datos.gov.co/resource/xdk5-pm3f.json'
  constructor(private http: HttpClient) {
  }
  
  obtenerInfo():Observable<any> {
    return this.http.get(this.baseURL)
                        .pipe
                        ( catchError(e => {return throwError(e)}) )
  }
}
