// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import IAuthService from '@interface/IAuthService';
import axios, { AxiosError } from 'axios';

export default class AuthService implements IAuthService {
  async login(email: string, password: string): Promise<string> {
    return await axios
      .get(`http://localhost:2000/${email}`)
      .then((res) => {
        const user = res.data;
        if (user.password === password) {
          return 'Login success';
        }
        throw new Error('Invalid password');
      })
      .catch((error: AxiosError) => {
        if (error.response) throw new Error(`${error.response.data}`);
        else if (error.request) throw new Error(error.request);
        else throw new Error(error.message);
      });
  }
  async register(email: string, password: string): Promise<string> {
    return await axios
      .post('http://localhost:2000', { email, password })
      .then((res) => {
        return 'Register success';
      })
      .catch((error: AxiosError) => {
        if (error.response) throw new Error(`${error.response.data}`);
        else if (error.request) throw new Error(error.request);
        else throw new Error(error.message);
      });
  }
}
