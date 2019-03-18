import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../../models/Hero';
@Component({
  selector: 'app-hero-unit',
  templateUrl: './hero-unit.component.html',
  styleUrls: ['./hero-unit.component.css']
})
export class HeroUnitComponent implements OnInit {
  @Input() herodata: Hero;
  constructor() { }

  ngOnInit() {
    
  }

}
