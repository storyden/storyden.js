// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AvatarAPI from './avatar';
import * as SelfAPI from './self/self';

export class Accounts extends APIResource {
  self: SelfAPI.Self = new SelfAPI.Self(this._client);
  avatar: AvatarAPI.Avatar = new AvatarAPI.Avatar(this._client);
}

export namespace Accounts {
  export import Self = SelfAPI.Self;
  export import Avatar = AvatarAPI.Avatar;
}
