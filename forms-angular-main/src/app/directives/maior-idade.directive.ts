import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value;
    if(dataNascimento !== ""){
      const anoDataNascimento = new Date(dataNascimento).getFullYear();
      const anoNascMais18 = anoDataNascimento + 18;
      const anoDeHoje = new Date().getFullYear();

      const ehMaior = anoNascMais18 <= anoDeHoje;
      return ehMaior ? null : {'maiorIdadeValidator': true};
    }
    return null;
  }
}
