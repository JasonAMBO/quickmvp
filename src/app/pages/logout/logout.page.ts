import { Component, OnInit } from '@angular/core';
import { UserLoginServiceService } from 'src/app/services/user-login-service.service';
import { userLogin } from 'src/app/models/userLogin';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  user: userLogin;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: UserLoginServiceService,
    private alertService: AlertServiceService
  ) { }


  ngOnInit() {
    debugger;
    this.api.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    localStorage.removeItem('currentUser');
    this.router.navigate([this.returnUrl]);
  }

}
