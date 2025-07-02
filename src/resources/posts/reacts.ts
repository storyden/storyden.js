// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Reacts extends APIResource {
  /**
   * Add a reaction to a post.
   */
  add(
    postId: string,
    body: ReactAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReactAddResponse> {
    return this._client.put(`/posts/${postId}/reacts`, { body, ...options });
  }

  /**
   * Remove a reaction from a post.
   */
  remove(postId: string, reactId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/posts/${postId}/reacts/${reactId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ReactAddResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * A minimal reference to an account.
   */
  author: ReactAddResponse.Author;

  /**
   * A single emoji character representing a reaction. In future, this will be
   * augmented with a more fully fledged custom emoji system.
   */
  emoji: string;
}

export namespace ReactAddResponse {
  /**
   * A minimal reference to an account.
   */
  export interface Author {
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

    roles: Array<Author.Role>;

    /**
     * The time the resource was created.
     */
    suspended?: string;
  }

  export namespace Author {
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

export interface ReactAddParams {
  /**
   * A single emoji character representing a reaction. In future, this will be
   * augmented with a more fully fledged custom emoji system.
   */
  emoji: string;
}

export declare namespace Reacts {
  export { type ReactAddResponse as ReactAddResponse, type ReactAddParams as ReactAddParams };
}
