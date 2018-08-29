import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { AlertifyService } from '../services/alertify/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output()
  cancelRegister: EventEmitter<boolean> = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService, private alertifyService: AlertifyService) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      res => this.alertifyService.success('registration successful'),
      error =>  this.alertifyService.error(error)
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
