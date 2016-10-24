import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'user-login.html'
})
export class UserLogin {
  username: string;
  password: string;
  constructor(public navCtrl: NavController) {

  }
  login() {
        //  this.authenticationApi.login(this.userName, this.password).subscribe(
        //       data => {
        //         //Navigate to home page
        //          this.nav.setRoot(HomePage);
        //       }
        //    )
        }
}
