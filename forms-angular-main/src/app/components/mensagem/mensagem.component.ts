import { Component, Input, OnInit } from '@angular/core';
import { ConsultaCepService } from 'src/app/service/consulta-cep.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input()
  mensagem: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
