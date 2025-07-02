// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Assets extends APIResource {
  /**
   * Add an asset to a node.
   *
   * @example
   * ```ts
   * const response = await client.nodes.assets.add(
   *   'cc5lnd2s1s4652adtu50',
   *   'asset_id',
   * );
   * ```
   */
  add(nodeSlug: string, assetId: string, options?: Core.RequestOptions): Core.APIPromise<AssetAddResponse> {
    return this._client.put(`/nodes/${nodeSlug}/assets/${assetId}`, options);
  }

  /**
   * Remove an asset from a node.
   *
   * @example
   * ```ts
   * const asset = await client.nodes.assets.remove(
   *   'cc5lnd2s1s4652adtu50',
   *   'asset_id',
   * );
   * ```
   */
  remove(
    nodeSlug: string,
    assetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetRemoveResponse> {
    return this._client.delete(`/nodes/${nodeSlug}/assets/${assetId}`, options);
  }
}

/**
 * The full properties of a node including all child nodes.
 */
export interface AssetAddResponse {}

/**
 * The full properties of a node including all child nodes.
 */
export interface AssetRemoveResponse {}

export declare namespace Assets {
  export { type AssetAddResponse as AssetAddResponse, type AssetRemoveResponse as AssetRemoveResponse };
}
