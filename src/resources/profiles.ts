// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ProfilesAPI from './profiles';

export class Profiles extends APIResource {
  /**
   * Get a public profile by ID.
   */
  retrieve(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<ProfileRetrieveResponse> {
    return this._client.get(`/v1/profiles/${accountHandle}`, options);
  }

  /**
   * Query and search profiles.
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
    return this._client.get('/v1/profiles', { query, ...options });
  }
}

export interface ProfileRetrieveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export interface ProfileListResponse {
  current_page: number;

  page_size: number;

  profiles: Array<ProfileListResponse.Profile>;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace ProfileListResponse {
  export interface Profile {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
  }
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

export namespace Profiles {
  export import ProfileRetrieveResponse = ProfilesAPI.ProfileRetrieveResponse;
  export import ProfileListResponse = ProfilesAPI.ProfileListResponse;
  export import ProfileListParams = ProfilesAPI.ProfileListParams;
}
