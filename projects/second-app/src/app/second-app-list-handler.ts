import { ListHandler, ListItem } from 'modules/list';

export class SecondAppListHandler implements ListHandler {

  handleItemActivated(item: ListItem): void {
    console.log(item.data, ' <-- handled globally by second app');
  }

  constructor() {}
}
