// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BansAPI from './bans';

export class Admin extends APIResource {
  bans: BansAPI.Bans = new BansAPI.Bans(this._client);
}

export namespace Admin {
  export import Bans = BansAPI.Bans;
}
