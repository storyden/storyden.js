// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PostsAPI from './posts';

export class Posts extends APIResource {
  /**
   * Create a new post within a thread.
   */
  create(
    threadMark: string,
    body: PostCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostCreateResponse> {
    return this._client.post(`/v1/threads/${threadMark}/posts`, { body, ...options });
  }
}

/**
 * A new post within a thread of posts. A post may reply to another post in the
 * thread by specifying the `reply_to` property. The identifier in the `reply_to`
 * value must be post within the same thread.
 */
export interface PostCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<PostCreateResponse.Asset>;

  /**
   * A minimal reference to an account.
   */
  author: PostCreateResponse.Author;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  links: Array<PostCreateResponse.Link>;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<PostCreateResponse.React>;

  /**
   * A unique identifier for this resource.
   */
  root_id: string;

  /**
   * A thread's ID and optional slug separated by a dash = it's unique mark. This
   * allows endpoints to respond to varying forms of a thread's ID.
   *
   * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
   * `top-10-movies-thread`, Storyden will understand both the forms:
   * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
   * identifier for that thread.
   */
  root_slug: string;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: Record<string, unknown>;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  /**
   * A unique identifier for this resource.
   */
  reply_to?: string;
}

export namespace PostCreateResponse {
  export interface Asset {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

    height: number;

    mime_type: string;

    url: string;

    width: number;
  }

  /**
   * A minimal reference to an account.
   */
  export interface Author {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    admin: boolean;

    /**
     * The unique @ handle of an account.
     */
    handle: string;

    /**
     * The account owners display name.
     */
    name: string;
  }

  /**
   * A web address with content information such as title, description, etc.
   */
  export interface Link {
    assets: Array<Link.Asset>;

    domain: string;

    slug: string;

    /**
     * A web address
     */
    url: string;

    description?: string;

    title?: string;
  }

  export namespace Link {
    export interface Asset {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

      height: number;

      mime_type: string;

      url: string;

      width: number;
    }
  }

  export interface React {
    /**
     * A unique identifier for this resource.
     */
    id?: string;

    emoji?: string;
  }
}

export interface PostCreateParams {
  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: Record<string, unknown>;

  /**
   * A unique identifier for this resource.
   */
  reply_to?: string;

  /**
   * A web address
   */
  url?: string;
}

export namespace Posts {
  export import PostCreateResponse = PostsAPI.PostCreateResponse;
  export import PostCreateParams = PostsAPI.PostCreateParams;
}
