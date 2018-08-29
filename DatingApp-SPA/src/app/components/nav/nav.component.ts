import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AlertifyService } from '../../services/alertify/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public auth: AuthService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}
  login() {
    this.auth.login(this.model).subscribe(
      next => {
        this.alertifyService.success('Logged in successfully');
      },
      error => {
        this.alertifyService.error(error);
      }, () => {
        this.router.navigate(['/members']);
      }
    );
  }

  loggedIn(): Boolean {
    return this.auth.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertifyService.message('Logged Out');
    this.router.navigate(['/home']);
  }
}
