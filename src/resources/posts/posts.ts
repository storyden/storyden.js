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

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  body_links: Array<PostUpdateResponse.BodyLink>;

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

export namespace PostUpdateResponse {
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

      url: string;

      width: number;
    }

    export interface PrimaryImage {
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
}

export interface PostSearchResponse {
  count: number;

  results: Array<PostSearchResponse.Result>;
}

export namespace PostSearchResponse {
  /**
   * A post represents a temporal piece of content, it can be a thread, or a reply to
   * a thread or something else such as a blog, announcement, etc. Post is used in
   * generic use-cases where it may not matter whether you want a thread or a reply,
   * such as search results or recommendations.
   */
  export interface Result {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The body text of a post within a thread. The type is either a string or an
     * object, depending on what was used during creation. Strings can be used for
     * basic plain text or markdown content and objects are used for more complex types
     * such as Slate.js editor documents.
     */
    body: string;

    body_links: Array<Result.BodyLink>;

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

  export namespace Result {
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

        url: string;

        width: number;
      }

      export interface PrimaryImage {
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
