import { LoginRes, LoginResAll } from './login';

export interface Adaptor {
  adapt(data: LoginResAll): LoginRes;
}
