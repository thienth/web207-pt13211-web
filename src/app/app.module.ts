import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DetailHeroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // sửa thành component muốn hiển thị đầu tiên
})
export class AppModule { }
