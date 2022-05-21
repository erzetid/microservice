// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import Api from '@base/Api';
import AuthService from '@service/auth';
import { Handler } from 'manggon';

const authService = new AuthService();

const loginHandler = new Handler('', {
  childPath: '/login',
  method: 'get',
  function: async (req, res) => {
    try {
      const data = await authService.login('erzetid@gmail.com', 'password');
      res.json(data);
    } catch (error: any) {
      res.status(500).json(error?.message);
    }
  },
});

const AuthApi = new Api(2001, [loginHandler]);
export default AuthApi;
