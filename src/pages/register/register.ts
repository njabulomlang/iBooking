import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { ProfilePage } from '../profile/profile';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email;
  password;

  ref = firebase.database().ref("/users")
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  create(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res=>{
      this.storage.set('userID', 'qwewdd');
    this.navCtrl.push(ProfilePage);
    })
    //this.navCtrl.push(ProfilePage)


    .catch(function(error) {
     return error;
    });

  }
}
