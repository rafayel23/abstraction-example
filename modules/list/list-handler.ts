import { ListItem } from './list-item';

export abstract class ListHandler {

  abstract handleItemActivated(item: ListItem): void;

}
