import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Listmaker } from './listmaker/listmaker';

@Component({
  selector: 'app-root',
  imports: [Listmaker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'listmaker';
}
