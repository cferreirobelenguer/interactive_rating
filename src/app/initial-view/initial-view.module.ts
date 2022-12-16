import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InitialViewComponent } from './initial-view.component';
import { FinalViewComponent } from '../final-view/final-view.component';


@NgModule({
  declarations: [
    InitialViewComponent,
    FinalViewComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    InitialViewComponent,
    FinalViewComponent
  ],
  providers: [],
  
})
export class InitialModule { }
