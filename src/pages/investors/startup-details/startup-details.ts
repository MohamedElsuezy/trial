import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'startup-details.html'
})
export class StartupDetailsPage {
  selectedstartup: any;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedstartup = navParams.get('startup');
  }
}
