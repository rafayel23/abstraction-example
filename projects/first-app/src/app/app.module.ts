import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListModule, ListHandler } from 'modules/list';
import { FirstAppListHandler } from './first-app-list-handler';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    ListModule
  ],

  providers: [{
    provide: ListHandler,
    useClass: FirstAppListHandler
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
