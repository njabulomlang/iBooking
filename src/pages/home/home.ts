import { ProfilePage } from './../profile/profile';
import { HistoryPage } from './../history/history';
import { LoginPage } from './../login/login';
import { List } from './../book/list';
import { BookPage } from './../book/book';
import { AddPage } from './../add/add';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../app/environment';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rooms : any;
  ref = firebase.database().ref('rooms/');
  welcom = firebase.auth().currentUser.email;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public loadingCtrl: LoadingController) {
    this.ref.on('value', resp => {
      this.rooms = snapshotToArray(resp);

      })


  }

  ionViewDidLoad() {
   //console.log(firebase.auth().currentUser);


  }


  goAdd(){
    this.navCtrl.push(AddPage);
  }

book(event, id){
  this.navCtrl.push(BookPage, id);


}

goView(){
  this.navCtrl.push(HistoryPage);
}

logout(){
  firebase.auth().signOut().then(() => {
    console.log('logged Out');
     this.navCtrl.setRoot(LoginPage);
  }).catch(function(error) {
    // An error happened.
  });

}
goProfile(){
  this.navCtrl.push(ProfilePage);
}
 /* async uploadImage(){
      try{
        const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE
    }

     const result = await this.camera.getPicture(options);
     const image = `data:image/jpeg;base64,${result}`;


    this.storageRef.putString(image, 'data_url').then(function(snapshot) {
    console.log('Uploaded a data_url string!');
});
  }
     catch(e){
    console.error(e)
    }
  }*/
}
