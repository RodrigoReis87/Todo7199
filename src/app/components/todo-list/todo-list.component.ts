import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: any = null;

  constructor(
    private service: DataService,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

  markAsDone(todo: { id: any; done: boolean; }) {
    this.afAuth.idToken.subscribe(token => {
      const data = { id: todo.id };
      this.service.markAsDone(data, token).subscribe(res => { todo.done = true });
    })
  }

}
