import { Component, OnInit } from '@angular/core';
import { ITodo } from '../app.component';
import { AppService } from '../services/app.service';


@Component({
  selector: 'app-active-todos',
  templateUrl: './active-todos.component.html',
  styleUrls: ['./active-todos.component.scss']
})
export class ActiveTodosComponent implements OnInit {

  activeTodos: ITodo[] = [];

  constructor(private appService: AppService) {
    this.activeTodos = this.appService.activeTodos
  }

  ngOnInit(): void {
  }

}
