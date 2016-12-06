import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { DetailedNewsPage } from '../detailed-news/detailed-news';

@Component({
  templateUrl: 'news.html'
})
export class NewsPage {
      selectednew:any;
      news:any;

      constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.selectednew = navParams.get('one');
      this.news=[
        { img:"assets/img/card-saopaolo.png",
          headline:"Top 10 marketing startups in 2016",
          intro:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        { img:"assets/img/card-amsterdam.png",
          headline:"New regulations for startups in egypt",
          intro:"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
          content:" quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"},
        { img:"assets/img/card-sf.png",
          headline:"Mali is listed" ,
          intro:"dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ",
          content:"dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        { img:"assets/img/card-madison.png",
          headline:"Elves starts its revenue",
          intro:"dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
          content:"dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      ];
      }
      openCard(event, one) {
        this.navCtrl.push(DetailedNewsPage, {
        one: one
        });
      }
}
