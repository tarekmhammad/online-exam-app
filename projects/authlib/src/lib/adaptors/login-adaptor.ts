import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adaptor';
import { LoginReq, LoginRes, LoginResAll } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class LoginAdaptor implements Adaptor {
  //  respone form backEnd

  adapt(data: LoginResAll): LoginRes {
    return {
      firstName: data.payload.user.firstName,
      lastName: data.payload.user.lastName,
      email: data.payload.user.email,
      token: data.payload.token,
    };
  }
}
