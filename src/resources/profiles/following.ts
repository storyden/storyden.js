// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

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

  following: Array<FollowingRetrieveResponse.Following>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace FollowingRetrieveResponse {
  /**
   * A minimal reference to an account.
   */
  export interface Following {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The unique @ handle of an account.
     */
    handle: string;

    /**
     * The time the resource was created.
     */
    joined: string;

    /**
     * The account owners display name.
     */
    name: string;

    roles: Array<Following.Role>;

    /**
     * The time the resource was created.
     */
    suspended?: string;
  }

  export namespace Following {
    export interface Role {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * One role may be designated as a badge for the account. If ture, it should be
       * displayed prominently on the profile or in other contexts.
       */
      badge: boolean;

      colour: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      /**
       * There are two built-in roles: everyone and admin, this boolean flag is set if
       * this role is one of the default built-in roles.
       */
      default: boolean;

      name: string;

      permissions: Array<
        | 'CREATE_POST'
        | 'READ_PUBLISHED_THREADS'
        | 'CREATE_REACTION'
        | 'MANAGE_POSTS'
        | 'MANAGE_CATEGORIES'
        | 'CREATE_INVITATION'
        | 'READ_PUBLISHED_LIBRARY'
        | 'MANAGE_LIBRARY'
        | 'SUBMIT_LIBRARY_NODE'
        | 'UPLOAD_ASSET'
        | 'MANAGE_EVENTS'
        | 'LIST_PROFILES'
        | 'READ_PROFILE'
        | 'CREATE_COLLECTION'
        | 'LIST_COLLECTIONS'
        | 'READ_COLLECTION'
        | 'MANAGE_COLLECTIONS'
        | 'COLLECTION_SUBMIT'
        | 'USE_PERSONAL_ACCESS_KEYS'
        | 'MANAGE_SETTINGS'
        | 'MANAGE_SUSPENSIONS'
        | 'MANAGE_ROLES'
        | 'ADMINISTRATOR'
      >;

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
