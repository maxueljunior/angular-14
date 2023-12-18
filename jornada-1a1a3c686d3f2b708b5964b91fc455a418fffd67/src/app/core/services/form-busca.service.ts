import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor() {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(''),
      destino: new FormControl('')
    });
   }

  public buscaForm(nome: string): FormControl{
    const control = this.formBusca.get(nome);
    if(!control){
      throw new Error(`FormControl com ${nome} não existe`);
    }
    return control as FormControl;
  }
}
