import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  private url_API: string = "https://viacep.com.br/ws/";

  constructor(private http: HttpClient) { }

  public getConsultaCep(cep: string){
    return this.http.get(`${this.url_API}${cep}/json`);
  }
}
