import { Component } from '@angular/core';
import { ListItem } from 'modules/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: ListItem[] = [
    {name: 'item 1', data: {value: 1}},
    {name: 'item 2', data: {value: 2}},
    {name: 'item 3', data: {value: 3}},
  ];

  localHandler(item: ListItem) {
    console.log(item.data, ' <-- local handler triggered');
  }
}
