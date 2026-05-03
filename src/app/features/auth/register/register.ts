import { Component, inject } from '@angular/core';
import { Eye, EyeOff, LucideAngularModule } from 'lucide-angular';
import { FlowbiteService } from '../../../../flowbite.service';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [LucideAngularModule, RouterOutlet],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  /*
  private _flowbiteService = inject(FlowbiteService);
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
    */

  ngOnInit(): void {
    // this._flowbiteService.loadFlowbite((flowbite) => {
    //   initFlowbite();
    // });
    // const email = localStorage.getItem('userEmail');
    // console.log(email);
  }
}
