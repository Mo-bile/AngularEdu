import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { About2Component } from './about2/about2.component';
import { HighlightDirective } from './highlight.directive';
import { TodosModule } from './todos/todos.module';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    About2Component,
    HighlightDirective,
    HelloComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
