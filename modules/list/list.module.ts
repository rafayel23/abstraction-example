import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { BypassGlobalHandlerDirective } from './bypass-global-handler.directive';

@NgModule({
  declarations: [SimpleListComponent, BypassGlobalHandlerDirective],
  imports: [CommonModule],
  exports: [SimpleListComponent, BypassGlobalHandlerDirective],
})

export class ListModule { }
