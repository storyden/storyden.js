// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { type BlobLike } from '../../uploads';
import { type Response } from '../../_shims/index';

export class Icon extends APIResource {
  /**
   * Get the logo icon image.
   *
   * @example
   * ```ts
   * const icon = await client.info.icon.retrieve('512x512');
   *
   * const content = await icon.blob();
   * console.log(content);
   * ```
   */
  retrieve(
    iconSize: '512x512' | '32x32' | '180x180' | '120x120' | '167x167' | '152x152',
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.get(`/info/icon/${iconSize}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Upload and process the installation's logo image.
   *
   * @example
   * ```ts
   * await client.info.icon.upload(
   *   fs.createReadStream('path/to/file'),
   * );
   * ```
   */
  upload(body?: IconUploadParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  upload(options?: Core.RequestOptions): Core.APIPromise<void>;
  upload(
    body?: IconUploadParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.upload(undefined, body);
    }
    return this._client.post('/info/icon', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }
}

export type IconUploadParams = string | ArrayBufferView | ArrayBuffer | BlobLike;

export declare namespace Icon {
  export { type IconUploadParams as IconUploadParams };
}
