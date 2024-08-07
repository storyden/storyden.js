// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as NodesAPI from './nodes';
import * as AssetsAPI from './assets';
import * as ChildrenAPI from './children';
import * as VisibilityAPI from './visibility';

export class Nodes extends APIResource {
  visibility: VisibilityAPI.Visibility = new VisibilityAPI.Visibility(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  children: ChildrenAPI.Children = new ChildrenAPI.Children(this._client);

  /**
   * Create a node for curating structured knowledge together.
   */
  create(body: NodeCreateParams, options?: Core.RequestOptions): Core.APIPromise<NodeCreateResponse> {
    return this._client.post('/v1/nodes', { body, ...options });
  }

  /**
   * Get a node by its URL slug.
   */
  retrieve(nodeSlug: string, options?: Core.RequestOptions): Core.APIPromise<NodeRetrieveResponse> {
    return this._client.get(`/v1/nodes/${nodeSlug}`, options);
  }

  /**
   * Update a node.
   */
  update(
    nodeSlug: string,
    body?: NodeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdateResponse>;
  update(nodeSlug: string, options?: Core.RequestOptions): Core.APIPromise<NodeUpdateResponse>;
  update(
    nodeSlug: string,
    body: NodeUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(nodeSlug, {}, body);
    }
    return this._client.patch(`/v1/nodes/${nodeSlug}`, { body, ...options });
  }

  /**
   * List nodes using the given filters. Can be used to get a full tree.
   */
  list(query?: NodeListParams, options?: Core.RequestOptions): Core.APIPromise<NodeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<NodeListResponse>;
  list(
    query: NodeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/nodes', { query, ...options });
  }

  /**
   * Delete a node and move all children to its parent or root.
   */
  delete(
    nodeSlug: string,
    params?: NodeDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeDeleteResponse>;
  delete(nodeSlug: string, options?: Core.RequestOptions): Core.APIPromise<NodeDeleteResponse>;
  delete(
    nodeSlug: string,
    params: NodeDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(nodeSlug, {}, params);
    }
    const { target_node } = params;
    return this._client.delete(`/v1/nodes/${nodeSlug}`, { query: { target_node }, ...options });
  }
}

/**
 * A node is a text document with children and assets. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
 * and they also have their own content.
 */
export interface NodeCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<NodeCreateResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: Record<string, unknown>;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: NodeCreateResponse.Owner;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  slug: string;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  visibility: 'draft' | 'unlisted' | 'review' | 'published';

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
  link?: NodeCreateResponse.Link;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  /**
   * A node is a text document with children and assets. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
   * and they also have their own content.
   */
  parent?: NodeCreateResponse.Parent;

  /**
   * For recommendations and other uses, only available when a Semdex is configured
   * for content indexing and contextual relativity scoring.
   */
  relevance_score?: number;
}

export namespace NodeCreateResponse {
  export interface Asset {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

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

      filename: string;

      height: number;

      mime_type: string;

      url: string;

      width: number;
    }
  }

  /**
   * A node is a text document with children and assets. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
   * and they also have their own content.
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

    /**
     * Arbitrary metadata for the resource.
     */
    meta: Record<string, unknown>;

    name: string;

    /**
     * A minimal reference to an account.
     */
    owner: Parent.Owner;

    /**
     * A URL-safe slug for uniquely identifying resources.
     */
    slug: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    visibility: 'draft' | 'unlisted' | 'review' | 'published';

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

    /**
     * For recommendations and other uses, only available when a Semdex is configured
     * for content indexing and contextual relativity scoring.
     */
    relevance_score?: number;
  }

  export namespace Parent {
    export interface Asset {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

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

        filename: string;

        height: number;

        mime_type: string;

        url: string;

        width: number;
      }
    }
  }
}

/**
 * The full properties of a node including all child nodes.
 */
export interface NodeRetrieveResponse {}

/**
 * A node is a text document with children and assets. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
 * and they also have their own content.
 */
export interface NodeUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<NodeUpdateResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: Record<string, unknown>;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: NodeUpdateResponse.Owner;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  slug: string;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  visibility: 'draft' | 'unlisted' | 'review' | 'published';

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
  link?: NodeUpdateResponse.Link;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  /**
   * A node is a text document with children and assets. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
   * and they also have their own content.
   */
  parent?: NodeUpdateResponse.Parent;

  /**
   * For recommendations and other uses, only available when a Semdex is configured
   * for content indexing and contextual relativity scoring.
   */
  relevance_score?: number;
}

export namespace NodeUpdateResponse {
  export interface Asset {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

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

      filename: string;

      height: number;

      mime_type: string;

      url: string;

      width: number;
    }
  }

  /**
   * A node is a text document with children and assets. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
   * and they also have their own content.
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

    /**
     * Arbitrary metadata for the resource.
     */
    meta: Record<string, unknown>;

    name: string;

    /**
     * A minimal reference to an account.
     */
    owner: Parent.Owner;

    /**
     * A URL-safe slug for uniquely identifying resources.
     */
    slug: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    visibility: 'draft' | 'unlisted' | 'review' | 'published';

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

    /**
     * For recommendations and other uses, only available when a Semdex is configured
     * for content indexing and contextual relativity scoring.
     */
    relevance_score?: number;
  }

  export namespace Parent {
    export interface Asset {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

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

        filename: string;

        height: number;

        mime_type: string;

        url: string;

        width: number;
      }
    }
  }
}

export interface NodeListResponse {
  current_page: number;

  nodes: Array<NodeListResponse.Node>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace NodeListResponse {
  /**
   * The full properties of a node including all child nodes.
   */
  export interface Node {}
}

export interface NodeDeleteResponse {
  /**
   * A node is a text document with children and assets. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
   * and they also have their own content.
   */
  destination?: NodeDeleteResponse.Destination;
}

export namespace NodeDeleteResponse {
  /**
   * A node is a text document with children and assets. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
   * and they also have their own content.
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

    /**
     * Arbitrary metadata for the resource.
     */
    meta: Record<string, unknown>;

    name: string;

    /**
     * A minimal reference to an account.
     */
    owner: Destination.Owner;

    /**
     * A URL-safe slug for uniquely identifying resources.
     */
    slug: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    visibility: 'draft' | 'unlisted' | 'review' | 'published';

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
     * A node is a text document with children and assets. It serves as an abstraction
     * for grouping structured data objects. It can represent things such as brands,
     * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
     * and they also have their own content.
     */
    parent?: Destination.Parent;

    /**
     * For recommendations and other uses, only available when a Semdex is configured
     * for content indexing and contextual relativity scoring.
     */
    relevance_score?: number;
  }

  export namespace Destination {
    export interface Asset {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

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

        filename: string;

        height: number;

        mime_type: string;

        url: string;

        width: number;
      }
    }

    /**
     * A node is a text document with children and assets. It serves as an abstraction
     * for grouping structured data objects. It can represent things such as brands,
     * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
     * and they also have their own content.
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

      /**
       * Arbitrary metadata for the resource.
       */
      meta: Record<string, unknown>;

      name: string;

      /**
       * A minimal reference to an account.
       */
      owner: Parent.Owner;

      /**
       * A URL-safe slug for uniquely identifying resources.
       */
      slug: string;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      visibility: 'draft' | 'unlisted' | 'review' | 'published';

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

      /**
       * For recommendations and other uses, only available when a Semdex is configured
       * for content indexing and contextual relativity scoring.
       */
      relevance_score?: number;
    }

    export namespace Parent {
      export interface Asset {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

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

          filename: string;

          height: number;

          mime_type: string;

          url: string;

          width: number;
        }
      }
    }
  }
}

export interface NodeCreateParams {
  name: string;

  asset_ids?: Array<string>;

  asset_sources?: Array<string>;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: Record<string, unknown>;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  parent?: string;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  slug?: string;

  /**
   * A web address
   */
  url?: string;

  visibility?: 'draft' | 'unlisted' | 'review' | 'published';
}

export interface NodeUpdateParams {
  asset_ids?: Array<string>;

  asset_sources?: Array<string>;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: Record<string, unknown>;

  name?: string;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  parent?: string;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  slug?: string;

  /**
   * A web address
   */
  url?: string;
}

export interface NodeListParams {
  /**
   * Show only results owned by this account.
   */
  author?: string;

  /**
   * When set to a positive value, the nodes in the response will include all child
   * nodes up to the specified depth. When set to zero, then if the request includes
   * a node ID only that node will be returned, otherwise only top-level (root) nodes
   * will be returned.
   */
  depth?: string;

  /**
   * List this node and all child nodes.
   */
  node_id?: string;

  /**
   * Pagination query parameters.
   */
  page?: string;

  /**
   * Search query string.
   */
  q?: string;

  /**
   * Filter nodes with specific visibility values. Note that by default, only
   * published nodes are returned. When 'draft' is specified, only drafts owned by
   * the requesting account are included. When 'review' is specified, the request
   * will fail if the requesting account is not an administrator.
   */
  visibility?: Array<'draft' | 'unlisted' | 'review' | 'published'>;
}

export interface NodeDeleteParams {
  /**
   * If set, child nodes will be moved to the target node. If not set, child nodes
   * will be moved to the root.
   */
  target_node?: string;
}

export namespace Nodes {
  export import NodeCreateResponse = NodesAPI.NodeCreateResponse;
  export import NodeRetrieveResponse = NodesAPI.NodeRetrieveResponse;
  export import NodeUpdateResponse = NodesAPI.NodeUpdateResponse;
  export import NodeListResponse = NodesAPI.NodeListResponse;
  export import NodeDeleteResponse = NodesAPI.NodeDeleteResponse;
  export import NodeCreateParams = NodesAPI.NodeCreateParams;
  export import NodeUpdateParams = NodesAPI.NodeUpdateParams;
  export import NodeListParams = NodesAPI.NodeListParams;
  export import NodeDeleteParams = NodesAPI.NodeDeleteParams;
  export import Visibility = VisibilityAPI.Visibility;
  export import VisibilityUpdateResponse = VisibilityAPI.VisibilityUpdateResponse;
  export import VisibilityUpdateParams = VisibilityAPI.VisibilityUpdateParams;
  export import Assets = AssetsAPI.Assets;
  export import AssetAddResponse = AssetsAPI.AssetAddResponse;
  export import AssetRemoveResponse = AssetsAPI.AssetRemoveResponse;
  export import AssetAddParams = AssetsAPI.AssetAddParams;
  export import Children = ChildrenAPI.Children;
  export import ChildRemoveParentResponse = ChildrenAPI.ChildRemoveParentResponse;
  export import ChildSetParentResponse = ChildrenAPI.ChildSetParentResponse;
}
