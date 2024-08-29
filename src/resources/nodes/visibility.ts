// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as VisibilityAPI from './visibility';

export class Visibility extends APIResource {
  /**
   * Update the visibility of a node. When changed, this may trigger other operations
   * such as notifications/newsletters. Changing the visibility of anything to
   * "published" is often accompanied by some other side effects.
   */
  update(
    nodeSlug: string,
    body: VisibilityUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VisibilityUpdateResponse> {
    return this._client.patch(`/v1/nodes/${nodeSlug}/visibility`, { body, ...options });
  }
}

/**
 * A node is a text document with children and assets. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
 * and they also have their own content.
 */
export interface VisibilityUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<VisibilityUpdateResponse.Asset>;

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
  owner: VisibilityUpdateResponse.Owner;

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
  link?: VisibilityUpdateResponse.Link;

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
  parent?: VisibilityUpdateResponse.Parent;

  /**
   * For recommendations and other uses, only available when a Semdex is configured
   * for content indexing and contextual relativity scoring.
   */
  relevance_score?: number;
}

export namespace VisibilityUpdateResponse {
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

export interface VisibilityUpdateParams {
  visibility: 'draft' | 'unlisted' | 'review' | 'published';
}

export namespace Visibility {
  export import VisibilityUpdateResponse = VisibilityAPI.VisibilityUpdateResponse;
  export import VisibilityUpdateParams = VisibilityAPI.VisibilityUpdateParams;
}
