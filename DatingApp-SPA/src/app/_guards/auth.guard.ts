import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { AlertifyService } from '../services/alertify/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    }

    this.alertify.error('You shall not pass!!');
    this.router.navigate(['/home']);
    return false;
  }
}
