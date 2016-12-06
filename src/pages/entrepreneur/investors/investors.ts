import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {AuthData} from '../../../providers/auth-data';
import { InvestorsDetailsPage } from '../investors-details/investors-details';


@Component({
  templateUrl: 'investors.html'
})
export class InvestorsPage {
  selectedinvestor: any;
  data:any;
  investors: Array<{name: string, img: string, details: string, note: string, content: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public authData:AuthData) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedinvestor = navParams.get('investor');

    this.investors=[
      { name: "Marketbook" ,
        img: "assets/img/card-amsterdam.png",
        details: "digital marketing ",
        note: " a rising group for social media marketing and online retails",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      { name: "Realtors" ,
        img:"assets/img/card-amsterdam.png" ,
        details: " contractors",
        note: "eliminating the middle man in real estate sales",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      { name: " emgezny" ,
        img: "assets/img/card-amsterdam.png",
        details: " online transportation advice",
        note: " Finds the best way to get home in the crowded Cairo with the estimated cost",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      { name: " 3arboon",
        img: "assets/img/card-amsterdam.png",
        details: "funding for the most promising projects",
        note: " having a nice project needs to be funded?, looing for a project to fund?",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      { name: " elvs" ,
        img:"assets/img/card-amsterdam.png" ,
        details:" services",
        note: "one stop for all services we make your wishes come true from delivery to fixing your car",
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
    ]
    this.authData.adding(this.investors);
  }



  itemTapped(event, investor) {
    this.navCtrl.push(InvestorsDetailsPage, {
      investor: investor
    });
  }
}
