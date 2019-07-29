import { FIREBASE_CONFIG } from './../../app/environment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { user} from './../home/model/user';
import { snapshotToArray } from '../../app/environment';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  name;
  surname;
  user;
  ref2 = firebase.database().ref('users/');
  input1 = firebase.auth().currentUser.displayName;
  input3 = firebase.auth().currentUser.phoneNumber;
  inputEmail = firebase.auth().currentUser.email;
  prof;
  ref = firebase.database().ref('users/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp => {
    this.user = snapshotToArray(resp);
      
        })
      }

  ionViewDidLoad() {
    /* this.ref2.on('value', resp => {
      this.prof = snapshotToArray(resp);
      for(let i = firebase.auth().currentUser!=null; i<this.prof.length;){
      do{
        console.log(this.prof);
      }
      while({
        i
      })

      }

  })*/

  }


  updateProfile(item){
    if(item!==undefined && item!==null){
      let newItem = this.ref2.push();
      newItem.set(item);
      this.input1 ='';
      this.input3 ='';
      this.inputEmail = '';


  }
}
}
