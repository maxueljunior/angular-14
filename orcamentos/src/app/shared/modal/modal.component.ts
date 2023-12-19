import { Component } from '@angular/core';
import { FormProdutoService } from 'src/app/core/service/form-produto.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public formProdutoService: FormProdutoService){

  }


}
