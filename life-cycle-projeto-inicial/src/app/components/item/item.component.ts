import { Component, Input, OnChanges, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input()
  item!: Item;

  @Input()
  valorChecked!: boolean;

  @Output()
  emitindoItemParaEditar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

  verificaComprado(){
    if(this.item.comprado){
      return 'line-through';
    }
    return '';
  }

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }
}
