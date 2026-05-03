import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../../../../dist/authlib';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterData } from '../../services/registerData.service';

@Component({
  selector: 'app-verify-email',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.css',
})
export class VerifyEmail {
  /*

  focusNextInput(el: any, prevId: any, nextId: any) {
    if (el.value.length === 0) {
      if (prevId) {
        document.getElementById(prevId)?.focus();
      }
    } else {
      if (nextId) {
        document.getElementById(nextId)?.focus();
      }
    }
  }
  document.querySelectorAll('[data-focus-input-init]').forEach(function(element) {
    element.addEventListener('keyup', function() {
        const prevId = this.getAttribute('data-focus-input-prev');
        const nextId = this.getAttribute('data-focus-input-next');
        focusNextInput(this, prevId, nextId);
    });

// Handle paste event to split the pasted code into each input
    element.addEventListener('paste', function(event) {
        event.preventDefault();
        const pasteData = (event.clipboardData || window.clipboardData).getData('text');
        const digits = pasteData.replace(/\D/g, ''); // Only take numbers from the pasted data

        // Get all input fields
        const inputs = document.querySelectorAll('[data-focus-input-init]');

        // Iterate over the inputs and assign values from the pasted string
        inputs.forEach((input, index) => {
            if (digits[index]) {
                input.value = digits[index];
                // Focus the next input after filling the current one
                const nextId = input.getAttribute('data-focus-input-next');
                if (nextId) {
                    document.getElementById(nextId).focus();
                }
            }
        });
    });
});

*/

  num1: string = '';
  num2: string = '';
  num3: string = '';
  num4: string = '';
  num5: string = '';
  num6: string = '';
  email: string | null = sessionStorage.getItem('userEmail');
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _registerData = inject(RegisterData);

  getUserCode(...nums: string[]) {
    return nums.reduce((cur, net) => `${cur}${net}`);
  }

  confirmEmailHandler() {
    // let userCode1: string = `${this.num1}${this.num2}${this.num3}${this.num4}${this.num5}${this.num6}`;
    let userCode2 = this.getUserCode(
      this.num1,
      this.num2,
      this.num3,
      this.num4,
      this.num5,
      this.num6,
    );
    this._authService.confirmEmail({ email: this.email, code: userCode2 }).subscribe({
      next: (res) => {
        console.log(res);
        console.log(this._registerData.email);
        console.log({ email: this.email, code: userCode2 });
        // sessionStorage.setItem('userCode', userCode2);
        // this._router.navigate(['/register/userInfo']);
      },
      error: (err) => {
        console.log(err);
      },
    });
    // console.log(this.num1, this.num2);
    // console.log(this.email);
    // console.log(userCode1);
    console.log(userCode2);
    // console.log(this.confirmEmail.value);
    // console.log(this.getUserCode(this.num1, this.num2, this.num3, this.num4, this.num5, this.num6));
  }
}
