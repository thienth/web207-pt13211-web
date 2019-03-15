import { Component } from '@angular/core';
import {HEROES} from './models/hero-data';
import { from } from 'rxjs';
@Component({
  selector: 'app-web207',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = HEROES;
}
