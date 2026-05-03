import { Injectable, inject } from '@angular/core';
import { AuthAPI } from '../base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoints } from '../enums/AuthEndPionts';
import { LoginReq, LoginRes, LoginResAll } from '../interfaces/login';
import { LoginAdaptor } from '../adaptors/login-adaptor';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthAPI {
  private readonly _httpClient = inject(HttpClient);
  private readonly _loginAdaptor = inject(LoginAdaptor);

  // Login

  login(data: LoginReq): Observable<LoginRes | string> {
    return this._httpClient
      .post<LoginResAll>(AuthEndPoints.login, data)
      .pipe(map((res: LoginResAll) => this._loginAdaptor.adapt(res)));
  }

  // send Email

  sendEmail(email: any): Observable<any> {
    return this._httpClient
      .post<any>(AuthEndPoints.sendEmailVerification, email)
      .pipe(catchError((err) => of(err)));
  }

  // Confirm Email

  confirmEmail(data: any): Observable<any> {
    return this._httpClient
      .post(AuthEndPoints.confirmEmailVerification, data)
      .pipe(catchError((err) => of(err)));
  }

  // Register

  regiter(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoints.register, data).pipe(catchError((err) => of(err)));
  }
}
