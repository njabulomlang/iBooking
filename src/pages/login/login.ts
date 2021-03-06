import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email;
  password;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  sign()
  {
    let loaders = this.loading.create({
      content: 'Please wait..',
      duration: 3000});
      loaders.present();
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then( res =>{

      this.navCtrl.push(HomePage);






    })

    .catch(function(error) {

      const alert = this.alertCtrl.create({
        title: error.code,
        subTitle: error.message,
        buttons: ['OK']
      });
      alert.present();
      // Handle Errors here.
     // var errorCode = error.code;
    //  var errorMessage = error.message;
//console.log(errorCode + errorMessage);


    });


  }
}
