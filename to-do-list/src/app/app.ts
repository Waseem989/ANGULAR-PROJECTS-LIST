import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './to-do/to-do';


@Component({
  selector: 'app-root',
  imports: [ToDo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
