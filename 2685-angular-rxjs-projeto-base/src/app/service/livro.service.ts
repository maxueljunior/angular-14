import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';
  // private readonly API = '/login';

  constructor(private http: HttpClient) { }

  public buscar(valorDigitado: string): Observable<LivrosResultado>{
    const params = new HttpParams()
      .append('q', valorDigitado);

    return this.http.get<LivrosResultado>(this.API, {params});
    // return this.http.post<LivrosResultado>(this.API, {
    //   username: "rodrigo",
    //   password: "123"
    // });
    // .pipe(
    //   map(resultado => resultado.items ?? []),
    // );
  }
}
