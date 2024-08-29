// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AssetsAPI from './assets';

export class Assets extends APIResource {
  /**
   * Add an asset to a node.
   */
  add(
    nodeSlug: string,
    assetId: string,
    params?: AssetAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAddResponse>;
  add(nodeSlug: string, assetId: string, options?: Core.RequestOptions): Core.APIPromise<AssetAddResponse>;
  add(
    nodeSlug: string,
    assetId: string,
    params: AssetAddParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAddResponse> {
    if (isRequestOptions(params)) {
      return this.add(nodeSlug, assetId, {}, params);
    }
    const { content_fill_rule, node_content_fill_target } = params;
    return this._client.put(`/v1/nodes/${nodeSlug}/assets/${assetId}`, {
      query: { content_fill_rule, node_content_fill_target },
      ...options,
    });
  }

  /**
   * Remove an asset from a node.
   */
  remove(
    nodeSlug: string,
    assetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetRemoveResponse> {
    return this._client.delete(`/v1/nodes/${nodeSlug}/assets/${assetId}`, options);
  }
}

/**
 * A node is a text document with children and assets. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
 * and they also have their own content.
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

  /**
   * Arbitrary metadata for the resource.
   */
  meta: Record<string, unknown>;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: AssetAddResponse.Owner;

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
   * A minimal object used to refer to a link without sending too much data.
   */
  link?: AssetAddResponse.Link;

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
  parent?: AssetAddResponse.Parent;

  /**
   * For recommendations and other uses, only available when a Semdex is configured
   * for content indexing and contextual relativity scoring.
   */
  relevance_score?: number;
}

export namespace AssetAddResponse {
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
   * A minimal object used to refer to a link without sending too much data.
   */
  export interface Link {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    domain: string;

    slug: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * A web address
     */
    url: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    description?: string;

    favicon_image?: Link.FaviconImage;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    primary_image?: Link.PrimaryImage;

    title?: string;
  }

  export namespace Link {
    export interface FaviconImage {
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

    export interface PrimaryImage {
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
     * A minimal object used to refer to a link without sending too much data.
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
     * A minimal object used to refer to a link without sending too much data.
     */
    export interface Link {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      domain: string;

      slug: string;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * A web address
       */
      url: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      description?: string;

      favicon_image?: Link.FaviconImage;

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;

      primary_image?: Link.PrimaryImage;

      title?: string;
    }

    export namespace Link {
      export interface FaviconImage {
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

      export interface PrimaryImage {
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
 * A node is a text document with children and assets. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
 * and they also have their own content.
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

  /**
   * Arbitrary metadata for the resource.
   */
  meta: Record<string, unknown>;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: AssetRemoveResponse.Owner;

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
   * A minimal object used to refer to a link without sending too much data.
   */
  link?: AssetRemoveResponse.Link;

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
  parent?: AssetRemoveResponse.Parent;

  /**
   * For recommendations and other uses, only available when a Semdex is configured
   * for content indexing and contextual relativity scoring.
   */
  relevance_score?: number;
}

export namespace AssetRemoveResponse {
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
   * A minimal object used to refer to a link without sending too much data.
   */
  export interface Link {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    domain: string;

    slug: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * A web address
     */
    url: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    description?: string;

    favicon_image?: Link.FaviconImage;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    primary_image?: Link.PrimaryImage;

    title?: string;
  }

  export namespace Link {
    export interface FaviconImage {
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

    export interface PrimaryImage {
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
     * A minimal object used to refer to a link without sending too much data.
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
     * A minimal object used to refer to a link without sending too much data.
     */
    export interface Link {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      domain: string;

      slug: string;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * A web address
       */
      url: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      description?: string;

      favicon_image?: Link.FaviconImage;

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;

      primary_image?: Link.PrimaryImage;

      title?: string;
    }

    export namespace Link {
      export interface FaviconImage {
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

      export interface PrimaryImage {
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

export interface AssetAddParams {
  /**
   * Use the content extracted from the child resource to modify the target resource.
   * This can be used to populate a node from a asset or link. For example, if you
   * wanted to create a node that held the contents of a PDF file, you can upload the
   * file with a target node and a fill rule set.
   */
  content_fill_rule?: 'replace';

  /**
   * When NodeContentFillRuleQuery is used, this option must be set in order to
   * specify which node will receive content extracted from the source.
   */
  node_content_fill_target?: string;
}

export namespace Assets {
  export import AssetAddResponse = AssetsAPI.AssetAddResponse;
  export import AssetRemoveResponse = AssetsAPI.AssetRemoveResponse;
  export import AssetAddParams = AssetsAPI.AssetAddParams;
}
