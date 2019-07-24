import { List } from './list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';



/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  ref = firebase.database().ref('rooms/');
  ref2 = firebase.database().ref('book/');
  value:any;
  list:List =
  {
    name:'',
    price:'',
    description:''
  };
  input1 = firebase.auth().currentUser.email;
  input2;
  input3;
  input4 ;
  input5 ;
  input6 ;
  input7 ;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {

    this.input4 =  this.navParams.data;


   // console.log( Number(dateout - datein) );
  }


  showAmount() {

      var datein = new Date(this.input2).getDate();
      var dateout = new Date(this.input3).getDate();
      this.input7 = this.input4 * Number(dateout - datein);
    
  }
/*date(){
  var datein = new Date(this.input2).getDate();
  var dateout = new Date(this.input3).getDate();
  if(dateout<datein){
    console.log('Wrong input');

  } else
  this.input4 = Number(dateout - datein) * this.input4;
  console.log( );
}*/
  bookRoom(item)
  {

    if(item!==undefined && item!==null){
      let newItem = this.ref2.push();
      newItem.set(item);
      this.input1 ='';
      this.input2 ='';
      this.input3= '';
      this.input4 ='';
      this.input5 ='';
      this.input6= '';
      this.input7= '';

    }
  }
}


