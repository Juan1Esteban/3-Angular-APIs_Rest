import { Component } from '@angular/core';

import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersService.create({
      name: "Pepito",
      email: "pepito@mail.com",
      password: "2121"
    })
    .subscribe(rta => {
      console.log(rta);
    });
  }

  login() {
    this.authService.login( "pepito@mail.com", "2121" )
    .subscribe(rta => {
      console.log(rta.access_token);
    });
  }
}
