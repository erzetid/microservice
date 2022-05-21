// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import User from '@entity/User';

export default interface IUserService {
  addUser(email: string, password: string): Promise<void>;
  getUser(email: string): Promise<User>;
  getUsers(): Promise<User[]>;
  removeUser(email: string): Promise<void>;
}
