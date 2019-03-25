import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HEROES} from '../../models/hero-data';
import {Hero} from '../../models/Hero';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css']
})
export class DetailHeroComponent implements OnInit {
  heroId: any = null;
  hero: Hero;

  constructor(private route: ActivatedRoute) {
    // lay so id tu url xuong
    this.heroId = this.route.snapshot.paramMap.get("id");

    // dua vao id lay dc tim ra hero dua vao id
    for(let i = 0; i < HEROES.length; i++){
      if(HEROES[i].id == this.heroId){
        this.hero = HEROES[i];
        break;
      }
    }
  }

  ngOnInit() {
    
  }

}
