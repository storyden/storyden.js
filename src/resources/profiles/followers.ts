// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Followers extends APIResource {
  /**
   * Follow the specified profile as the authenticated account.
   *
   * @example
   * ```ts
   * await client.profiles.followers.create('southclaws');
   * ```
   */
  create(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/profiles/${accountHandle}/followers`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get the followers and following details for a profile.
   *
   * @example
   * ```ts
   * const follower = await client.profiles.followers.retrieve(
   *   'southclaws',
   * );
   * ```
   */
  retrieve(
    accountHandle: string,
    query?: FollowerRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FollowerRetrieveResponse>;
  retrieve(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<FollowerRetrieveResponse>;
  retrieve(
    accountHandle: string,
    query: FollowerRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FollowerRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(accountHandle, {}, query);
    }
    return this._client.get(`/profiles/${accountHandle}/followers`, { query, ...options });
  }

  /**
   * Unfollow the specified profile as the authenticated account.
   *
   * @example
   * ```ts
   * await client.profiles.followers.delete('southclaws');
   * ```
   */
  delete(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/profiles/${accountHandle}/followers`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface FollowerRetrieveResponse {
  current_page: number;

  followers: Array<Shared.ProfileReference>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export interface FollowerRetrieveParams {
  /**
   * Pagination query parameters.
   */
  page?: string;
}

export declare namespace Followers {
  export {
    type FollowerRetrieveResponse as FollowerRetrieveResponse,
    type FollowerRetrieveParams as FollowerRetrieveParams,
  };
}
