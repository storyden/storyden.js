// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import * as ItemsAPI from 'Storyden/resources/collections/items';

export class Items extends APIResource {
  /**
   * Remove a post from a collection. The collection must be owned by the account
   * making the request.
   */
  remove(
    collectionId: string,
    postId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemRemoveResponse> {
    return this._client.delete(`/v1/collections/${collectionId}/items/${postId}`, options);
  }
}

/**
 * A collection is a group of threads owned by a user. It allows users to curate
 * their own lists of content from the site. Collections can only contain root
 * level posts (threads) with titles and slugs to link to.
 */
export interface ItemRemoveResponse {
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
  owner: ItemRemoveResponse.Owner;

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

export namespace ItemRemoveResponse {
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

export namespace Items {
  export import ItemRemoveResponse = ItemsAPI.ItemRemoveResponse;
}
