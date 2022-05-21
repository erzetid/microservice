// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import AuthApi from '@service/auth/api';
import UserApi from '@service/user/api';

export const userApi = UserApi;
export const authApi = AuthApi;

authApi.start();
userApi.start();
