import { Injectable } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import firebase from 'firebase';

@Injectable()
export class AuthData {
  public fireAuth:any;
  public user :any;

  constructor() {
    this.fireAuth = firebase.auth();

  }

  adding(ahmed){
    firebase.database().ref('investor').once('value').then(function(dataSnapshot) {ahmed.push(dataSnapshot.val());
    });
  }


  writeInvestorData(user, name, email, phone, budget) {
    firebase.database().ref('Investors/'+this.user).set({
      username: user,
      company_name : name,
      email: email,
      Phone_number : phone,
      budget: budget,
      interest: "interest"
    });
  }
  writeStartupData(user, name, email, phone, info){
    firebase.database().ref('Startups/'+this.user).set({
      username: user,
      company_name : name,
      email: email,
      Phone_number : phone,
      interest: "interest",
      information: info
    });
  }

  loginUser(newEmail: string, newPassword: string): any {
    return this.fireAuth.signInWithEmailAndPassword(newEmail, newPassword);
  }
//  resetPassword(email: string): any {
//    return firebase.auth().sendPasswordResetEmail(email);
//  }

  logoutUser(): any {
    return this.fireAuth.signOut();
  }

  signupUser(newEmail: string, newPassword: string): any {
    return this.fireAuth.createUserWithEmailAndPassword(newEmail, newPassword);
  }

}
