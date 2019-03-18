import { Component, OnInit } from '@angular/core';
import {HEROES} from '../../models/hero-data';
import {Hero} from '../../models/Hero';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

  heroes = HEROES;
}
