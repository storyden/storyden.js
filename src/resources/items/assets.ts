// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import * as AssetsAPI from 'Storyden/resources/items/assets';

export class Assets extends APIResource {
  /**
   * Add an asset to an item.
   */
  add(itemSlug: string, assetId: string, options?: Core.RequestOptions): Core.APIPromise<AssetAddResponse> {
    return this._client.put(`/v1/items/${itemSlug}/assets/${assetId}`, options);
  }

  /**
   * Remove an asset from an item.
   */
  remove(
    itemSlug: string,
    assetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetRemoveResponse> {
    return this._client.delete(`/v1/items/${itemSlug}/assets/${assetId}`, options);
  }
}

/**
 * An item is an arbitrary object used for indexing any kind of structured data for
 * the purposes of archival, search, documentation, products, etc. Items are
 * similar to posts in terms of data model but are semantically different when it
 * comes to purpose.
 *
 * If you were to use Storyden to run a community for a video game for example,
 * items could be used to represent actual items from the game which allows members
 * to search for them as well as reference them in posts and other content.
 */
export interface AssetAddResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<AssetAddResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: AssetAddResponse.Owner;

  /**
   * Arbitrary JSON object that can express any additional data for a resource
   * object. This is intended for client implementations to use for extending objects
   * with arbitrary information to satisfy product needs.
   *
   * For example, if you were building a book database, you could use the Properties
   * of a cluster to specify publisher information such as date of founding,
   * headquarters, size, etc. and then use the Properties of the items in that
   * cluster to specify book information such as release date, number of pages, etc.
   */
  properties: Record<string, unknown>;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  slug: string;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  visibility: 'draft' | 'review' | 'published';

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content?: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * A web address with content information such as title, description, etc.
   */
  link?: AssetAddResponse.Link;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace AssetAddResponse {
  export interface Asset {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    height: number;

    mime_type: string;

    url: string;

    width: number;
  }

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

  /**
   * A web address with content information such as title, description, etc.
   */
  export interface Link {
    assets: Array<Link.Asset>;

    domain: string;

    slug: string;

    /**
     * A web address
     */
    url: string;

    description?: string;

    title?: string;
  }

  export namespace Link {
    export interface Asset {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      height: number;

      mime_type: string;

      url: string;

      width: number;
    }
  }
}

/**
 * An item is an arbitrary object used for indexing any kind of structured data for
 * the purposes of archival, search, documentation, products, etc. Items are
 * similar to posts in terms of data model but are semantically different when it
 * comes to purpose.
 *
 * If you were to use Storyden to run a community for a video game for example,
 * items could be used to represent actual items from the game which allows members
 * to search for them as well as reference them in posts and other content.
 */
export interface AssetRemoveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<AssetRemoveResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: AssetRemoveResponse.Owner;

  /**
   * Arbitrary JSON object that can express any additional data for a resource
   * object. This is intended for client implementations to use for extending objects
   * with arbitrary information to satisfy product needs.
   *
   * For example, if you were building a book database, you could use the Properties
   * of a cluster to specify publisher information such as date of founding,
   * headquarters, size, etc. and then use the Properties of the items in that
   * cluster to specify book information such as release date, number of pages, etc.
   */
  properties: Record<string, unknown>;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  slug: string;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  visibility: 'draft' | 'review' | 'published';

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content?: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * A web address with content information such as title, description, etc.
   */
  link?: AssetRemoveResponse.Link;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace AssetRemoveResponse {
  export interface Asset {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    height: number;

    mime_type: string;

    url: string;

    width: number;
  }

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

  /**
   * A web address with content information such as title, description, etc.
   */
  export interface Link {
    assets: Array<Link.Asset>;

    domain: string;

    slug: string;

    /**
     * A web address
     */
    url: string;

    description?: string;

    title?: string;
  }

  export namespace Link {
    export interface Asset {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      height: number;

      mime_type: string;

      url: string;

      width: number;
    }
  }
}

export namespace Assets {
  export import AssetAddResponse = AssetsAPI.AssetAddResponse;
  export import AssetRemoveResponse = AssetsAPI.AssetRemoveResponse;
}
