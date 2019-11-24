import { FaleConosco } from './../models/fale-conosco';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HematitaService {

  base_path = "http://192.168.1.100:3000/faleconosco";


  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
// Handle API errors
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('Erro na execução do serviço:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Código retornado ${error.status}, ` +
      `Corpo da mensagem: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Alguma coisa muito séria aconteceu, tente novamente!');
};


// Create a new item
createItem(item): Observable<FaleConosco> {
  //console.log("registrando..."+JSON.stringify(item));

  return this.http
    .post<FaleConosco>(this.base_path, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

// Get single student data by ID
getItem(id): Observable<FaleConosco> {
  return this.http
    .get<FaleConosco>(this.base_path + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

// Get students data
getList(): Observable<FaleConosco> {
  return this.http
    .get<FaleConosco>(this.base_path)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

// Update item by id
updateItem(id, item): Observable<FaleConosco> {
  return this.http
    .put<FaleConosco>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

// Delete item by id
deleteItem(id) {
  return this.http
    .delete<FaleConosco>(this.base_path + '/' + id, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}



}

