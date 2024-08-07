// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AssetsAPI from './assets';
import { type BlobLike } from '../uploads';
import { type Response } from '../_shims/index';

export class Assets extends APIResource {
  /**
   * Upload and process a media file.
   */
  create(params: AssetCreateParams, options?: Core.RequestOptions): Core.APIPromise<AssetCreateResponse> {
    const { body, content_fill_rule, filename, node_content_fill_target } = params;
    return this._client.post('/v1/assets', {
      query: { content_fill_rule, filename, node_content_fill_target },
      body: body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', ...options?.headers },
      __binaryRequest: true,
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

  filename: string;

  height: number;

  mime_type: string;

  url: string;

  width: number;
}

export interface AssetCreateParams {
  /**
   * Body param:
   */
  body: string | ArrayBufferView | ArrayBuffer | BlobLike;

  /**
   * Query param: Use the content extracted from the child resource to modify the
   * target resource. This can be used to populate a node from a asset or link. For
   * example, if you wanted to create a node that held the contents of a PDF file,
   * you can upload the file with a target node and a fill rule set.
   */
  content_fill_rule?: 'replace';

  /**
   * Query param: The client-provided file name for the asset.
   */
  filename?: string;

  /**
   * Query param: When NodeContentFillRuleQuery is used, this option must be set in
   * order to specify which node will receive content extracted from the source.
   */
  node_content_fill_target?: string;
}

export namespace Assets {
  export import AssetCreateResponse = AssetsAPI.AssetCreateResponse;
  export import AssetCreateParams = AssetsAPI.AssetCreateParams;
}
