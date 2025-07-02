// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as NodesAPI from './nodes';
import { NodeAddResponse, NodeRemoveResponse, Nodes } from './nodes';
import * as PostsAPI from './posts';
import { PostAddResponse, PostRemoveResponse, Posts } from './posts';
import * as EventsAPI from '../events/events';

export class Collections extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  nodes: NodesAPI.Nodes = new NodesAPI.Nodes(this._client);

  /**
   * Create a collection for curating posts under the authenticated account.
   *
   * @example
   * ```ts
   * const collection = await client.collections.create({
   *   name: 'name',
   * });
   * ```
   */
  create(
    body: CollectionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionCreateResponse> {
    return this._client.post('/collections', { body, ...options });
  }

  /**
   * Get a collection by its ID. Collections can be public or private so the response
   * will depend on which account is making the request and if the target collection
   * is public, private, owned or not owned by the account.
   *
   * @example
   * ```ts
   * const collection = await client.collections.retrieve(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   * );
   * ```
   */
  retrieve(
    collectionMark: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionRetrieveResponse> {
    return this._client.get(`/collections/${collectionMark}`, options);
  }

  /**
   * Update a collection owned by the authenticated account.
   *
   * @example
   * ```ts
   * const collection = await client.collections.update(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   * );
   * ```
   */
  update(
    collectionMark: string,
    body?: CollectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionUpdateResponse>;
  update(collectionMark: string, options?: Core.RequestOptions): Core.APIPromise<CollectionUpdateResponse>;
  update(
    collectionMark: string,
    body: CollectionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(collectionMark, {}, body);
    }
    return this._client.patch(`/collections/${collectionMark}`, { body, ...options });
  }

  /**
   * List all collections using the filtering options.
   *
   * @example
   * ```ts
   * const collections = await client.collections.list();
   * ```
   */
  list(query?: CollectionListParams, options?: Core.RequestOptions): Core.APIPromise<CollectionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CollectionListResponse>;
  list(
    query: CollectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/collections', { query, ...options });
  }

  /**
   * Delete a collection owned by the authenticated account.
   *
   * @example
   * ```ts
   * await client.collections.delete(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   * );
   * ```
   */
  delete(collectionMark: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/collections/${collectionMark}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * A collection is a group of threads owned by a user. It allows users to curate
 * their own lists of content from the site. Collections can only contain root
 * level posts (threads) with titles and slugs to link to.
 */
export interface CollectionCreateResponse extends Shared.CommonProperties {
  has_queried_item: boolean;

  item_count: number;

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

/**
 * The full properties of a collection, for rendering a single collection somewhere
 * where you can afford to show all the items in the collection.
 */
export interface CollectionRetrieveResponse extends Shared.CommonProperties {
  items: Array<CollectionRetrieveResponse.Item>;

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

export namespace CollectionRetrieveResponse {
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
 * A collection is a group of threads owned by a user. It allows users to curate
 * their own lists of content from the site. Collections can only contain root
 * level posts (threads) with titles and slugs to link to.
 */
export interface CollectionUpdateResponse extends Shared.CommonProperties {
  has_queried_item: boolean;

  item_count: number;

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

export interface CollectionListResponse {
  collections: Array<CollectionListResponse.Collection>;
}

export namespace CollectionListResponse {
  /**
   * A collection is a group of threads owned by a user. It allows users to curate
   * their own lists of content from the site. Collections can only contain root
   * level posts (threads) with titles and slugs to link to.
   */
  export interface Collection extends Shared.CommonProperties {
    has_queried_item: boolean;

    item_count: number;

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
}

export interface CollectionCreateParams {
  name: string;

  description?: string;

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
  slug?: string;
}

export interface CollectionUpdateParams {
  description?: string;

  name?: string;

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
  slug?: string;
}

export interface CollectionListParams {
  /**
   * Account handle.
   */
  account_handle?: string;

  /**
   * When specified, will include a field in the response indicating whether or not
   * the specified item is present in the collection. This saves you needing to make
   * two queries to check if an item is in a collection.
   */
  has_item?: string;
}

Collections.Posts = Posts;
Collections.Nodes = Nodes;

export declare namespace Collections {
  export {
    type CollectionCreateResponse as CollectionCreateResponse,
    type CollectionRetrieveResponse as CollectionRetrieveResponse,
    type CollectionUpdateResponse as CollectionUpdateResponse,
    type CollectionListResponse as CollectionListResponse,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionUpdateParams as CollectionUpdateParams,
    type CollectionListParams as CollectionListParams,
  };

  export {
    Posts as Posts,
    type PostAddResponse as PostAddResponse,
    type PostRemoveResponse as PostRemoveResponse,
  };

  export {
    Nodes as Nodes,
    type NodeAddResponse as NodeAddResponse,
    type NodeRemoveResponse as NodeRemoveResponse,
  };
}
