// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as EventsAPI from '../events/events';

export class Nodes extends APIResource {
  /**
   * Add a node to a collection. The collection must be owned by the account making
   * the request. The node can be any published node or any node not published but
   * owned by the collection owner.
   *
   * @example
   * ```ts
   * const response = await client.collections.nodes.add(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  add(
    collectionMark: string,
    nodeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeAddResponse> {
    return this._client.put(`/collections/${collectionMark}/nodes/${nodeId}`, options);
  }

  /**
   * Remove a node from a collection. The collection must be owned by the account
   * making the request.
   *
   * @example
   * ```ts
   * const node = await client.collections.nodes.remove(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  remove(
    collectionMark: string,
    nodeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeRemoveResponse> {
    return this._client.delete(`/collections/${collectionMark}/nodes/${nodeId}`, options);
  }
}

/**
 * The full properties of a collection, for rendering a single collection somewhere
 * where you can afford to show all the items in the collection.
 */
export interface NodeAddResponse extends Shared.CommonProperties {
  items: Array<NodeAddResponse.Item>;

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

export namespace NodeAddResponse {
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
export interface NodeRemoveResponse extends Shared.CommonProperties {
  items: Array<NodeRemoveResponse.Item>;

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

export namespace NodeRemoveResponse {
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

export declare namespace Nodes {
  export { type NodeAddResponse as NodeAddResponse, type NodeRemoveResponse as NodeRemoveResponse };
}
