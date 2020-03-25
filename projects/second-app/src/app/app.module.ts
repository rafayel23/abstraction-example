import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListHandler, ListModule } from 'modules/list';
import { SecondAppListHandler } from './second-app-list-handler';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    ListModule,
  ],

  providers: [{
    provide: ListHandler,
    useClass: SecondAppListHandler,
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
