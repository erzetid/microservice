// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import Api from '@base/Api';
import UserService from '@service/user';
import { Handler } from 'manggon';

const userService = new UserService();

const getHandler = new Handler('', {
  childPath: '',
  method: 'get',
  function: async (_req, res) => {
    try {
      const data = await userService.getUsers();
      res.json(data);
    } catch (error: any) {
      res.status(500).json(error?.message);
    }
  },
});

const addHandler = new Handler('', {
  childPath: '',
  method: 'post',
  function: async (req, res) => {
    try {
      const { email, password } = req.body;
      await userService.addUser(email, password);
      res.status(201).json('User added');
    } catch (error: any) {
      res.status(500).json(error?.message);
    }
  },
});

const getUserHandler = new Handler('', {
  childPath: '/:email', // :email is a placeholder for the email of the user
  method: 'get',
  function: async (req, res) => {
    try {
      const { email } = req.params;
      const data = await userService.getUser(email);
      res.json(data);
    } catch (error: any) {
      res.status(500).json(error?.message);
    }
  },
});

const UserApi = new Api(2000, [getHandler, addHandler, getUserHandler]);
export default UserApi;
