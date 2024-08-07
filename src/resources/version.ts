// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as VersionAPI from './version';

export class Version extends APIResource {
  /**
   * The version number includes the date and time of the release build as well as a
   * short representation of the Git commit hash.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/version', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type VersionRetrieveResponse = string;

export namespace Version {
  export import VersionRetrieveResponse = VersionAPI.VersionRetrieveResponse;
}
