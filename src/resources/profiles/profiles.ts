// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
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
   * const profile = await client.profiles.retrieve(
   *   'southclaws',
   * );
   * ```
   */
  retrieve(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<ProfileRetrieveResponse> {
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

export interface ProfileRetrieveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The rich-text bio for an account's public profile.
   */
  bio: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  followers: number;

  following: number;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * A list of tags.
   */
  interests: Array<ProfileRetrieveResponse.Interest>;

  /**
   * The time the resource was created.
   */
  joined: string;

  /**
   * The total number of likes received by a member.
   */
  like_score: number;

  links: Array<ProfileRetrieveResponse.Link>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<ProfileRetrieveResponse.Role>;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  image?: string;

  /**
   * A minimal reference to an account.
   */
  invited_by?: ProfileRetrieveResponse.InvitedBy;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  /**
   * The time the resource was created.
   */
  suspended?: string;
}

export namespace ProfileRetrieveResponse {
  /**
   * A minimal representation of a tag for use in most contexts where you don't need
   * the full list of items associated with the tag.
   */
  export interface Interest {
    /**
     * The colour of a tag.
     */
    colour: string;

    /**
     * The number of items tagged with this tag.
     */
    item_count: number;

    /**
     * The name of a tag.
     */
    name: string;
  }

  export interface Link {
    text: string;

    url: string;
  }

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

  /**
   * A minimal reference to an account.
   */
  export interface InvitedBy {
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

    roles: Array<InvitedBy.Role>;

    /**
     * The time the resource was created.
     */
    suspended?: string;
  }

  export namespace InvitedBy {
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
     * The rich-text bio for an account's public profile.
     */
    bio: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    followers: number;

    following: number;

    /**
     * The unique @ handle of an account.
     */
    handle: string;

    /**
     * A list of tags.
     */
    interests: Array<Profile.Interest>;

    /**
     * The time the resource was created.
     */
    joined: string;

    /**
     * The total number of likes received by a member.
     */
    like_score: number;

    links: Array<Profile.Link>;

    /**
     * Arbitrary metadata for the resource.
     */
    meta: { [key: string]: unknown };

    /**
     * The account owners display name.
     */
    name: string;

    roles: Array<Profile.Role>;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    image?: string;

    /**
     * A minimal reference to an account.
     */
    invited_by?: Profile.InvitedBy;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    /**
     * The time the resource was created.
     */
    suspended?: string;
  }

  export namespace Profile {
    /**
     * A minimal representation of a tag for use in most contexts where you don't need
     * the full list of items associated with the tag.
     */
    export interface Interest {
      /**
       * The colour of a tag.
       */
      colour: string;

      /**
       * The number of items tagged with this tag.
       */
      item_count: number;

      /**
       * The name of a tag.
       */
      name: string;
    }

    export interface Link {
      text: string;

      url: string;
    }

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

    /**
     * A minimal reference to an account.
     */
    export interface InvitedBy {
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

      roles: Array<InvitedBy.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace InvitedBy {
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
  export {
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileListResponse as ProfileListResponse,
    type ProfileListParams as ProfileListParams,
  };

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
