import { room } from './../home/model/room';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  userID = firebase.auth().currentUser.uid;
  //ref = firebase.database().ref('rooms/' + this.userID );
  inputText: string ='';
  inputText1: string ='';
  inputText2: string ='';
  pic;


   storageRef = firebase.storage().ref();
   addRooms =  firebase.database().ref('rooms/'  + this.userID);
   myphoto;
   room = {} as room;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private camera: Camera, public loading: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  createRooms(room: room) {


    this.upload()
    let alert = this.alertCtrl.create({
      title: 'Adding room...',
      subTitle: 'completed',
      buttons: ['Ok']
    })
   if(this.myphoto != '') {
     let newRooms = this.addRooms.push();
   newRooms.set({
     RoomType: room.roomtype,
     Price: room.price,
     Description: room.description,
     image: this.myphoto
   });
    this.room.price = null;
    this.room.roomtype = '';
    this.room.description = '';
   alert.present();
   this.navCtrl.setRoot(HomePage);
   }else {
    let alert = this.alertCtrl.create({
      title: 'Warning!',
      subTitle: 'You must upload image first',
      buttons: ['Ok']
    })
    alert.present();
    this.navCtrl.setRoot(HomePage);
   }
  }

takePhoto(sourcetype: number) {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: sourcetype,
    correctOrientation: true
  }
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   let base64Image = 'data:image/jpeg;base64,' + imageData;
   this.myphoto = base64Image;
  }, (err) => {
   // Handle error
  });
}
upload() {
  let loaders = this.loading.create({
    content: 'Uploading...',
    duration: 3000
  })

  loaders.present();
 // let storageRef = firebase.storage().ref();
  const filename = Math.floor(Date.now() / 1000);
  const imageRef = this.storageRef.child(`my-rooms/${filename}.jpg`);

  imageRef.putString(this.myphoto, firebase.storage.StringFormat.DATA_URL)
  .then((snapshot) => {
    console.log('image uploaded');
    this.myphoto = snapshot.downloadURL

   // loaders.present();
  })
}

}
