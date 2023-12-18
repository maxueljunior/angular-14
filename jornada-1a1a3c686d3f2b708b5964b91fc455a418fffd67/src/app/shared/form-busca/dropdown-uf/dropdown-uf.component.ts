import { Observable, map, startWith } from 'rxjs';
import { Estado } from './../../../core/types/type';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EstadoService } from 'src/app/core/services/estado.service';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit{

  @Input()
  label!: string;

  @Input()
  matPrefix!: string;

  unidadeFederativas: Estado[] = [];

  filteredOptions!: Observable<Estado[]>;

  @Input()
  controller!: FormControl;

  constructor(private estadoService: EstadoService){}

  ngOnInit(): void {
    this.estadoService.listar().subscribe((dados) => {
      this.unidadeFederativas = dados;
    });
    this.filteredOptions = this.controller.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    )
  }

  private _filter(value: string): Estado[] {
    const filterValue = value.toLowerCase();

    return this.unidadeFederativas.filter(option => option.nome.toLowerCase().includes(filterValue));
  }
}
