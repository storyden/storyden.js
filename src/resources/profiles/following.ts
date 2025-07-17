// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Following extends APIResource {
  /**
   * Get the profiles that this account is following.
   *
   * @example
   * ```ts
   * const following = await client.profiles.following.retrieve(
   *   'southclaws',
   * );
   * ```
   */
  retrieve(
    accountHandle: string,
    query?: FollowingRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FollowingRetrieveResponse>;
  retrieve(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<FollowingRetrieveResponse>;
  retrieve(
    accountHandle: string,
    query: FollowingRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FollowingRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(accountHandle, {}, query);
    }
    return this._client.get(`/profiles/${accountHandle}/following`, { query, ...options });
  }
}

export interface FollowingRetrieveResponse {
  current_page: number;

  following: Array<Shared.ProfileReference>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export interface FollowingRetrieveParams {
  /**
   * Pagination query parameters.
   */
  page?: string;
}

export declare namespace Following {
  export {
    type FollowingRetrieveResponse as FollowingRetrieveResponse,
    type FollowingRetrieveParams as FollowingRetrieveParams,
  };
}
