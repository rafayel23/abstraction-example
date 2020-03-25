import { Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { ListItem } from '../list-item';
import { ListHandler } from '../list-handler';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})

export class SimpleListComponent {

  globalHandlerBypassed = false;

  @Input() items: ListItem[];
  @Output() itemActivated = new EventEmitter<ListItem>();

  constructor(@Optional() private listHandler: ListHandler) {
    if (this.listHandler === null) {
      console.warn('No provider was found for global list handler!');
    }
  }

  activate(item: ListItem): void {
    this.itemActivated.emit(item);

    if (this.listHandler && this.globalHandlerBypassed === false) {
      this.listHandler.handleItemActivated(item);
    }
  }

}
