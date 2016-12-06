import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AuthData } from '../providers/auth-data';
//import { AngularFireModule,  AuthProviders, AuthMethods } from 'angularfire2';
import firebase from "firebase"
import { Storage } from '@ionic/storage';
//import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StartupDetailsPage } from '../pages/investors/startup-details/startup-details';
import { startupsPage } from '../pages/investors/startups/startups';
import { InvestorsDetailsPage } from '../pages/entrepreneur/investors-details/investors-details';
import { InvestorsPage } from '../pages/entrepreneur/investors/investors';
import { NewsPage } from '../pages/investors/news/news';
import { DetailedNewsPage } from '../pages/investors/detailed-news/detailed-news';
import { InvestorsFormPage } from '../pages/navtoinvestorsform/navtoinvestorsform';
import { StartupsFormPage } from '../pages/navtostartupsform/navtostartupsform';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartupDetailsPage,
    startupsPage,
    NewsPage,
    DetailedNewsPage,
    InvestorsFormPage,
    StartupsFormPage,
    InvestorsDetailsPage,
    InvestorsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StartupDetailsPage,
    startupsPage,
    NewsPage,
    DetailedNewsPage,
    InvestorsFormPage,
    StartupsFormPage,
    InvestorsDetailsPage,
    InvestorsPage,
    LoginPage
  ],
  providers: [Storage,
              AuthData]
})
export class AppModule {}
