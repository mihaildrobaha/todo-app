import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  textInput: string = '';

  constructor(private appService: AppService) {}

  addTodo(): void {
    this.appService.addTodo(this.textInput);
    localStorage.setItem('todo', this.textInput);
    console.log(localStorage.getItem('todo'))
    this.textInput = '';
  }

  ngOnInit(): void {
  }

}
