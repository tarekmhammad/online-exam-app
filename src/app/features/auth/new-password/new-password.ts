import { Component } from '@angular/core';
import { Eye, EyeOff, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-new-password',
  imports: [LucideAngularModule],
  templateUrl: './new-password.html',
  styleUrl: './new-password.css',
})
export class NewPassword {
  readonly eye = Eye;
  readonly eyeOff = EyeOff;
  flag1: boolean = false;
  flag2: boolean = false;
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
}
