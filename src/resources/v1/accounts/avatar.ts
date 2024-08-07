// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AvatarAPI from './avatar';
import { type BlobLike } from '../../../uploads';
import { type Response } from '../../../_shims/index';

export class Avatar extends APIResource {
  /**
   * Upload an avatar for the authenticated account.
   */
  create(body: AvatarCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/accounts/self/avatar', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }

  /**
   * Get an avatar for the specified account.
   */
  retrieve(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v1/accounts/${accountHandle}/avatar`, { ...options, __binaryResponse: true });
  }
}

export type AvatarCreateParams = string | ArrayBufferView | ArrayBuffer | BlobLike;

export namespace Avatar {
  export import AvatarCreateParams = AvatarAPI.AvatarCreateParams;
}
