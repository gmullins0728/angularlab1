import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'TODO List';
  pTag = 'A place to store your todos';

  todos: Todo[] = [
    { task: 'do laundry', completed: false },
    { task: 'take out trash', completed: false },
    { task: 'groom dogs', completed: true },
    { task: 'try to pet cat', completed: false },
    { task: 'feed fish', completed: true },
    { task: 'play video games', completed: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

  