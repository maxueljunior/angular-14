import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-descricao',
  templateUrl: './seletor-descricao.component.html',
  styleUrls: ['./seletor-descricao.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorDescricaoComponent),
      multi: true
    }
  ]
})
export class SeletorDescricaoComponent implements ControlValueAccessor{
  @Input()
  label: string = '';

  @Input()
  placeholder: string = '';

  onChange = (comentario: string) =>{};
  onTouched = () => {};


  comentario!: string;

  writeValue(comentario: any): void {
    this.comentario = comentario;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  guardaComentario(texto: string){
    this.comentario = texto;
    this.onChange(this.comentario);
    this.onTouched();
  }
}
