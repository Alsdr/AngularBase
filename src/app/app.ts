import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './components/todo/todo.html',
  styleUrl: './components/todo/todo.css'
})
export class App {
  protected title = 'AngularProjeto';
}
