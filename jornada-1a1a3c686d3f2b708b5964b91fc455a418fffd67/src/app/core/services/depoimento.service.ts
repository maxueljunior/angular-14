import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Depoimento } from '../types/type';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {

  private URL_API: string = environment.apiUrl;
  private cache$!: Observable<Depoimento[]>

  constructor(private http: HttpClient) { }

  public listar(): Observable<Depoimento[]>{
    if(!this.cache$){
      this.cache$ = this.requestDepoimentos().pipe(
        shareReplay(1)
      )
    }
    return this.cache$;
  }

  private requestDepoimentos(): Observable<Depoimento[]>{
    return this.http.get<Depoimento[]>(`${this.URL_API}/depoimentos`);
  }
}
