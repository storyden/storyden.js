// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as EventsAPI from '../events/events';

export class Posts extends APIResource {
  /**
   * Add a post to a collection. The collection must be owned by the account making
   * the request. The post can be any published post of any kind.
   *
   * @example
   * ```ts
   * const response = await client.collections.posts.add(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  add(
    collectionMark: string,
    postId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostAddResponse> {
    return this._client.put(`/collections/${collectionMark}/posts/${postId}`, options);
  }

  /**
   * Remove a post from a collection. The collection must be owned by the account
   * making the request.
   *
   * @example
   * ```ts
   * const post = await client.collections.posts.remove(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  remove(
    collectionMark: string,
    postId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostRemoveResponse> {
    return this._client.delete(`/collections/${collectionMark}/posts/${postId}`, options);
  }
}

/**
 * The full properties of a collection, for rendering a single collection somewhere
 * where you can afford to show all the items in the collection.
 */
export interface PostAddResponse extends Shared.CommonProperties {
  items: Array<PostAddResponse.Item>;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: Shared.ProfileReference;

  /**
   * A polymorphic identifier which is either a raw ID, a slug or both values
   * combined and separated by a hyphen. This allows endpoints to respond to varying
   * forms of a resource's ID which may be present in different app contexts. For
   * example, a slug may be used in a URL but raw IDs are often exposed as part of
   * API responses or in certain endpoint parameters. This type allows flexibility in
   * user experience as well as the API surface while ensuring performance during
   * database queries and other operations.
   *
   * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
   * `top-10-movies-thread`, Storyden will understand both the forms:
   * `cc5lnd2s1s4652adtu50-top-10-movies-thread` or `cc5lnd2s1s4652adtu50` or
   * `top-10-movies-thread` as the identifier for that thread.
   *
   * Marks are only ever used on the read path as they are a derivative data type and
   * are not stored in the database as-is, while IDs and slugs are. The write path
   * typically exposes slugs as writable and IDs as immutable.
   */
  slug: string;

  description?: string;
}

export namespace PostAddResponse {
  export interface Item extends Shared.CommonProperties {
    /**
     * The time that the item was added to the collection.
     */
    added_at: string;

    item:
      | Shared.DatagraphItemPost
      | Item.DatagraphItemThread
      | Shared.DatagraphItemReply
      | Shared.DatagraphItemNode
      | Shared.DatagraphItemProfile;

    membership_type: 'normal' | 'submission_review' | 'submission_accepted';

    /**
     * A minimal reference to an account.
     */
    owner: Shared.ProfileReference;

    /**
     * For recommendations and other uses, only available when a Semdex is configured
     * for content indexing and contextual relativity scoring.
     */
    relevance_score?: number;
  }

  export namespace Item {
    export interface DatagraphItemThread {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      ref: EventsAPI.Thread;
    }
  }
}

/**
 * The full properties of a collection, for rendering a single collection somewhere
 * where you can afford to show all the items in the collection.
 */
export interface PostRemoveResponse extends Shared.CommonProperties {
  items: Array<PostRemoveResponse.Item>;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: Shared.ProfileReference;

  /**
   * A polymorphic identifier which is either a raw ID, a slug or both values
   * combined and separated by a hyphen. This allows endpoints to respond to varying
   * forms of a resource's ID which may be present in different app contexts. For
   * example, a slug may be used in a URL but raw IDs are often exposed as part of
   * API responses or in certain endpoint parameters. This type allows flexibility in
   * user experience as well as the API surface while ensuring performance during
   * database queries and other operations.
   *
   * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
   * `top-10-movies-thread`, Storyden will understand both the forms:
   * `cc5lnd2s1s4652adtu50-top-10-movies-thread` or `cc5lnd2s1s4652adtu50` or
   * `top-10-movies-thread` as the identifier for that thread.
   *
   * Marks are only ever used on the read path as they are a derivative data type and
   * are not stored in the database as-is, while IDs and slugs are. The write path
   * typically exposes slugs as writable and IDs as immutable.
   */
  slug: string;

  description?: string;
}

export namespace PostRemoveResponse {
  export interface Item extends Shared.CommonProperties {
    /**
     * The time that the item was added to the collection.
     */
    added_at: string;

    item:
      | Shared.DatagraphItemPost
      | Item.DatagraphItemThread
      | Shared.DatagraphItemReply
      | Shared.DatagraphItemNode
      | Shared.DatagraphItemProfile;

    membership_type: 'normal' | 'submission_review' | 'submission_accepted';

    /**
     * A minimal reference to an account.
     */
    owner: Shared.ProfileReference;

    /**
     * For recommendations and other uses, only available when a Semdex is configured
     * for content indexing and contextual relativity scoring.
     */
    relevance_score?: number;
  }

  export namespace Item {
    export interface DatagraphItemThread {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      ref: EventsAPI.Thread;
    }
  }
}

export declare namespace Posts {
  export { type PostAddResponse as PostAddResponse, type PostRemoveResponse as PostRemoveResponse };
}
