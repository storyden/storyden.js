// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ReactsAPI from './reacts';
import { ReactAddParams, ReactAddResponse, Reacts } from './reacts';

export class Posts extends APIResource {
  reacts: ReactsAPI.Reacts = new ReactsAPI.Reacts(this._client);

  /**
   * Publish changes to a single post.
   */
  update(
    postId: string,
    body?: PostUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostUpdateResponse>;
  update(postId: string, options?: Core.RequestOptions): Core.APIPromise<PostUpdateResponse>;
  update(
    postId: string,
    body: PostUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(postId, {}, body);
    }
    return this._client.patch(`/posts/${postId}`, { body, ...options });
  }

  /**
   * Archive a post using soft-delete.
   */
  delete(postId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/posts/${postId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * A post represents a temporal piece of content, it can be a thread, or a reply to
 * a thread or something else such as a blog, announcement, etc. Post is used in
 * generic use-cases where it may not matter whether you want a thread or a reply,
 * such as search results or recommendations.
 */
export interface PostUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<PostUpdateResponse.Asset>;

  /**
   * A minimal reference to an account.
   */
  author: PostUpdateResponse.Author;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  body_links: Array<PostUpdateResponse.BodyLink>;

  collections: PostUpdateResponse.Collections;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  likes: PostUpdateResponse.Likes;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<PostUpdateResponse.React>;

  /**
   * A thread's ID and optional slug separated by a dash = it's unique mark. This
   * allows endpoints to respond to varying forms of a thread's ID.
   *
   * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
   * `top-10-movies-thread`, Storyden will understand both the forms:
   * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
   * identifier for that thread.
   */
  slug: string;

  /**
   * The title of a thread.
   */
  title: string;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * A short version of the post's body text for use in previews.
   */
  description?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace PostUpdateResponse {
  export interface Asset {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

    height: number;

    mime_type: string;

    /**
     * The API path of the asset, conforms to the schema's GET `/assets`.
     */
    path: string;

    width: number;

    parent?: unknown;
  }

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

  /**
   * A minimal object used to refer to a link without sending too much data.
   */
  export interface BodyLink {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    domain: string;

    slug: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * A web address
     */
    url: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    description?: string;

    favicon_image?: BodyLink.FaviconImage;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    primary_image?: BodyLink.PrimaryImage;

    title?: string;
  }

  export namespace BodyLink {
    export interface FaviconImage {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

      height: number;

      mime_type: string;

      /**
       * The API path of the asset, conforms to the schema's GET `/assets`.
       */
      path: string;

      width: number;

      parent?: unknown;
    }

    export interface PrimaryImage {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

      height: number;

      mime_type: string;

      /**
       * The API path of the asset, conforms to the schema's GET `/assets`.
       */
      path: string;

      width: number;

      parent?: unknown;
    }
  }

  export interface Collections {
    /**
     * A boolean indicating if the account in context has collected this item.
     */
    has_collected: boolean;

    /**
     * How many collections has this item been added to?
     */
    in_collections: number;
  }

  export interface Likes {
    /**
     * A boolean indicating if the account in context has liked this item.
     */
    liked: boolean;

    /**
     * A simple count of likes for contexts where pulling the full list would be
     * overkill. For use on minimal item reference schemas.
     */
    likes: number;
  }

  export interface React {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * A minimal reference to an account.
     */
    author: React.Author;

    /**
     * A single emoji character representing a reaction. In future, this will be
     * augmented with a more fully fledged custom emoji system.
     */
    emoji: string;
  }

  export namespace React {
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
}

export interface PostUpdateParams {
  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * A web address
   */
  url?: string;
}

Posts.Reacts = Reacts;

export declare namespace Posts {
  export { type PostUpdateResponse as PostUpdateResponse, type PostUpdateParams as PostUpdateParams };

  export {
    Reacts as Reacts,
    type ReactAddResponse as ReactAddResponse,
    type ReactAddParams as ReactAddParams,
  };
}
