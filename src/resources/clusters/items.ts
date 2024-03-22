// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import * as ItemsAPI from 'Storyden/resources/clusters/items';

export class Items extends APIResource {
  /**
   * Add an item to a cluster.
   */
  add(
    clusterSlug: string,
    itemSlug: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemAddResponse> {
    return this._client.put(`/v1/clusters/${clusterSlug}/items/${itemSlug}`, options);
  }

  /**
   * Remove an item from a cluster.
   */
  remove(
    clusterSlug: string,
    itemSlug: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemRemoveResponse> {
    return this._client.delete(`/v1/clusters/${clusterSlug}/items/${itemSlug}`, options);
  }
}

/**
 * The full properties of a cluster including all items and maybe child clusters
 * (depending on what the endpoint is configured or queried to do) for rendering a
 * single cluster on a view.
 */
export interface ItemAddResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ItemAddResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: ItemAddResponse.Owner;

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

  recomentations: Array<ItemAddResponse.Recomentation>;

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
  link?: ItemAddResponse.Link;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  /**
   * A cluster is a group of items and other clusters. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Clusters can be referenced in content
   * posts and they also have their own content.
   */
  parent?: ItemAddResponse.Parent;
}

export namespace ItemAddResponse {
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

  /**
   * A cluster is a group of items and other clusters. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Clusters can be referenced in content
   * posts and they also have their own content.
   */
  export interface Parent {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Parent.Asset>;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    name: string;

    /**
     * A minimal reference to an account.
     */
    owner: Parent.Owner;

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
    link?: Parent.Link;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    parent?: unknown;
  }

  export namespace Parent {
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
}

/**
 * The full properties of a cluster including all items and maybe child clusters
 * (depending on what the endpoint is configured or queried to do) for rendering a
 * single cluster on a view.
 */
export interface ItemRemoveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ItemRemoveResponse.Asset>;

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

  recomentations: Array<ItemRemoveResponse.Recomentation>;

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
  link?: ItemRemoveResponse.Link;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  /**
   * A cluster is a group of items and other clusters. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Clusters can be referenced in content
   * posts and they also have their own content.
   */
  parent?: ItemRemoveResponse.Parent;
}

export namespace ItemRemoveResponse {
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

  /**
   * A cluster is a group of items and other clusters. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Clusters can be referenced in content
   * posts and they also have their own content.
   */
  export interface Parent {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Parent.Asset>;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    name: string;

    /**
     * A minimal reference to an account.
     */
    owner: Parent.Owner;

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
    link?: Parent.Link;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    parent?: unknown;
  }

  export namespace Parent {
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
}

export namespace Items {
  export import ItemAddResponse = ItemsAPI.ItemAddResponse;
  export import ItemRemoveResponse = ItemsAPI.ItemRemoveResponse;
}
