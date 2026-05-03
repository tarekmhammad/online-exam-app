import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../../../../dist/authlib';
import { RegisterData } from '../../services/registerData.service';

@Component({
  selector: 'app-user-email',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './user-email.html',
  styleUrl: './user-email.css',
})
export class UserEmail {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _registerData = inject(RegisterData);
  //
  emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  //
  emailHandler() {
    const userEmail = this.emailForm.value;
    this._authService.sendEmail(userEmail).subscribe({
      next: (res) => {
        console.log(res);
        sessionStorage.setItem('userEmail', userEmail.email);
        this._registerData.email.update(()=> userEmail.email)
        console.log(this._registerData.email);
        this._router.navigate(['/register/verifyEmail']);
      },
      error: (err) => {
        console.log(err);
      },
    });
    // console.log(email.email);
  }
}
