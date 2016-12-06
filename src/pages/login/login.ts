import { Component } from '@angular/core';
import { Facebook } from 'ionic-native';
//import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import firebase from 'firebase';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { HomePage } from '../home/home';
import { EmailValidator } from '../../validators/email';
import { InvestorsFormPage } from '../navtoinvestorsform/navtoinvestorsform';
import { StartupsFormPage } from '../navtostartupsform/navtostartupsform';
import { NavController, LoadingController, AlertController  } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  public loginForm: any;
  public userProfile: any;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  public loading: any;

  constructor(public nav: NavController, public authData: AuthData,
    public formBuilder: FormBuilder, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
          this.loginForm = formBuilder.group({
          email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
          password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
        });
        this.authData.loginUser("mohamedibnahmed@gmail.com", "24547467").then( authData => {
          alert("yes");
      },error=>{ alert("no");});
      }


facebookLogin(){
    Facebook.login(['email']).then( (response) => {
    let facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
          this.nav.setRoot(HomePage);
        })
        .catch((error) => {
          console.log("ana fashel");
          console.log("Firebase failure: " + JSON.stringify(error));
      });

    }).catch((error) => { console.log(error) });
  }

      elementChanged(input){
        let field = input.inputControl.name;
        this[field + "Changed"] = true;
      }
      loginUser(){
        this.submitAttempt = true;

        if (!this.loginForm.valid){
          console.log("leh keda");
          console.log(this.loginForm.value);
        } else {
          this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then( authData => {
            this.nav.setRoot(HomePage);
          }, error => {
            this.loading.dismiss().then( () => {
              let alert = this.alertCtrl.create({
                message: error.message,
                buttons: [
                  {
                    text: "Ok",
                    role: 'cancel'
                  }
                ]
              });
              alert.present();
            });
          });

          this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true,
          });
          this.loading.present();
        }
      }

        navtoinvestorsform(){
          this.nav.push(InvestorsFormPage)
        }
        navtostartupsform(){
          this.nav.push(StartupsFormPage)
        }

}
