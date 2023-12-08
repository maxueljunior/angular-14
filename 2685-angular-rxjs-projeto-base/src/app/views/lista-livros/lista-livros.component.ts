import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy{

  listaLivros: [];

  campoBusca: string = '';
  subscription: Subscription;

  constructor(private service: LivroService) { }

  ngOnDestroy(): void {
    console.log('terminamos....');
    this.subscription.unsubscribe();
  }

  public buscarLivros(){
    this.subscription = this.service.buscar(this.campoBusca).subscribe(
      {
        next: retornoAPI => console.log(retornoAPI),
        error: erro => console.error(erro),
        complete: () => console.log('terminou...')
      }
    );
  }

}



