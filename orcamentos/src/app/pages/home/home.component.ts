import { Component } from '@angular/core';
import { FormProdutoService } from 'src/app/core/service/form-produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public formProdutoService: FormProdutoService){

  }
}
