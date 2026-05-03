import { Component } from '@angular/core';
import { LucideAngularModule, MoveLeft } from 'lucide-angular';

@Component({
  selector: 'app-reset-password',
  imports: [LucideAngularModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {
  readonly moveLeft = MoveLeft;
}
