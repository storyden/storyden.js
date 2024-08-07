// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ChildrenAPI from './children';

export class Children extends APIResource {
  /**
   * Remove a node from its parent node and back to the top level.
   */
  removeParent(
    nodeSlug: string,
    nodeSlugChild: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChildRemoveParentResponse> {
    return this._client.delete(`/v1/nodes/${nodeSlug}/nodes/${nodeSlugChild}`, options);
  }

  /**
   * Set a node's parent to the specified node
   */
  setParent(
    nodeSlug: string,
    nodeSlugChild: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChildSetParentResponse> {
    return this._client.put(`/v1/nodes/${nodeSlug}/nodes/${nodeSlugChild}`, options);
  }
}

/**
 * A node is a text document with children and assets. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
 * and they also have their own content.
 */
export interface ChildRemoveParentResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ChildRemoveParentResponse.Asset>;

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
  owner: ChildRemoveParentResponse.Owner;

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
  link?: ChildRemoveParentResponse.Link;

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
  parent?: ChildRemoveParentResponse.Parent;

  /**
   * For recommendations and other uses, only available when a Semdex is configured
   * for content indexing and contextual relativity scoring.
   */
  relevance_score?: number;
}

export namespace ChildRemoveParentResponse {
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
 * A node is a text document with children and assets. It serves as an abstraction
 * for grouping structured data objects. It can represent things such as brands,
 * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
 * and they also have their own content.
 */
export interface ChildSetParentResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ChildSetParentResponse.Asset>;

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
  owner: ChildSetParentResponse.Owner;

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
  link?: ChildSetParentResponse.Link;

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
  parent?: ChildSetParentResponse.Parent;

  /**
   * For recommendations and other uses, only available when a Semdex is configured
   * for content indexing and contextual relativity scoring.
   */
  relevance_score?: number;
}

export namespace ChildSetParentResponse {
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

export namespace Children {
  export import ChildRemoveParentResponse = ChildrenAPI.ChildRemoveParentResponse;
  export import ChildSetParentResponse = ChildrenAPI.ChildSetParentResponse;
}
