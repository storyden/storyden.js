// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { type BlobLike } from '../../uploads';
import { type Response } from '../../_shims/index';

export class Banner extends APIResource {
  /**
   * Get the banner image.
   *
   * @example
   * ```ts
   * const banner = await client.info.banner.retrieve();
   *
   * const content = await banner.blob();
   * console.log(content);
   * ```
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get('/info/banner', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Upload and process the installation's banner image.
   *
   * @example
   * ```ts
   * await client.info.banner.upload(
   *   fs.createReadStream('path/to/file'),
   * );
   * ```
   */
  upload(body?: BannerUploadParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  upload(options?: Core.RequestOptions): Core.APIPromise<void>;
  upload(
    body?: BannerUploadParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.upload(undefined, body);
    }
    return this._client.post('/info/banner', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }
}

export type BannerUploadParams = string | ArrayBufferView | ArrayBuffer | BlobLike;

export declare namespace Banner {
  export { type BannerUploadParams as BannerUploadParams };
}
