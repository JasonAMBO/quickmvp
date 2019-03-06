import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  isLogin: boolean = false;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Customer',
      url: '/customer',
      icon: 'list'
    },
    {
      title: 'login',
      url: './login',
      icon: 'lock'
    },
    {
      title: 'logout',
      url: './logout',
      icon: 'lock'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (localStorage.getItem('currentUser')) {
        this.isLogin = true;
      }


    });
  }

  logout() {
    this.isLogin = false;
  }
}
