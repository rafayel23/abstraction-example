import { Directive, Host } from '@angular/core';
import { SimpleListComponent } from './simple-list/simple-list.component';

@Directive({
  selector: '[bypassGlobalHandler]'
})

export class BypassGlobalHandlerDirective {

  constructor(@Host() parentList: SimpleListComponent) {
    parentList.globalHandlerBypassed = true;
  }

}
