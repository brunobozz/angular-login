import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

import { User } from '../models/User';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private url = 'http://localhost:3000/users';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient
  ) {}

  fetchAll(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url, { responseType: 'json' })
      .pipe(
        tap((_) => console.log('fetched users')),
        catchError(
          this.errorHandlerService.handleError<User[]>('Mensagem: fetchAll', [])
        )
      );
  }

  post(userForm: any): Observable<any> {
    console.log(userForm);
    return this.http
      .post(this.url, userForm, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>('post')));
  }

  update(user: User): Observable<any> {
    return this.http
      .put<User>(this.url, user, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>('update')));
  }

  delete(id: number): Observable<any> {
    const url = this.url + '/' + id;

    return this.http
      .delete<User>(url, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>('delete')));
  }
}
