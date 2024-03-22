// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import { isRequestOptions } from 'Storyden/core';
import { Clusters } from './clusters';
import * as ClustersAPI from 'Storyden/resources/clusters/clusters';
import * as AssetsAPI from 'Storyden/resources/clusters/assets';
import * as ItemsAPI from 'Storyden/resources/clusters/items';

export class Clusters extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  clusters: Clusters = new Clusters(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Create a cluster for grouping items and other clusters together.
   */
  create(body: ClusterCreateParams, options?: Core.RequestOptions): Core.APIPromise<ClusterCreateResponse> {
    return this._client.post('/v1/clusters', { body, ...options });
  }

  /**
   * Get a cluster by its URL slug.
   */
  retrieve(clusterSlug: string, options?: Core.RequestOptions): Core.APIPromise<ClusterRetrieveResponse> {
    return this._client.get(`/v1/clusters/${clusterSlug}`, options);
  }

  /**
   * Update a cluster.
   */
  update(
    clusterSlug: string,
    body?: ClusterUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClusterUpdateResponse>;
  update(clusterSlug: string, options?: Core.RequestOptions): Core.APIPromise<ClusterUpdateResponse>;
  update(
    clusterSlug: string,
    body: ClusterUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClusterUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(clusterSlug, {}, body);
    }
    return this._client.patch(`/v1/clusters/${clusterSlug}`, { body, ...options });
  }

  /**
   * List clusters using the given filters. Can be used to get a full tree.
   */
  list(query?: ClusterListParams, options?: Core.RequestOptions): Core.APIPromise<ClusterListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ClusterListResponse>;
  list(
    query: ClusterListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClusterListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/clusters', { query, ...options });
  }

  /**
   * Delete a cluster and move all children to its parent or root.
   */
  remove(
    clusterSlug: string,
    params?: ClusterRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClusterRemoveResponse>;
  remove(clusterSlug: string, options?: Core.RequestOptions): Core.APIPromise<ClusterRemoveResponse>;
  remove(
    clusterSlug: string,
    params: ClusterRemoveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClusterRemoveResponse> {
    if (isRequestOptions(params)) {
      return this.remove(clusterSlug, {}, params);
    }
    const { move_child_clusters, move_child_items, target_cluster } = params;
    return this._client.delete(`/v1/clusters/${clusterSlug}`, {
      query: { move_child_clusters, move_child_items, target_cluster },
      ...options,
    });
  }

  /**
   * Update the visibility of a cluster. When changed, this may trigger other
   * operations such as notifications/newsletters. Changing the visibility of
   * anything to "published" is often accompanied by some other side effects.
   */
  visibilityUpdate(
    clusterSlug: string,
    body: ClusterVisibilityUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClusterVisibilityUpdateResponse> {
    return this._client.patch(`/v1/clusters/${clusterSlug}/visibility`, { body, ...options });
  }
}

/**
 * A cluster is a group of items and other clusters. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Clusters can be referenced in content
 * posts and they also have their own content.
 */
export interface ClusterCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ClusterCreateResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: ClusterCreateResponse.Owner;

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
  link?: ClusterCreateResponse.Link;

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
  parent?: ClusterCreateResponse.Parent;
}

export namespace ClusterCreateResponse {
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
export interface ClusterRetrieveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ClusterRetrieveResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: ClusterRetrieveResponse.Owner;

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

  recomentations: Array<ClusterRetrieveResponse.Recomentation>;

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
  link?: ClusterRetrieveResponse.Link;

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
  parent?: ClusterRetrieveResponse.Parent;
}

export namespace ClusterRetrieveResponse {
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
 * A cluster is a group of items and other clusters. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Clusters can be referenced in content
 * posts and they also have their own content.
 */
export interface ClusterUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ClusterUpdateResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: ClusterUpdateResponse.Owner;

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
  link?: ClusterUpdateResponse.Link;

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
  parent?: ClusterUpdateResponse.Parent;
}

export namespace ClusterUpdateResponse {
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

export interface ClusterListResponse {
  clusters: Array<ClusterListResponse.Cluster>;

  current_page: number;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace ClusterListResponse {
  /**
   * A cluster is a group of items and other clusters. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Clusters can be referenced in content
   * posts and they also have their own content.
   */
  export interface Cluster {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Cluster.Asset>;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    name: string;

    /**
     * A minimal reference to an account.
     */
    owner: Cluster.Owner;

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
    link?: Cluster.Link;

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
    parent?: Cluster.Parent;
  }

  export namespace Cluster {
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
}

export interface ClusterRemoveResponse {
  /**
   * A cluster is a group of items and other clusters. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Clusters can be referenced in content
   * posts and they also have their own content.
   */
  destination?: ClusterRemoveResponse.Destination;
}

export namespace ClusterRemoveResponse {
  /**
   * A cluster is a group of items and other clusters. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Clusters can be referenced in content
   * posts and they also have their own content.
   */
  export interface Destination {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Destination.Asset>;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    name: string;

    /**
     * A minimal reference to an account.
     */
    owner: Destination.Owner;

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
    link?: Destination.Link;

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
    parent?: Destination.Parent;
  }

  export namespace Destination {
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
}

/**
 * A cluster is a group of items and other clusters. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Clusters can be referenced in content
 * posts and they also have their own content.
 */
export interface ClusterVisibilityUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ClusterVisibilityUpdateResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: ClusterVisibilityUpdateResponse.Owner;

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
  link?: ClusterVisibilityUpdateResponse.Link;

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
  parent?: ClusterVisibilityUpdateResponse.Parent;
}

export namespace ClusterVisibilityUpdateResponse {
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

export interface ClusterCreateParams {
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
   * A URL-safe slug for uniquely identifying resources.
   */
  parent?: string;

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

export interface ClusterUpdateParams {
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
   * A URL-safe slug for uniquely identifying resources.
   */
  parent?: string;

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

export interface ClusterListParams {
  /**
   * Show only results owned by this account.
   */
  author?: string;

  /**
   * List this cluster and all child clusters.
   */
  cluster_id?: string;

  /**
   * Pagination query parameters.
   */
  page?: string;

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

export interface ClusterRemoveParams {
  /**
   * Whether or not to move child clusters.
   */
  move_child_clusters?: boolean;

  /**
   * Whether or not to move child items.
   */
  move_child_items?: boolean;

  /**
   * Where to move child clusters and items.
   */
  target_cluster?: string;
}

export interface ClusterVisibilityUpdateParams {
  visibility: 'draft' | 'review' | 'published';
}

export namespace Clusters {
  export import ClusterCreateResponse = ClustersAPI.ClusterCreateResponse;
  export import ClusterRetrieveResponse = ClustersAPI.ClusterRetrieveResponse;
  export import ClusterUpdateResponse = ClustersAPI.ClusterUpdateResponse;
  export import ClusterListResponse = ClustersAPI.ClusterListResponse;
  export import ClusterRemoveResponse = ClustersAPI.ClusterRemoveResponse;
  export import ClusterVisibilityUpdateResponse = ClustersAPI.ClusterVisibilityUpdateResponse;
  export import ClusterCreateParams = ClustersAPI.ClusterCreateParams;
  export import ClusterUpdateParams = ClustersAPI.ClusterUpdateParams;
  export import ClusterListParams = ClustersAPI.ClusterListParams;
  export import ClusterRemoveParams = ClustersAPI.ClusterRemoveParams;
  export import ClusterVisibilityUpdateParams = ClustersAPI.ClusterVisibilityUpdateParams;
  export import Assets = AssetsAPI.Assets;
  export import AssetAddResponse = AssetsAPI.AssetAddResponse;
  export import AssetRemoveResponse = AssetsAPI.AssetRemoveResponse;
  export import Clusters = ClustersAPI.Clusters;
  export import ClusterSetParentResponse = ClustersAPI.ClusterSetParentResponse;
  export import Items = ItemsAPI.Items;
  export import ItemAddResponse = ItemsAPI.ItemAddResponse;
  export import ItemRemoveResponse = ItemsAPI.ItemRemoveResponse;
}
