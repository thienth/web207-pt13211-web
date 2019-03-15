import { Component } from '@angular/core';
import {Hero} from './models/Hero';
@Component({
  selector: 'app-web207',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hero: Hero[] = [
    {
      id: 1,
      name: 'Gao đỏ',
      image: [
        'assets/anh-1.jpeg'
      ]
    },
    {
      id: 2,
      name: 'Gao xanh',
      image: [
        'assets/anh-2.jpeg'
      ]
    }
  ]
}
