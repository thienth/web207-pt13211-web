import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DetailHeroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyAC482wwvh-1A0Yw-vlwdChLxW1Jr04zxo",
        authDomain: "pt13353-mob.firebaseapp.com",
        databaseURL: "https://pt13353-mob.firebaseio.com",
        projectId: "pt13353-mob",
        storageBucket: "pt13353-mob.appspot.com",
        messagingSenderId: "93740380746"
    }, 'pt13353-mob'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent] // sửa thành component muốn hiển thị đầu tiên
})
export class AppModule { }
