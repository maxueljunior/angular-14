import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor(private dialog: MatDialog) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(''),
      destino: new FormControl(''),
      tipo: new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0)
    });
   }

  public getDescricaoPassageiros(): string{
    let descricao = '';

    const adultos = this.formBusca.get('adultos')?.value;
    if(adultos && adultos > 0){
      if(adultos == 1){
        descricao += `${adultos} passageiro`
      }else{
        descricao += `${adultos} passageiros`
      }
    }

    const criancas = this.formBusca.get('criancas')?.value;
    if(criancas && criancas > 0){
      if(criancas == 1){
        descricao += `, ${criancas} criança`
      }else{
        descricao += `, ${criancas} crianças`
      }
    }

    const bebes = this.formBusca.get('bebes')?.value;
    if(bebes && bebes > 0){
      if(bebes == 1){
        descricao += `, ${bebes} bebê`
      }else{
        descricao += `, ${bebes} bebês`
      }
    }

    return descricao;
  }

  public buscaForm(nome: string): FormControl{
    const control = this.formBusca.get(nome);
    if(!control){
      throw new Error(`FormControl com ${nome} não existe`);
    }
    return control as FormControl;

  }

  public alterarTipo(evento: MatChipSelectionChange, tipo: string): void{
    if(evento.selected){
      this.formBusca.patchValue({
        tipo: tipo,
      })
    }
  }

  inverter(): void{
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;

    this.formBusca.patchValue({
      origem: destino,
      destino: origem
    })
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
}
