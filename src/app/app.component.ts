import { HomePage } from './../pages/home/home';
import { RegisterPage } from './../pages/register/register';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from './environment';

import { LandingPage } from '../pages/landing/landing';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.catchSignedInUsers();
    });
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  catchSignedInUsers() {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(!user)
      {
      this.rootPage = LandingPage;
      unsubscribe();
    }else {
      this.rootPage = HomePage;
      unsubscribe();

    }

   })
  }
}

