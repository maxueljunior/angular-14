import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, switchMap, map } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy{

  listaLivros: Livro[];

  campoBusca = new FormControl();
  subscription: Subscription;
  livro: Livro;

  constructor(private service: LivroService) { }

  ngOnDestroy(): void {
    console.log('terminamos....');
    this.subscription.unsubscribe();
  }

  livroEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
      map(items => this.listaLivros = this.livrosResultadoParaLivros(items))
    )

  // public buscarLivros(){
  //   this.subscription = this.service.buscar(this.campoBusca.value).subscribe(
  //     {
  //       next: (items) => {
  //         this.listaLivros = this.livrosResultadoParaLivros(items);
  //       },
  //       error: erro => console.error(erro),
  //     }
  //   );
  // }

  public livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[]{
    return items.map(item => {
      return new LivroVolumeInfo(item)
    })
  }
}



