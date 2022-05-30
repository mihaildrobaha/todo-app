import { Component, OnInit } from '@angular/core';
import { ITodo } from '../app.component';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-deleted-todos',
  templateUrl: './deleted-todos.component.html',
  styleUrls: ['./deleted-todos.component.scss']
})
export class DeletedTodosComponent implements OnInit {

  deletedTodos: ITodo[] = [];

  constructor(private appService: AppService) {
    this.deletedTodos = this.appService.deletedTodos
  }

  ngOnInit(): void {
  }

}
