import { ListHandler, ListItem } from 'modules/list';

export class FirstAppListHandler implements ListHandler {

  handleItemActivated(item: ListItem): void {
    console.log(item.data, ' <-- handled globally by first app');
  }

  constructor() {}
}
