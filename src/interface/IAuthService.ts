// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export default interface IAuthService {
  login(email: string, password: string): Promise<string>;
  logout(email: string): Promise<string>;
  register(email: string, password: string): Promise<string>;
}
