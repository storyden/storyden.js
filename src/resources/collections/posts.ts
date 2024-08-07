// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PostsAPI from './posts';

export class Posts extends APIResource {
  /**
   * Add a post to a collection. The collection must be owned by the account making
   * the request. The post can be any published post of any kind.
   */
  add(collectionId: string, postId: string, options?: Core.RequestOptions): Core.APIPromise<PostAddResponse> {
    return this._client.put(`/v1/collections/${collectionId}/posts/${postId}`, options);
  }

  /**
   * Remove a post from a collection. The collection must be owned by the account
   * making the request.
   */
  remove(
    collectionId: string,
    postId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostRemoveResponse> {
    return this._client.delete(`/v1/collections/${collectionId}/posts/${postId}`, options);
  }
}

/**
 * The full properties of a collection, for rendering a single collection somewhere
 * where you can afford to show all the items in the collection.
 */
export interface PostAddResponse {
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
  owner: PostAddResponse.Owner;

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

export namespace PostAddResponse {
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
export interface PostRemoveResponse {
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
  owner: PostRemoveResponse.Owner;

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

export namespace PostRemoveResponse {
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

export namespace Posts {
  export import PostAddResponse = PostsAPI.PostAddResponse;
  export import PostRemoveResponse = PostsAPI.PostRemoveResponse;
}
