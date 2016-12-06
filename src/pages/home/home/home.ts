import { Component } from '@angular/core';
import { InvestorsFormPage } from '../navtoinvestorsform/navtoinvestorsform';
import { StartupsFormPage } from '../navtostartupsform/navtostartupsform';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  navtoinvestorsform(){
    this.navCtrl.push(InvestorsFormPage)
  }
  navtostartupsform(){
    this.navCtrl.push(StartupsFormPage)
  }
}
