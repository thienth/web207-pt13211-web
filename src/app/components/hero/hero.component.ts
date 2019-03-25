import { Component, OnInit } from '@angular/core';

import {HEROES} from '../../models/hero-data';
import {Hero} from '../../models/Hero';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Hero[] = HEROES;
  cates: Category[];

  constructor(private cateService: CategoryService){

  }
  ngOnInit(){
    var cates = this.cateService.getCategories();
    console.log(cates);
  }
  


}
