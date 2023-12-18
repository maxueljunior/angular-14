import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Depoimento, Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  listaPromocoes!: Promocao[];
  listaDepoimentos!: Depoimento[];

  constructor(
    private servicePromocao: PromocaoService,
    private depoimentoService: DepoimentoService
    ){

  }

  ngOnInit(): void {
    this.servicePromocao.listar().subscribe(
      (promocoes) => this.listaPromocoes = promocoes
    );
    this.depoimentoService.listar().subscribe(
      (depoimentos) => this.listaDepoimentos = depoimentos
    )
  }
}
