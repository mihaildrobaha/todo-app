import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ActiveTodosComponent } from './active-todos/active-todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { DeletedTodosComponent } from './deleted-todos/deleted-todos.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AppService } from './services/app.service';
import { InputComponent } from './input/input.component';
import { VoidTodoCardComponent } from './void-todo-card/void-todo-card.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveTodosComponent,
    CompletedTodosComponent,
    DeletedTodosComponent,
    TodoCardComponent,
    InputComponent,
    VoidTodoCardComponent,
    PopupWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
