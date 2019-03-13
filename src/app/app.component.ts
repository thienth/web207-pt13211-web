import { Component } from '@angular/core';

@Component({
  selector: 'app-web207',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Thienth";
  gender = 2;
  classes = [
    {
      id: 1,
      name: 'pt13211-web',
      subj: "frontend framework",
    },
    {
      id: 2,
      name: 'pt13353-mob',
      subj: "server cho android",
    },
    {
      id: 3,
      name: 'pt13354-mob',
      subj: "server cho android",
    }
  ];
}
