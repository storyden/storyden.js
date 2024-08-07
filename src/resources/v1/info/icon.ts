// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as IconAPI from './icon';
import { type BlobLike } from '../../../uploads';
import { type Response } from '../../../_shims/index';

export class Icon extends APIResource {
  /**
   * Upload and process the installation's logo image.
   */
  create(body: IconCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/info/icon', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }

  /**
   * Get the logo icon image.
   */
  retrieve(
    iconSize: '512x512' | '32x32' | '180x180' | '120x120' | '167x167' | '152x152',
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.get(`/v1/info/icon/${iconSize}`, { ...options, __binaryResponse: true });
  }
}

export type IconCreateParams = string | ArrayBufferView | ArrayBuffer | BlobLike;

export namespace Icon {
  export import IconCreateParams = IconAPI.IconCreateParams;
}
