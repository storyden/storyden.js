// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Nodes extends APIResource {
  /**
   * Remove a node from its parent node and back to the top level.
   *
   * @example
   * ```ts
   * const response = await client.nodes.nodes.removeChild(
   *   'cc5lnd2s1s4652adtu50',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  removeChild(
    nodeSlug: string,
    nodeSlugChild: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeRemoveChildResponse> {
    return this._client.delete(`/nodes/${nodeSlug}/nodes/${nodeSlugChild}`, options);
  }

  /**
   * Set a node's parent to the specified node
   *
   * @example
   * ```ts
   * const response = await client.nodes.nodes.setParent(
   *   'cc5lnd2s1s4652adtu50',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  setParent(
    nodeSlug: string,
    nodeSlugChild: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeSetParentResponse> {
    return this._client.put(`/nodes/${nodeSlug}/nodes/${nodeSlugChild}`, options);
  }
}

/**
 * A node is a text document with children and assets. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
 * and they also have their own content.
 */
export interface NodeRemoveChildResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

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

/**
 * A node is a text document with children and assets. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
 * and they also have their own content.
 */
export interface NodeSetParentResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

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

export declare namespace Nodes {
  export {
    type NodeRemoveChildResponse as NodeRemoveChildResponse,
    type NodeSetParentResponse as NodeSetParentResponse,
  };
}
