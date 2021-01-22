import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private url = 'http://localhost:3000/';

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private http: HttpClient) {}

  fetchAll(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url, { responseType: 'json' })
      .pipe(tap((_) => console.log('fetched users')),
      catchError(
        this.errorHandlerService.handleError<User[]>("Mensagem: fetchAll", [])
      )
      );
  }
}
