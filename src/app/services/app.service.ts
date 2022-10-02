import { Injectable } from '@angular/core';
import { ITodo } from '../app.component';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  activeTodos: ITodo[] = [];
  completedTodos: ITodo[] = [];
  deletedTodos: ITodo[] = [];


  constructor() {}

  addTodo(textInput: string): void {
   if (textInput.trim()) {
      this.activeTodos.push({textContent: textInput, isCompleted: false, isDeleted: false, isEdit: false});
   }
  }

  completeTodo(i: number, todo: ITodo): void {
    this.completedTodos.push(this.activeTodos[i])
    this.activeTodos.splice(i, 1)
  }

  recoverTodo(i: number, todo: ITodo): void {
    if (todo.isCompleted) {
      this.activeTodos.push(this.completedTodos[i])
      this.completedTodos.splice(i, 1)
      todo.isCompleted = !todo.isCompleted
    }
  }

  deleteTodo(i: number, todo: ITodo): void {
    if (todo.isCompleted === false) {
      this.deletedTodos.push(this.activeTodos[i])
      this.activeTodos.splice(i, 1)
      }
      else {
        this.deletedTodos.push(this.completedTodos[i])
        this.completedTodos.splice(i, 1)
    }
  }

  deleteTodoPermanently(i: number, todo: ITodo): void {
    this.deletedTodos.splice(i, 1)
  }

  recoverDeletedTodo(i: number, todo: ITodo): void {
    if (todo.isCompleted === false) {
      this.activeTodos.push(this.deletedTodos[i])
      this.deletedTodos.splice(i, 1)
      todo.isDeleted = !todo.isDeleted
    }
    if (todo.isCompleted === true) {
      this.completedTodos.push(this.deletedTodos[i])
      this.deletedTodos.splice(i, 1)
      todo.isDeleted = !todo.isDeleted
    }
  }

}