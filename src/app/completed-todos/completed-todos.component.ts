import { Component, OnInit } from '@angular/core';
import { ITodo } from '../app.component';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent implements OnInit {

  completedTodos: ITodo[] = [];

  constructor(private appService: AppService) {
    this.completedTodos = this.appService.completedTodos
  }

  ngOnInit(): void {
  }

}
