// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as LinksAPI from './links';

export class Links extends APIResource {
  /**
   * Add a link to the community bookmarks. This will also scrape the content at the
   * site the link points to, if possible. If the submitted link is an invalid link
   * for whatever reason (invalid URL structure or page is dead) then the API will
   * fail. The metadata for the link is indexed on success.
   *
   * If the submitted link already exists it will be an idempotent operation, unless
   * the body contains additional metadata. In these cases, the link's metadata will
   * be updated with the new metadata and the URL is unchanged.
   *
   * When a link is submitted, it is first "cleaned" to remove any fragments.
   */
  create(body: LinkCreateParams, options?: Core.RequestOptions): Core.APIPromise<LinkCreateResponse> {
    return this._client.post('/v1/links', { body, ...options });
  }

  /**
   * Get the details for a specific link. Such as where it's been posted, which
   * resources it's linked to and how many times it's been opened.
   */
  retrieve(linkSlug: string, options?: Core.RequestOptions): Core.APIPromise<LinkRetrieveResponse> {
    return this._client.get(`/v1/links/${linkSlug}`, options);
  }

  /**
   * List all links using the filtering options.
   */
  list(query?: LinkListParams, options?: Core.RequestOptions): Core.APIPromise<LinkListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<LinkListResponse>;
  list(
    query: LinkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/links', { query, ...options });
  }
}

/**
 * A web address with content information such as title, description, etc.
 */
export interface LinkCreateResponse {
  assets: Array<LinkCreateResponse.Asset>;

  domain: string;

  slug: string;

  /**
   * A web address
   */
  url: string;

  description?: string;

  title?: string;
}

export namespace LinkCreateResponse {
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

export interface LinkRetrieveResponse {
  assets: Array<LinkRetrieveResponse.Asset>;

  collections: Array<LinkRetrieveResponse.Collection>;

  domain: string;

  nodes: Array<LinkRetrieveResponse.Node>;

  posts: Array<LinkRetrieveResponse.Post>;

  recomentations: Array<LinkRetrieveResponse.Recomentation>;

  slug: string;

  /**
   * A web address
   */
  url: string;

  description?: string;

  title?: string;
}

export namespace LinkRetrieveResponse {
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
   * A collection is a group of threads owned by a user. It allows users to curate
   * their own lists of content from the site. Collections can only contain root
   * level posts (threads) with titles and slugs to link to.
   */
  export interface Collection {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    name: string;

    /**
     * A minimal reference to an account.
     */
    owner: Collection.Owner;

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

  export namespace Collection {
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
  }

  /**
   * A node is a text document with children and assets. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
   * and they also have their own content.
   */
  export interface Node {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Node.Asset>;

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
    owner: Node.Owner;

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
    link?: Node.Link;

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
    parent?: Node.Parent;

    /**
     * For recommendations and other uses, only available when a Semdex is configured
     * for content indexing and contextual relativity scoring.
     */
    relevance_score?: number;
  }

  export namespace Node {
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
   * A minimal object used to refer to a post without providing a lot of unnecessary
   * data such as the full content or child items.
   */
  export interface Post {
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

  export interface Recomentation {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Recomentation.Asset>;

    kind: 'post' | 'node' | 'profile';

    name: string;

    slug: string;

    description?: string;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: Record<string, unknown>;
  }

  export namespace Recomentation {
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

export interface LinkListResponse {
  current_page: number;

  links: Array<LinkListResponse.Link>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace LinkListResponse {
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

export interface LinkCreateParams {
  /**
   * A web address
   */
  url: string;

  description?: string;

  title?: string;
}

export interface LinkListParams {
  /**
   * Pagination query parameters.
   */
  page?: string;

  /**
   * Search query string.
   */
  q?: string;
}

export namespace Links {
  export import LinkCreateResponse = LinksAPI.LinkCreateResponse;
  export import LinkRetrieveResponse = LinksAPI.LinkRetrieveResponse;
  export import LinkListResponse = LinksAPI.LinkListResponse;
  export import LinkCreateParams = LinksAPI.LinkCreateParams;
  export import LinkListParams = LinksAPI.LinkListParams;
}
