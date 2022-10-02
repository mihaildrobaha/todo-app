import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ITodo } from '../app.component';
import { AppService } from '../services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupWindowComponent } from '../popup-window/popup-window.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: ITodo | null = null;
  @Input() i: number | null = null;
  @ViewChild('myInputRef') myInputRef: ElementRef<HTMLInputElement> | null = null;

  constructor(private appService: AppService, public dialog: MatDialog) { 

  }

  
  ngOnInit(): void {

  }

  openPopupWindow(): void {
    if (this.todo !== null && this.todo.textContent.length === 0 && this.myInputRef !== null) {
      this.myInputRef.nativeElement.focus()
      this.todo.isEdit = !this.todo.isEdit
      this.dialog.open(PopupWindowComponent)
    }
  }

  editTodo(): void {
    if (this.todo !== null) {
      this.todo.isEdit = !this.todo.isEdit
      setTimeout(() => { 
          if (this.myInputRef !== null && this.myInputRef !== undefined) {
          this.myInputRef.nativeElement.focus();
        }
      }, 200);
    }
  }

  completeTodo(): void {
    if (this.todo !== null && this.todo.isDeleted) {
      return
    }
      if (this.i !== null && this.todo !== null) {
        this.todo.isCompleted = !this.todo.isCompleted;
        this.appService.completeTodo(this.i, this.todo);
      }
  }

  deleteTodo(): void {
    if (this.i !== null && this.todo !== null) {
      this.todo.isDeleted = !this.todo.isDeleted;
      this.appService.deleteTodo(this.i, this.todo)
      }
  }

  deleteTodoPermanently(): void {
    if (this.i !== null && this.todo !== null) {
    this.appService.deleteTodoPermanently(this.i, this.todo)
    }
  }

  recoverTodo(): void {
    if (this.todo !== null && this.todo.isDeleted) {
      return
    }
    if (this.i !== null && this.todo !== null) {
      this.appService.recoverTodo(this.i, this.todo)
    }
  }

  recoverDeletedTodo(): void {
    if (this.i !== null && this.todo !== null) {
      this.appService.recoverDeletedTodo(this.i, this.todo)
    }
  }

}