// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

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
    owner: Shared.ProfileReference;
  }
}

export declare namespace Posts {
  export { type PostRetrieveResponse as PostRetrieveResponse };
}
