import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterData {
  firstName = signal<string>('');
  lastName = signal<string>('');
  userName = signal<string>('');
  email = signal<string>('');
  phone = signal<string>('');
}
