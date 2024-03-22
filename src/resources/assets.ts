// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import { type Response } from 'Storyden/_shims/index';
import * as AssetsAPI from 'Storyden/resources/assets';

export class Assets extends APIResource {
  /**
   * Upload and process a media file.
   */
  create(params: AssetCreateParams, options?: Core.RequestOptions): Core.APIPromise<AssetCreateResponse> {
    const { 'Content-Length': contentLength } = params;
    return this._client.post('/v1/assets', {
      ...options,
      headers: { 'Content-Length': contentLength.toString(), ...options?.headers },
    });
  }

  /**
   * Download an asset by its ID.
   */
  retrieve(assetFilename: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/v1/assets/${assetFilename}`, { ...options, __binaryResponse: true });
  }
}

export interface AssetCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  height: number;

  mime_type: string;

  url: string;

  width: number;
}

export interface AssetCreateParams {
  /**
   * Body content length in bytes.
   */
  'Content-Length': number;
}

export namespace Assets {
  export import AssetCreateResponse = AssetsAPI.AssetCreateResponse;
  export import AssetCreateParams = AssetsAPI.AssetCreateParams;
}
