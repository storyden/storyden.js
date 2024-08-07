// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CollectionsAPI from './collections';
import * as NodesAPI from './nodes';
import * as PostsAPI from './posts';

export class Collections extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  nodes: NodesAPI.Nodes = new NodesAPI.Nodes(this._client);

  /**
   * Create a collection for curating posts under the authenticated account.
   */
  create(
    body: CollectionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionCreateResponse> {
    return this._client.post('/v1/collections', { body, ...options });
  }

  /**
   * Get a collection by its ID. Collections can be public or private so the response
   * will depend on which account is making the request and if the target collection
   * is public, private, owned or not owned by the account.
   */
  retrieve(collectionId: string, options?: Core.RequestOptions): Core.APIPromise<CollectionRetrieveResponse> {
    return this._client.get(`/v1/collections/${collectionId}`, options);
  }

  /**
   * Update a collection owned by the authenticated account.
   */
  update(
    collectionId: string,
    body?: CollectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionUpdateResponse>;
  update(collectionId: string, options?: Core.RequestOptions): Core.APIPromise<CollectionUpdateResponse>;
  update(
    collectionId: string,
    body: CollectionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CollectionUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(collectionId, {}, body);
    }
    return this._client.patch(`/v1/collections/${collectionId}`, { body, ...options });
  }

  /**
   * List all collections using the filtering options.
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
    return this._client.get('/v1/collections', { query, ...options });
  }

  /**
   * Delete a collection owned by the authenticated account.
   */
  delete(collectionId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/collections/${collectionId}`, {
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
export interface CollectionCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: CollectionCreateResponse.Owner;

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

export namespace CollectionCreateResponse {
  /**
   * A minimal reference to an account.
   */
  export interface Owner {
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
}

/**
 * The full properties of a collection, for rendering a single collection somewhere
 * where you can afford to show all the items in the collection.
 */
export interface CollectionRetrieveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: CollectionRetrieveResponse.Owner;

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

export namespace CollectionRetrieveResponse {
  /**
   * A minimal reference to an account.
   */
  export interface Owner {
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
}

/**
 * A collection is a group of threads owned by a user. It allows users to curate
 * their own lists of content from the site. Collections can only contain root
 * level posts (threads) with titles and slugs to link to.
 */
export interface CollectionUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: CollectionUpdateResponse.Owner;

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

export namespace CollectionUpdateResponse {
  /**
   * A minimal reference to an account.
   */
  export interface Owner {
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
  export interface Collection {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    name: string;

    /**
     * A minimal reference to an account.
     */
    owner: Collection.Owner;

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

  export namespace Collection {
    /**
     * A minimal reference to an account.
     */
    export interface Owner {
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
  }
}

export interface CollectionCreateParams {
  description: string;

  name: string;
}

export interface CollectionUpdateParams {
  description?: string;

  name?: string;
}

export interface CollectionListParams {
  /**
   * Account handle.
   */
  account_handle?: string;
}

export namespace Collections {
  export import CollectionCreateResponse = CollectionsAPI.CollectionCreateResponse;
  export import CollectionRetrieveResponse = CollectionsAPI.CollectionRetrieveResponse;
  export import CollectionUpdateResponse = CollectionsAPI.CollectionUpdateResponse;
  export import CollectionListResponse = CollectionsAPI.CollectionListResponse;
  export import CollectionCreateParams = CollectionsAPI.CollectionCreateParams;
  export import CollectionUpdateParams = CollectionsAPI.CollectionUpdateParams;
  export import CollectionListParams = CollectionsAPI.CollectionListParams;
  export import Posts = PostsAPI.Posts;
  export import PostAddResponse = PostsAPI.PostAddResponse;
  export import PostRemoveResponse = PostsAPI.PostRemoveResponse;
  export import Nodes = NodesAPI.Nodes;
  export import NodeAddResponse = NodesAPI.NodeAddResponse;
  export import NodeRemoveResponse = NodesAPI.NodeRemoveResponse;
}
