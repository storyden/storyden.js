// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Posts extends APIResource {
  /**
   * Retreives all likes for the given post. Not paginated (yet.)
   *
   * @example
   * ```ts
   * const post = await client.likes.posts.retrieve(
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  retrieve(postId: string, options?: Core.RequestOptions): Core.APIPromise<PostRetrieveResponse> {
    return this._client.get(`/likes/posts/${postId}`, options);
  }

  /**
   * Add a like/vote to a post. A "like" is pretty much what you'd expect for any
   * modern social platform, it will inform the feed algorithm and the account's
   * recommendations as well as listing the post on their profile. Idempotent
   * operation where repeated use will do nothing.
   *
   * @example
   * ```ts
   * await client.likes.posts.add('cc5lnd2s1s4652adtu50');
   * ```
   */
  add(postId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/likes/posts/${postId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Removes a like/vote from the authenticated account for the post. It will perform
   * the inverse of any changes to the account's algorithm. Also is idempotent, so
   * repeated use will do nothing after being actioned once.
   *
   * @example
   * ```ts
   * await client.likes.posts.remove('cc5lnd2s1s4652adtu50');
   * ```
   */
  remove(postId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/likes/posts/${postId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PostRetrieveResponse {
  likes: Array<PostRetrieveResponse.Like>;
}

export namespace PostRetrieveResponse {
  export interface Like {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    created_at: string;

    /**
     * A minimal reference to an account.
     */
    owner: Like.Owner;
  }

  export namespace Like {
    /**
     * A minimal reference to an account.
     */
    export interface Owner {
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

      roles: Array<Owner.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace Owner {
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

export declare namespace Posts {
  export { type PostRetrieveResponse as PostRetrieveResponse };
}
