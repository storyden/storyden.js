// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type Response } from '../../_shims/index';

export class Avatar extends APIResource {
  /**
   * Get an avatar for the specified account.
   */
  retrieve(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v1/accounts/${accountHandle}/avatar`, { ...options, __binaryResponse: true });
  }
}
