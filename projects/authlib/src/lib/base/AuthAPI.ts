import { Observable } from 'rxjs';
import { LoginReq, LoginRes, LoginResAll } from '../interfaces/login';

export abstract class AuthAPI {
  abstract login(data: LoginReq): Observable<LoginRes | string>;
  abstract sendEmail(email: any): Observable<any>;
  abstract confirmEmail(data: any): Observable<any>;
  abstract regiter(data: any): Observable<any>;
}
