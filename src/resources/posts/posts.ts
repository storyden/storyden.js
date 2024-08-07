// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PostsAPI from './posts';
import * as ReactsAPI from './reacts';

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
    return this._client.patch(`/v1/posts/${postId}`, { body, ...options });
  }

  /**
   * Archive a post using soft-delete.
   */
  delete(postId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/posts/${postId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Search through posts using various queries and filters.
   */
  search(query?: PostSearchParams, options?: Core.RequestOptions): Core.APIPromise<PostSearchResponse>;
  search(options?: Core.RequestOptions): Core.APIPromise<PostSearchResponse>;
  search(
    query: PostSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostSearchResponse> {
    if (isRequestOptions(query)) {
      return this.search({}, query);
    }
    return this._client.get('/v1/posts/search', { query, ...options });
  }
}

/**
 * A new post within a thread of posts. A post may reply to another post in the
 * thread by specifying the `reply_to` property. The identifier in the `reply_to`
 * value must be post within the same thread.
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

  /**
   * The time the resource was created.
   */
  createdAt: string;

  links: Array<PostUpdateResponse.Link>;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<PostUpdateResponse.React>;

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

export namespace PostUpdateResponse {
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

export interface PostSearchResponse {
  count: number;

  results: Array<PostSearchResponse.Result>;
}

export namespace PostSearchResponse {
  /**
   * A new post within a thread of posts. A post may reply to another post in the
   * thread by specifying the `reply_to` property. The identifier in the `reply_to`
   * value must be post within the same thread.
   */
  export interface Result {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Result.Asset>;

    /**
     * A minimal reference to an account.
     */
    author: Result.Author;

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

    links: Array<Result.Link>;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Result.React>;

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

  export namespace Result {
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
  meta?: Record<string, unknown>;

  /**
   * A web address
   */
  url?: string;
}

export interface PostSearchParams {
  /**
   * Show only results created by this account.
   */
  author?: string;

  /**
   * A text query to search for in post content.
   */
  body?: string;

  /**
   * Posts, threads or both.
   */
  kind?: Array<'post' | 'thread'>;
}

export namespace Posts {
  export import PostUpdateResponse = PostsAPI.PostUpdateResponse;
  export import PostSearchResponse = PostsAPI.PostSearchResponse;
  export import PostUpdateParams = PostsAPI.PostUpdateParams;
  export import PostSearchParams = PostsAPI.PostSearchParams;
  export import Reacts = ReactsAPI.Reacts;
  export import ReactUpdateResponse = ReactsAPI.ReactUpdateResponse;
  export import ReactUpdateParams = ReactsAPI.ReactUpdateParams;
}
