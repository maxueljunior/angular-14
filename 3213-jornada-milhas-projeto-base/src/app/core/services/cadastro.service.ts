import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cadastro } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private urlApi: string = environment.apiUrl;

  constructor(
    private http: HttpClient
    ) { }

  public cadastrar(usuario: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(`${this.urlApi}/auth/cadastro`, usuario);
  }

  public buscar(token: string): Observable<Cadastro>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Cadastro>(`${this.urlApi}/auth/perfil`, {headers});
  }

  public editar(token: string, usuario: Cadastro): Observable<Cadastro>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.patch<Cadastro>(`${this.urlApi}/auth/perfil`, usuario, {headers});
  }
}
