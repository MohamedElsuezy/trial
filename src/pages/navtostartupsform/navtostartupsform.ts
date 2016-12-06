import { Component, ViewChild } from '@angular/core';
//import {Storage} from '@ionic/storage';
import { NavController, LoadingController, AlertController  } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { EmailValidator } from '../../validators/email';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'navtostartupsform.html'
})

export class StartupsFormPage {
  //public type:any;
  //startupDetails:any;
  public signupForm: any;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  public loading: any;
  conpass: boolean = true;
  @ViewChild('password') password;
  @ViewChild('conpassword') conpassword;

  constructor( public nav: NavController, public authData: AuthData,
    public formBuilder: FormBuilder, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],

    });
  }

  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  registerUser (event, valueA:string ,valueB:string, user, name, email, phone, info){
    this.submitAttempt = true;
    if (valueA!=valueB){

      this.password.value="";
      this.conpassword.value="";
      this.conpass=false;
    }
    else {
      this.conpass=true;
      this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(() => {
        this.nav.setRoot(HomePage);
        this.authData.writeStartupData(user, name, email, phone, info);
      }, (error) => {
        this.loading.dismiss();
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

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }

  }
}
