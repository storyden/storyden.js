// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as FollowersAPI from './followers';
import { FollowerRetrieveParams, FollowerRetrieveResponse, Followers } from './followers';
import * as FollowingAPI from './following';
import { Following, FollowingRetrieveParams, FollowingRetrieveResponse } from './following';

export class Profiles extends APIResource {
  following: FollowingAPI.Following = new FollowingAPI.Following(this._client);
  followers: FollowersAPI.Followers = new FollowersAPI.Followers(this._client);

  /**
   * Get a public profile by ID.
   *
   * @example
   * ```ts
   * const publicProfile = await client.profiles.retrieve(
   *   'southclaws',
   * );
   * ```
   */
  retrieve(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<Shared.PublicProfile> {
    return this._client.get(`/profiles/${accountHandle}`, options);
  }

  /**
   * Query and search profiles.
   *
   * @example
   * ```ts
   * const profiles = await client.profiles.list();
   * ```
   */
  list(query?: ProfileListParams, options?: Core.RequestOptions): Core.APIPromise<ProfileListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ProfileListResponse>;
  list(
    query: ProfileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/profiles', { query, ...options });
  }
}

export interface ProfileListResponse {
  current_page: number;

  page_size: number;

  profiles: Array<Shared.PublicProfile>;

  results: number;

  total_pages: number;

  next_page?: number;
}

export interface ProfileListParams {
  /**
   * Pagination query parameters.
   */
  page?: string;

  /**
   * Search query string.
   */
  q?: string;
}

Profiles.Following = Following;
Profiles.Followers = Followers;

export declare namespace Profiles {
  export { type ProfileListResponse as ProfileListResponse, type ProfileListParams as ProfileListParams };

  export {
    Following as Following,
    type FollowingRetrieveResponse as FollowingRetrieveResponse,
    type FollowingRetrieveParams as FollowingRetrieveParams,
  };

  export {
    Followers as Followers,
    type FollowerRetrieveResponse as FollowerRetrieveResponse,
    type FollowerRetrieveParams as FollowerRetrieveParams,
  };
}
