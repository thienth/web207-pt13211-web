import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroComponent} from './components/hero/hero.component';
import {DetailHeroComponent} from './components/detail-hero/detail-hero.component';
import { from } from 'rxjs';
const routes: Routes = [
  { path: 'heroes', component: HeroComponent },
  { path: 'detail-hero/:id', component: DetailHeroComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
