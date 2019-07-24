import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  bookings = [];
   
  ref = firebase.database().ref('book/');
  tbl;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

     this.ref.on('value', resp => {
    //  if(firebase.auth().currentUser.email  ){
        this.bookings = snapshotToArray(resp);
       // this.tbl = resp.val().key.booker;
        console.log(resp.val());

    //  }


      })


  }

  ionViewDidLoad() {
  //  console.log();
  }

}
