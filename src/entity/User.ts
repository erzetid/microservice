// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export default class User {
  constructor(public email: string, private password: string) {
    this.email = email;
    this.password = password;
  }
}
