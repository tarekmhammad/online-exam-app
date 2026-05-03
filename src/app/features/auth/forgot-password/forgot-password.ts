import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, MoveRight } from 'lucide-angular';

@Component({
  selector: 'app-forgot-password',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  readonly moveRight = MoveRight;
}
