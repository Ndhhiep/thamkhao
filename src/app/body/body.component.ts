import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ServiceService } from '../header/service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  constructor() {}

  @Input('itemList')
  itemList!: Item[];

  @Output() newItemEvent = new EventEmitter<number>();
  delete(value: number) {
    this.newItemEvent.emit(value);
  }

}
