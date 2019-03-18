import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroUnitComponent } from './components/hero-unit/hero-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroUnitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HeroComponent] // sửa thành component muốn hiển thị đầu tiên
})
export class AppModule { }
