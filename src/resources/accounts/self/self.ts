// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AuthMethodsAPI from './auth-methods';
import { AuthMethods } from './auth-methods';
import * as AvatarAPI from './avatar';
import { Avatar } from './avatar';

export class Self extends APIResource {
  authMethods: AuthMethodsAPI.AuthMethods = new AuthMethodsAPI.AuthMethods(this._client);
  avatar: AvatarAPI.Avatar = new AvatarAPI.Avatar(this._client);
}

Self.AuthMethods = AuthMethods;
Self.Avatar = Avatar;

export declare namespace Self {
  export { AuthMethods as AuthMethods };

  export { Avatar as Avatar };
}
