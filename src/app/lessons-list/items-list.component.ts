import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from './models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  @Input()
  items: Item[];
  @Output()
  onItemClicked = new EventEmitter<Item>();

  onItemClick(item: Item): void {
    this.onItemClicked.emit(item);
  }
}
