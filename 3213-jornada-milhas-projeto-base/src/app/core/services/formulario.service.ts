import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  cadastroForm: FormGroup | null = null;

  getCadastro(): FormGroup{
    return this.cadastroForm as FormGroup;
  }

  setCadastro(form: FormGroup): void{
    this.cadastroForm = form;
  }
}
