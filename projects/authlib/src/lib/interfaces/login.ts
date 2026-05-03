export interface LoginReq {
  username: string;
  password: string;
}

export interface LoginRes {
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

export interface LoginResAll {
  status: boolean;
  code: number;
  payload: {
    user: {
      id: string;
      username: string;
      email: string;
      phone: string;
      firstName: string;
      lastName: string;
      emailVerified: boolean;
      phoneVerified: boolean;
      role: string;
    };
    token: string;
  };
}

// export interface Payload {}

// export interface User {}
