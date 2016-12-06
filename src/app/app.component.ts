import { Component, ViewChild } from '@angular/core';
import firebase from 'firebase'
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar} from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { startupsPage } from '../pages/investors/startups/startups';
import { NewsPage  } from '../pages/investors/news/news';
import { InvestorsPage } from '../pages/entrepreneur/investors/investors';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  rootPage:any;
  constructor(
    public platform: Platform,
    public menu: MenuController,
  ) {
    firebase.initializeApp({
      apiKey: "AIzaSyAzlNVSe6yS6ZoE5OyT7xzMImLYs-poOmU",
      authDomain: "investors-87c86.firebaseapp.com",
      databaseURL: "https://investors-87c86.firebaseio.com",
      storageBucket: "investors-87c86.appspot.com",
      messagingSenderId: "410389071824"
     });

     firebase.auth().onAuthStateChanged( (user) => {
       if (user) {
         this.rootPage = HomePage;
       } else {
         this.rootPage = LoginPage;
       }
     });
       platform.ready().then(() => {
         StatusBar.styleDefault();
       });
      this.pages = [
          { title: 'Businet', component: HomePage },
          { title: 'Startups List', component: startupsPage },
          { title: 'Newsfeed', component: NewsPage  },
          { title: 'Investors List', component: InvestorsPage }
      ];
  }




  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
