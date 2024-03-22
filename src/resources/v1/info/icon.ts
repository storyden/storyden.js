// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import { type Response } from 'Storyden/_shims/index';
import * as IconAPI from 'Storyden/resources/v1/info/icon';

export class Icon extends APIResource {
  /**
   * Upload and process the installation's logo image.
   */
  create(params: IconCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'Content-Length': contentLength } = params;
    return this._client.post('/v1/info/icon', {
      ...options,
      headers: { Accept: '*/*', 'Content-Length': contentLength.toString(), ...options?.headers },
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

export interface IconCreateParams {
  /**
   * Body content length in bytes.
   */
  'Content-Length': number;
}

export namespace Icon {
  export import IconCreateParams = IconAPI.IconCreateParams;
}
