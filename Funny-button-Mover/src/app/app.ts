import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Funnybtn } from './funnybtn/funnybtn';

@Component({
  selector: 'app-root',
  imports: [Funnybtn],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Funny-button-Mover';
}
