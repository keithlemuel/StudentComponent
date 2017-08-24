import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
