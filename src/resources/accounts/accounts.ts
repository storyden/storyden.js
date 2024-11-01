// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AvatarAPI from './avatar';
import { Avatar } from './avatar';
import * as SelfAPI from './self/self';
import { Self } from './self/self';

export class Accounts extends APIResource {
  self: SelfAPI.Self = new SelfAPI.Self(this._client);
  avatar: AvatarAPI.Avatar = new AvatarAPI.Avatar(this._client);
}

Accounts.Self = Self;
Accounts.Avatar = Avatar;

export declare namespace Accounts {
  export { Self as Self };

  export { Avatar as Avatar };
}
