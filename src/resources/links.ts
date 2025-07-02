// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

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
   *
   * @example
   * ```ts
   * const link = await client.links.create({ url: 'url' });
   * ```
   */
  create(body: LinkCreateParams, options?: Core.RequestOptions): Core.APIPromise<LinkCreateResponse> {
    return this._client.post('/links', { body, ...options });
  }

  /**
   * Get the details for a specific link. Such as where it's been posted, which
   * resources it's linked to and how many times it's been opened.
   *
   * @example
   * ```ts
   * const link = await client.links.retrieve('link_slug');
   * ```
   */
  retrieve(linkSlug: string, options?: Core.RequestOptions): Core.APIPromise<LinkRetrieveResponse> {
    return this._client.get(`/links/${linkSlug}`, options);
  }

  /**
   * List all links using the filtering options.
   *
   * @example
   * ```ts
   * const links = await client.links.list();
   * ```
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
    return this._client.get('/links', { query, ...options });
  }
}

/**
 * A minimal object used to refer to a link without sending too much data.
 */
export interface LinkCreateResponse {
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

  favicon_image?: LinkCreateResponse.FaviconImage;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  primary_image?: LinkCreateResponse.PrimaryImage;

  title?: string;
}

export namespace LinkCreateResponse {
  export interface FaviconImage {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

    height: number;

    mime_type: string;

    /**
     * The API path of the asset, conforms to the schema's GET `/assets`.
     */
    path: string;

    width: number;

    parent?: unknown;
  }

  export interface PrimaryImage {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

    height: number;

    mime_type: string;

    /**
     * The API path of the asset, conforms to the schema's GET `/assets`.
     */
    path: string;

    width: number;

    parent?: unknown;
  }
}

export interface LinkRetrieveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<LinkRetrieveResponse.Asset>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  domain: string;

  nodes: Array<LinkRetrieveResponse.Node>;

  posts: Array<LinkRetrieveResponse.Post>;

  recomentations: unknown;

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

  favicon_image?: LinkRetrieveResponse.FaviconImage;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  primary_image?: LinkRetrieveResponse.PrimaryImage;

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

    /**
     * The API path of the asset, conforms to the schema's GET `/assets`.
     */
    path: string;

    width: number;

    parent?: unknown;
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

  /**
   * A minimal object used to refer to a post without providing a lot of unnecessary
   * data such as the full content or child items.
   */
  export interface Post {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Post.Asset>;

    /**
     * A minimal reference to an account.
     */
    author: Post.Author;

    collections: Post.Collections;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    likes: Post.Likes;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Post.React>;

    /**
     * A thread's ID and optional slug separated by a dash = it's unique mark. This
     * allows endpoints to respond to varying forms of a thread's ID.
     *
     * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
     * `top-10-movies-thread`, Storyden will understand both the forms:
     * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
     * identifier for that thread.
     */
    slug: string;

    /**
     * The title of a thread.
     */
    title: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    /**
     * A short version of the post's body text for use in previews.
     */
    description?: string;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
  }

  export namespace Post {
    export interface Asset {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

      height: number;

      mime_type: string;

      /**
       * The API path of the asset, conforms to the schema's GET `/assets`.
       */
      path: string;

      width: number;

      parent?: unknown;
    }

    /**
     * A minimal reference to an account.
     */
    export interface Author {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The unique @ handle of an account.
       */
      handle: string;

      /**
       * The time the resource was created.
       */
      joined: string;

      /**
       * The account owners display name.
       */
      name: string;

      roles: Array<Author.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace Author {
      export interface Role {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * One role may be designated as a badge for the account. If ture, it should be
         * displayed prominently on the profile or in other contexts.
         */
        badge: boolean;

        colour: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        /**
         * There are two built-in roles: everyone and admin, this boolean flag is set if
         * this role is one of the default built-in roles.
         */
        default: boolean;

        name: string;

        permissions: Array<
          | 'CREATE_POST'
          | 'READ_PUBLISHED_THREADS'
          | 'CREATE_REACTION'
          | 'MANAGE_POSTS'
          | 'MANAGE_CATEGORIES'
          | 'CREATE_INVITATION'
          | 'READ_PUBLISHED_LIBRARY'
          | 'MANAGE_LIBRARY'
          | 'SUBMIT_LIBRARY_NODE'
          | 'UPLOAD_ASSET'
          | 'MANAGE_EVENTS'
          | 'LIST_PROFILES'
          | 'READ_PROFILE'
          | 'CREATE_COLLECTION'
          | 'LIST_COLLECTIONS'
          | 'READ_COLLECTION'
          | 'MANAGE_COLLECTIONS'
          | 'COLLECTION_SUBMIT'
          | 'USE_PERSONAL_ACCESS_KEYS'
          | 'MANAGE_SETTINGS'
          | 'MANAGE_SUSPENSIONS'
          | 'MANAGE_ROLES'
          | 'ADMINISTRATOR'
        >;

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
    }

    export interface Collections {
      /**
       * A boolean indicating if the account in context has collected this item.
       */
      has_collected: boolean;

      /**
       * How many collections has this item been added to?
       */
      in_collections: number;
    }

    export interface Likes {
      /**
       * A boolean indicating if the account in context has liked this item.
       */
      liked: boolean;

      /**
       * A simple count of likes for contexts where pulling the full list would be
       * overkill. For use on minimal item reference schemas.
       */
      likes: number;
    }

    export interface React {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * A minimal reference to an account.
       */
      author: React.Author;

      /**
       * A single emoji character representing a reaction. In future, this will be
       * augmented with a more fully fledged custom emoji system.
       */
      emoji: string;
    }

    export namespace React {
      /**
       * A minimal reference to an account.
       */
      export interface Author {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * The unique @ handle of an account.
         */
        handle: string;

        /**
         * The time the resource was created.
         */
        joined: string;

        /**
         * The account owners display name.
         */
        name: string;

        roles: Array<Author.Role>;

        /**
         * The time the resource was created.
         */
        suspended?: string;
      }

      export namespace Author {
        export interface Role {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * One role may be designated as a badge for the account. If ture, it should be
           * displayed prominently on the profile or in other contexts.
           */
          badge: boolean;

          colour: string;

          /**
           * The time the resource was created.
           */
          createdAt: string;

          /**
           * There are two built-in roles: everyone and admin, this boolean flag is set if
           * this role is one of the default built-in roles.
           */
          default: boolean;

          name: string;

          permissions: Array<
            | 'CREATE_POST'
            | 'READ_PUBLISHED_THREADS'
            | 'CREATE_REACTION'
            | 'MANAGE_POSTS'
            | 'MANAGE_CATEGORIES'
            | 'CREATE_INVITATION'
            | 'READ_PUBLISHED_LIBRARY'
            | 'MANAGE_LIBRARY'
            | 'SUBMIT_LIBRARY_NODE'
            | 'UPLOAD_ASSET'
            | 'MANAGE_EVENTS'
            | 'LIST_PROFILES'
            | 'READ_PROFILE'
            | 'CREATE_COLLECTION'
            | 'LIST_COLLECTIONS'
            | 'READ_COLLECTION'
            | 'MANAGE_COLLECTIONS'
            | 'COLLECTION_SUBMIT'
            | 'USE_PERSONAL_ACCESS_KEYS'
            | 'MANAGE_SETTINGS'
            | 'MANAGE_SUSPENSIONS'
            | 'MANAGE_ROLES'
            | 'ADMINISTRATOR'
          >;

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
      }
    }
  }

  export interface FaviconImage {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

    height: number;

    mime_type: string;

    /**
     * The API path of the asset, conforms to the schema's GET `/assets`.
     */
    path: string;

    width: number;

    parent?: unknown;
  }

  export interface PrimaryImage {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

    height: number;

    mime_type: string;

    /**
     * The API path of the asset, conforms to the schema's GET `/assets`.
     */
    path: string;

    width: number;

    parent?: unknown;
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

      /**
       * The API path of the asset, conforms to the schema's GET `/assets`.
       */
      path: string;

      width: number;

      parent?: unknown;
    }

    export interface PrimaryImage {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

      height: number;

      mime_type: string;

      /**
       * The API path of the asset, conforms to the schema's GET `/assets`.
       */
      path: string;

      width: number;

      parent?: unknown;
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

export declare namespace Links {
  export {
    type LinkCreateResponse as LinkCreateResponse,
    type LinkRetrieveResponse as LinkRetrieveResponse,
    type LinkListResponse as LinkListResponse,
    type LinkCreateParams as LinkCreateParams,
    type LinkListParams as LinkListParams,
  };
}
