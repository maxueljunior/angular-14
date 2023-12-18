import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estado } from '../types/type';

const URL_API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  private cache$?: Observable<Estado[]>;

  private requestEstado(): Observable<Estado[]>{
    return this.http.get<Estado[]>(`${URL_API}/estados`);
  }

  public listar(): Observable<Estado[]>{
    if(!this.cache$){
      this.cache$ = this.requestEstado().pipe(
        shareReplay(1)
      )
    }
    return this.cache$;
  }
}
