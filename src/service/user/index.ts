// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import User from '@entity/User';
import IUserService from '@interface/IUserService';

export default class UserService implements IUserService {
  public users: User[] = [];
  addUser(email: string, password: string): Promise<void> {
    const user = new User(email, password);
    return new Promise((resolve, reject) => {
      if (this.users.length) {
        const existingUser = this.users.find((u) => u.email === user.email);
        if (existingUser) reject(new Error('User already exists'));
        else {
          this.users.push(user);
          resolve();
        }
      } else {
        this.users.push(user);
        resolve();
      }
    });
  }
  getUser(email: string): Promise<User> {
    const user = this.users.find((u) => u.email === email);
    return new Promise((resolve, reject) => {
      if (user) resolve(user);
      else reject(new Error('User not found'));
    });
  }
  getUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      if (this.users.length) resolve(this.users);
      else reject(new Error('No users found'));
    });
  }
  removeUser(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const user = this.users.find((u) => u.email === email);
      if (user) {
        this.users = this.users.filter((u) => u.email !== email);
        resolve();
      } else reject(new Error('User not found'));
    });
  }
}
