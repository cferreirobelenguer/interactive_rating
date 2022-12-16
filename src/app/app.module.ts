import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InitialModule } from './initial-view/initial-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InitialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
