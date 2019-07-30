import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import * as firebase from 'firebase';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(firebase.auth().currentUser.uid);
  }

  ionViewWillLoad() {

  }

  gotoRegister(){
    this.navCtrl.push(RegisterPage);
  }
  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }

}
