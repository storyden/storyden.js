// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as EventsAPI from '../events/events';
import * as PostsAPI from './posts';
import { PostRetrieveResponse, Posts } from './posts';

export class Likes extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);

  /**
   * Retreives all the likes that the given profile has given.
   *
   * @example
   * ```ts
   * const response = await client.likes.retrieveByProfile(
   *   'southclaws',
   * );
   * ```
   */
  retrieveByProfile(
    accountHandle: string,
    query?: LikeRetrieveByProfileParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LikeRetrieveByProfileResponse>;
  retrieveByProfile(
    accountHandle: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LikeRetrieveByProfileResponse>;
  retrieveByProfile(
    accountHandle: string,
    query: LikeRetrieveByProfileParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LikeRetrieveByProfileResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveByProfile(accountHandle, {}, query);
    }
    return this._client.get(`/likes/profiles/${accountHandle}`, { query, ...options });
  }
}

export interface LikeRetrieveByProfileResponse {
  current_page: number;

  likes: Array<LikeRetrieveByProfileResponse.Like>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace LikeRetrieveByProfileResponse {
  export interface Like {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    created_at: string;

    item:
      | Shared.DatagraphItemPost
      | Like.DatagraphItemThread
      | Shared.DatagraphItemReply
      | Shared.DatagraphItemNode
      | Shared.DatagraphItemProfile;
  }

  export namespace Like {
    export interface DatagraphItemThread {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      ref: EventsAPI.Thread;
    }
  }
}

export interface LikeRetrieveByProfileParams {
  /**
   * Pagination query parameters.
   */
  page?: string;
}

Likes.Posts = Posts;

export declare namespace Likes {
  export {
    type LikeRetrieveByProfileResponse as LikeRetrieveByProfileResponse,
    type LikeRetrieveByProfileParams as LikeRetrieveByProfileParams,
  };

  export { Posts as Posts, type PostRetrieveResponse as PostRetrieveResponse };
}
