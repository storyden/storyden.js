// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import { type Response } from 'Storyden/_shims/index';
import * as AvatarAPI from 'Storyden/resources/v1/accounts/avatar';

export class Avatar extends APIResource {
  /**
   * Upload an avatar for the authenticated account.
   */
  create(params: AvatarCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'Content-Length': contentLength } = params;
    return this._client.post('/v1/accounts/self/avatar', {
      ...options,
      headers: { Accept: '*/*', 'Content-Length': contentLength.toString(), ...options?.headers },
    });
  }

  /**
   * Get an avatar for the specified account.
   */
  retrieve(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v1/accounts/${accountHandle}/avatar`, { ...options, __binaryResponse: true });
  }
}

export interface AvatarCreateParams {
  /**
   * Body content length in bytes.
   */
  'Content-Length': number;
}

export namespace Avatar {
  export import AvatarCreateParams = AvatarAPI.AvatarCreateParams;
}
