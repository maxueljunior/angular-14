import { PensamentoComponent } from './../pensamento/pensamento.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: any[] = [
    {
      conteudo: 'I <33 Angular',
      autoria: 'Maxuel Jr.',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 AngularI <33 Angular',
      autoria: 'Maxuel Jr.',
      modelo: 'modelo2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
