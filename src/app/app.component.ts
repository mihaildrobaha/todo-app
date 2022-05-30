import { Component } from '@angular/core';

export interface ITodo {
  textContent: string;
  isCompleted: boolean;
  isDeleted: boolean;
  isEdit: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor () {}

  ngOnInit() {
    window.onunload = () => {
      alert('bye')
    }
  }

}
