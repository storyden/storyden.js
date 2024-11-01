// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ReactsAPI from './reacts';
import { Reacts } from './reacts';

export class Posts extends APIResource {
  reacts: ReactsAPI.Reacts = new ReactsAPI.Reacts(this._client);
}

Posts.Reacts = Reacts;

export declare namespace Posts {
  export { Reacts as Reacts };
}
