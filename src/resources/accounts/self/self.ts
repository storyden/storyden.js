// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AuthMethodsAPI from './auth-methods';
import * as AvatarAPI from './avatar';

export class Self extends APIResource {
  authMethods: AuthMethodsAPI.AuthMethods = new AuthMethodsAPI.AuthMethods(this._client);
  avatar: AvatarAPI.Avatar = new AvatarAPI.Avatar(this._client);
}

export namespace Self {
  export import AuthMethods = AuthMethodsAPI.AuthMethods;
  export import Avatar = AvatarAPI.Avatar;
}
