import { TestBed } from '@angular/core/testing';

import { LoginAdaptor } from './login-adaptor';

describe('LoginAdaptor', () => {
  let service: LoginAdaptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAdaptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
