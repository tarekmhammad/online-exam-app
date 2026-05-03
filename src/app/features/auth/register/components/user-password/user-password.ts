import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Eye, EyeOff, LucideAngularModule } from 'lucide-angular';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FlowbiteService } from '../../../../../../flowbite.service';
import { UserEmail } from '../user-email/user-email';
import { last } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-password',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './user-password.html',
  styleUrl: './user-password.css',
})
export class UserPassword implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.userName = sessionStorage.getItem('userName');
      this.email = sessionStorage.getItem('userEmail');
      this.firstName = sessionStorage.getItem('firstName');
      this.lastName = sessionStorage.getItem('lastName');
      this.phone = sessionStorage.getItem('userPhone');

      console.log(this.userName, this.email, this.phone, this.firstName, this.lastName);
    }
  }
  private _flowbiteService = inject(FlowbiteService);
  readonly eye = Eye;
  readonly eyeOff = EyeOff;
  flag1: boolean = false;
  flag2: boolean = false;
  userName: string | null = 'h';
  email: string | null = '';
  firstName: string | null = '';
  lastName: string | null = '';
  phone: string | null = '';
  inputTypeOfPassword: string = 'password';
  inputTypeOfConfirmPassword: string = 'password';

  showPassword() {
    if (this.inputTypeOfPassword === 'password') {
      this.inputTypeOfPassword = 'text';
      this.flag1 = true;
    } else {
      this.inputTypeOfPassword = 'password';

      this.flag1 = false;
    }
  }
  showConfirmPassword() {
    if (this.inputTypeOfConfirmPassword === 'password') {
      this.inputTypeOfConfirmPassword = 'text';
      this.flag2 = true;
    } else {
      this.inputTypeOfConfirmPassword = 'password';
      this.flag2 = false;
    }
  }

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
    //   this.userName = sessionStorage.getItem('userName');
    //   this.email = sessionStorage.getItem('userEmail');
    //   this.firstName = sessionStorage.getItem('firstName');
    //   this.lastName = sessionStorage.getItem('lastName');
    //   this.phone = sessionStorage.getItem('userPhone');

    //   console.log(this.userName, this.email, this.phone, this.firstName, this.lastName);
  }

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(this.userName),
    email: new FormControl(this.email),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    firstName: new FormControl(this.firstName),
    lastName: new FormControl(this.lastName),
    phone: new FormControl(this.phone),
  });

  registerFormHandler() {
    console.log(this.userName, this.email, this.phone, this.firstName, this.lastName);

    console.log(this.registerForm.value);
  }
}
