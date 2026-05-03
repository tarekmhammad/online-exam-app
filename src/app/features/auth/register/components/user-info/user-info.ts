import { Component, inject, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InputPhone } from '../../../../../shared/components/input-phone/input-phone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  imports: [InputPhone, FormsModule],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {
  firstName: string = '';
  lastName: string = '';
  userName: string = '';
  private _router = inject(Router);

  userInfoHandler() {
    if (this.firstName || this.lastName || this.userName !== '') {
      sessionStorage.setItem('firstName', this.firstName);
      sessionStorage.setItem('lastName', this.lastName);
      sessionStorage.setItem('userName', this.userName);
      this._router.navigate(['/register/userPassword']);
    }
  }
}
