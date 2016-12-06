import { Component } from '@angular/core';
import { LoginPage } from '../login/login'
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';

@Component({
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public authData: AuthData, public navCtrl: NavController) {

  }
  logout(){
    this.authData.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

}
