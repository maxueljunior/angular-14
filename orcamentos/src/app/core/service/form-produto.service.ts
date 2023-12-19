import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormProdutoService {

  formProduto: FormGroup;

  constructor(public dialog: MatDialog) {
    this.formProduto = new FormGroup({
      codigo: new FormControl(''),
      descricao: new FormControl(''),
      material: new FormControl(''),
      comentario: new FormControl('')
    });
  }

  clicou(): void{
    console.log(this.formProduto.value);
  }

  obterControl(nome: string): FormControl{
    if(!nome){
      throw new Error(`Não existe o FormControl ${nome}`);
    }
    return this.formProduto.get(nome) as FormControl;
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '50%',
      height: '50%'
    });
  }
}
