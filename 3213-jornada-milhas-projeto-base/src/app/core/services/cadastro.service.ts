import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cadastro } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private urlApi: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public cadastrar(usuario: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(`${this.urlApi}/auth/cadastro`, usuario);
  }
}
