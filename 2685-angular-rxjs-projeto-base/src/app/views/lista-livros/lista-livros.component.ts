import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, switchMap, map, filter, debounceTime, tap, distinctUntilChanged, catchError, throwError, of } from 'rxjs';
import { searchBooksTrigger } from 'src/app/animations';
import { Item, Livro, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const PAUSA = 300;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
  animations: [
    searchBooksTrigger
  ]
})
export class ListaLivrosComponent{

  campoBusca = new FormControl();
  mensagemDeErro = '';
  livrosResultado: LivrosResultado;

  constructor(private service: LivroService) { }

  // totalDeLivros$ = this.campoBusca.valueChanges
  //   .pipe(
  //     debounceTime(PAUSA),
  //     filter((valorDigitado) => valorDigitado.length >= 3),
  //     distinctUntilChanged(),
  //     switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
  //     map(resultado => this.livrosResultado = resultado),
  //     catchError((erro) => {
  //       console.log(erro);
  //       return of();
  //     })
  //   );

  livroEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(PAUSA),
      filter((valorDigitado) => valorDigitado.length >= 3),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
      tap((valores) => console.log(valores)),
      map(valores => this.livrosResultado = valores),
      map(resultado => resultado.items ?? []),
      map(items => this.livrosResultadoParaLivros(items)),
      catchError((erro) => {
        console.log(erro);
        return throwError(() => new Error(this.mensagemDeErro = "Ops... ocorreu um erro, recarregue a pagina!"));
      })
    )

  public livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[]{
    return items.map(item => {
      return new LivroVolumeInfo(item)
    })
  }
}



