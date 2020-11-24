import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Users} from '../Models/Users.model';

@Injectable({
  providedIn: 'root'
})
export class DadosCadastraisService {

  url = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    

    // Obtem todos os uruários
    getUsers(): Observable<Users[]> {
     return this.httpClient.get<Users[]>(this.url)
     .pipe(
      retry(2),
      catchError(this.handleError)
    )
    }

    // Obtem um USUÁRIO pelo id
    getUserById(id: number): Observable<Users> {
      return this.httpClient.get<Users>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    }

    //Salva um usuário
    saveUser(user: Users): Observable<Users> {
      return this.httpClient.post<Users>(this.url, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    }

    //Atualiza um usuário 
    updateUser(user: Users): Observable<Users> {
      return this.httpClient.put<Users>(this.url + '/' + user.id, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    
   // deleta um usuário
    deleteUser(user: Users) {
      return this.httpClient.delete<Users>(this.url + '/' + user.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
}
