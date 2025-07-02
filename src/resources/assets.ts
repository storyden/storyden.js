// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { type BlobLike } from '../uploads';
import { type Response } from '../_shims/index';

export class Assets extends APIResource {
  /**
   * Download an asset by its ID.
   */
  download(assetFilename: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/assets/${assetFilename}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Upload and process a media file.
   */
  upload(params?: AssetUploadParams, options?: Core.RequestOptions): Core.APIPromise<AssetUploadResponse>;
  upload(options?: Core.RequestOptions): Core.APIPromise<AssetUploadResponse>;
  upload(
    params?: AssetUploadParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetUploadResponse> {
    if (isRequestOptions(params)) {
      return this.upload(undefined, params);
    }
    const { filename, parent_asset_id, body } = params ?? {};
    return this._client.post('/assets', {
      query: { filename, parent_asset_id },
      body: body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', ...options?.headers },
      __binaryRequest: true,
    });
  }
}

export interface AssetUploadResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  filename: string;

  height: number;

  mime_type: string;

  /**
   * The API path of the asset, conforms to the schema's GET `/assets`.
   */
  path: string;

  width: number;

  parent?: unknown;
}

export interface AssetUploadParams {
  /**
   * Query param: The client-provided file name for the asset.
   */
  filename?: string;

  /**
   * Query param: For uploading new versions of an existing asset, set this parameter
   * to the asset ID of the parent asset. This must be an ID and not a filename. This
   * feature is used for situations where you want to replace an asset in its usage
   * context, but retain the original with a way to reference it for features such as
   * editable/croppable images or file version history.
   */
  parent_asset_id?: string;

  /**
   * Body param:
   */
  body?: string | ArrayBufferView | ArrayBuffer | BlobLike;
}

export declare namespace Assets {
  export { type AssetUploadResponse as AssetUploadResponse, type AssetUploadParams as AssetUploadParams };
}
