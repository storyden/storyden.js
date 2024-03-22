// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import { isRequestOptions } from 'Storyden/core';
import * as ItemsAPI from 'Storyden/resources/items/items';
import * as AssetsAPI from 'Storyden/resources/items/assets';

export class Items extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);

  /**
   * Create a item to represent a piece of structured data such as an item in a video
   * game, an article of clothing, a product in a store, etc.
   */
  create(body: ItemCreateParams, options?: Core.RequestOptions): Core.APIPromise<ItemCreateResponse> {
    return this._client.post('/v1/items', { body, ...options });
  }

  /**
   * Get a item by its URL slug.
   */
  retrieve(itemSlug: string, options?: Core.RequestOptions): Core.APIPromise<ItemRetrieveResponse> {
    return this._client.get(`/v1/items/${itemSlug}`, options);
  }

  /**
   * Update a item.
   */
  update(
    itemSlug: string,
    body?: ItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemUpdateResponse>;
  update(itemSlug: string, options?: Core.RequestOptions): Core.APIPromise<ItemUpdateResponse>;
  update(
    itemSlug: string,
    body: ItemUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(itemSlug, {}, body);
    }
    return this._client.patch(`/v1/items/${itemSlug}`, { body, ...options });
  }

  /**
   * List all items using the filtering options.
   */
  list(query?: ItemListParams, options?: Core.RequestOptions): Core.APIPromise<ItemListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ItemListResponse>;
  list(
    query: ItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/items', { query, ...options });
  }

  /**
   * Delete an item.
   */
  delete(itemSlug: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/items/${itemSlug}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update the visibility of an item.
   */
  visibility(
    itemSlug: string,
    body: ItemVisibilityParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemVisibilityResponse> {
    return this._client.patch(`/v1/items/${itemSlug}/visibility`, { body, ...options });
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
export interface ItemCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ItemCreateResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: ItemCreateResponse.Owner;

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
  link?: ItemCreateResponse.Link;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace ItemCreateResponse {
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
 * Represents an item with the parent cluster information included. Used by schemas
 * that only want a single item along with its cluster information.
 */
export interface ItemRetrieveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ItemRetrieveResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: ItemRetrieveResponse.Owner;

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

  recomentations: Array<ItemRetrieveResponse.Recomentation>;

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
  link?: ItemRetrieveResponse.Link;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace ItemRetrieveResponse {
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

  export interface Recomentation {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    kind: 'thread' | 'reply' | 'cluster' | 'item' | 'link';

    name: string;

    slug: string;

    description?: string;
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
export interface ItemUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ItemUpdateResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: ItemUpdateResponse.Owner;

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
  link?: ItemUpdateResponse.Link;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace ItemUpdateResponse {
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

export interface ItemListResponse {
  current_page: number;

  /**
   * A list of items where each item includes all the information about its parent
   * cluster too. For use with APIs that want to provide a list of items that may be
   * part of different clusters.
   */
  items: Array<ItemListResponse.Item>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace ItemListResponse {
  /**
   * Represents an item with the parent cluster information included. Used by schemas
   * that only want a single item along with its cluster information.
   */
  export interface Item {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Item.Asset>;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    name: string;

    /**
     * A minimal reference to an account.
     */
    owner: Item.Owner;

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

    recomentations: Array<Item.Recomentation>;

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
    link?: Item.Link;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
  }

  export namespace Item {
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

    export interface Recomentation {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      kind: 'thread' | 'reply' | 'cluster' | 'item' | 'link';

      name: string;

      slug: string;

      description?: string;
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
export interface ItemVisibilityResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ItemVisibilityResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: ItemVisibilityResponse.Owner;

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
  link?: ItemVisibilityResponse.Link;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace ItemVisibilityResponse {
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

export interface ItemCreateParams {
  description: string;

  name: string;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  slug: string;

  asset_ids?: Array<string>;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content?: string;

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
  properties?: Record<string, unknown>;

  /**
   * A web address
   */
  url?: string;

  visibility?: 'draft' | 'review' | 'published';
}

export interface ItemUpdateParams {
  asset_ids?: Array<string>;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content?: string;

  description?: string;

  name?: string;

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
  properties?: Record<string, unknown>;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  slug?: string;

  /**
   * A web address
   */
  url?: string;
}

export interface ItemListParams {
  /**
   * Search query string.
   */
  q?: string;

  /**
   * Filter clusters with specific visibility values. Note that by default, only
   * published clusters are returned. When 'draft' is specified, only drafts owned by
   * the requesting account are included. When 'review' is specified, the request
   * will fail if the requesting account is not an administrator.
   */
  visibility?: Array<'draft' | 'review' | 'published'>;
}

export interface ItemVisibilityParams {
  visibility: 'draft' | 'review' | 'published';
}

export namespace Items {
  export import ItemCreateResponse = ItemsAPI.ItemCreateResponse;
  export import ItemRetrieveResponse = ItemsAPI.ItemRetrieveResponse;
  export import ItemUpdateResponse = ItemsAPI.ItemUpdateResponse;
  export import ItemListResponse = ItemsAPI.ItemListResponse;
  export import ItemVisibilityResponse = ItemsAPI.ItemVisibilityResponse;
  export import ItemCreateParams = ItemsAPI.ItemCreateParams;
  export import ItemUpdateParams = ItemsAPI.ItemUpdateParams;
  export import ItemListParams = ItemsAPI.ItemListParams;
  export import ItemVisibilityParams = ItemsAPI.ItemVisibilityParams;
  export import Assets = AssetsAPI.Assets;
  export import AssetAddResponse = AssetsAPI.AssetAddResponse;
  export import AssetRemoveResponse = AssetsAPI.AssetRemoveResponse;
}
