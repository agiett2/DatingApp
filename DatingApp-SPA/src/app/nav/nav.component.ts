import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private auth: AuthService) {}

  ngOnInit() {}
  login() {
    this.auth
      .login(this.model)
      .subscribe(
        next => console.log('Logged in successfully'),
        error => console.log(error)
      );
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');

    // if something is in token, it will return true. If token is empty, it will return
    // shorthand for if-statement

    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged Out');
  }
}
