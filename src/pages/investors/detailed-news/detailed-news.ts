import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'detailed-news.html'
})
export class DetailedNewsPage {
  selectednew:any;
  number : any =0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectednew = navParams.get('one');
  }
  share(event){
    this.number += 100;
  }
}
