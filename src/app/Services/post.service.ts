import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public client: HttpClient) { }


  guardarItem (item: any):Observable <any> {
    return this.client.post("http://localhost:3000/api/save", item)
          .pipe(
            catchError(error=>{
            alert("Se ha producido un error")
            return error
            // return throwError(error)
          }))
  }

  // obtenerItem():Observable<any> {
  //   return this.client.get("http://localhost:3000/api/save")
  //                       .pipe
  //                       ( catchError(e => {return throwError(e)}) )
  // }
}
