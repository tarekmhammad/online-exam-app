import { AuthService } from '../../../../../dist/authlib';
import { Component, inject } from '@angular/core';
import { Eye, EyeOff, LucideAngularModule } from 'lucide-angular';
import { FlowbiteService } from '../../../../flowbite.service';
import { initFlowbite } from 'flowbite';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  readonly eye = Eye;
  readonly eyeOff = EyeOff;
  flag: boolean = false;
  flag1: boolean = true;
  errorMsg: boolean = false;
  inputType: string = 'password';
  private _authService = inject(AuthService);
  private _router = inject(Router);

  // UI password
  showPassword() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
      this.flag = true;
    } else {
      this.inputType = 'password';
      this.flag = false;
    }
  }
  private _flowbiteService = inject(FlowbiteService);
  ngOnInit(): void {
    this._flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  // login
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginHandeler() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          if (res.token != undefined) {
            console.log(res);
            sessionStorage.setItem('userToken', res.token);
            this._router.navigate(['/diplomes']);
          }
        },
        error: (err: any) => {
          this.errorMsg = true;
          console.log(err);
          console.log(this.errorMsg);
        },
      });
    }
  }
}
