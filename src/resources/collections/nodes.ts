// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as NodesAPI from './nodes';

export class Nodes extends APIResource {
  /**
   * Add a node to a collection. The collection must be owned by the account making
   * the request. The node can be any published node or any node not published but
   * owned by the collection owner.
   */
  add(collectionId: string, nodeId: string, options?: Core.RequestOptions): Core.APIPromise<NodeAddResponse> {
    return this._client.put(`/v1/collections/${collectionId}/nodes/${nodeId}`, options);
  }

  /**
   * Remove a node from a collection. The collection must be owned by the account
   * making the request.
   */
  remove(
    collectionId: string,
    nodeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeRemoveResponse> {
    return this._client.delete(`/v1/collections/${collectionId}/nodes/${nodeId}`, options);
  }
}

/**
 * The full properties of a collection, for rendering a single collection somewhere
 * where you can afford to show all the items in the collection.
 */
export interface NodeAddResponse {
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
  owner: NodeAddResponse.Owner;

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

export namespace NodeAddResponse {
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
export interface NodeRemoveResponse {
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
  owner: NodeRemoveResponse.Owner;

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

export namespace NodeRemoveResponse {
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

export namespace Nodes {
  export import NodeAddResponse = NodesAPI.NodeAddResponse;
  export import NodeRemoveResponse = NodesAPI.NodeRemoveResponse;
}
