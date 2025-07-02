// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Threads extends APIResource {
  /**
   * Create a new thread within the specified category.
   *
   * @example
   * ```ts
   * const thread = await client.threads.create({
   *   body: 'body',
   *   category: 'cc5lnd2s1s4652adtu50',
   *   title: 'Hello world!',
   *   visibility: 'draft',
   * });
   * ```
   */
  create(body: ThreadCreateParams, options?: Core.RequestOptions): Core.APIPromise<ThreadCreateResponse> {
    return this._client.post('/threads', { body, ...options });
  }

  /**
   * Get information about a thread such as its title, author, when it was created as
   * well as a list of the posts within the thread.
   *
   * @example
   * ```ts
   * const thread = await client.threads.retrieve(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   * );
   * ```
   */
  retrieve(
    threadMark: string,
    query?: ThreadRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadRetrieveResponse>;
  retrieve(threadMark: string, options?: Core.RequestOptions): Core.APIPromise<ThreadRetrieveResponse>;
  retrieve(
    threadMark: string,
    query: ThreadRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(threadMark, {}, query);
    }
    return this._client.get(`/threads/${threadMark}`, { query, ...options });
  }

  /**
   * Publish changes to a thread.
   *
   * @example
   * ```ts
   * const thread = await client.threads.update(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   * );
   * ```
   */
  update(
    threadMark: string,
    body?: ThreadUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadUpdateResponse>;
  update(threadMark: string, options?: Core.RequestOptions): Core.APIPromise<ThreadUpdateResponse>;
  update(
    threadMark: string,
    body: ThreadUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(threadMark, {}, body);
    }
    return this._client.patch(`/threads/${threadMark}`, { body, ...options });
  }

  /**
   * Get a list of all threads.
   *
   * @example
   * ```ts
   * const threads = await client.threads.list();
   * ```
   */
  list(query?: ThreadListParams, options?: Core.RequestOptions): Core.APIPromise<ThreadListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ThreadListResponse>;
  list(
    query: ThreadListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/threads', { query, ...options });
  }

  /**
   * Archive a thread using soft-delete.
   *
   * @example
   * ```ts
   * await client.threads.delete(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   * );
   * ```
   */
  delete(threadMark: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/threads/${threadMark}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Create a new post within a thread.
   *
   * @example
   * ```ts
   * const response = await client.threads.createReply(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   *   { body: 'body' },
   * );
   * ```
   */
  createReply(
    threadMark: string,
    body: ThreadCreateReplyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadCreateReplyResponse> {
    return this._client.post(`/threads/${threadMark}/replies`, { body, ...options });
  }
}

export interface ThreadCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ThreadCreateResponse.Asset>;

  /**
   * A minimal reference to an account.
   */
  author: ThreadCreateResponse.Author;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  body_links: Array<ThreadCreateResponse.BodyLink>;

  category: ThreadCreateResponse.Category;

  collections: ThreadCreateResponse.Collections;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  likes: ThreadCreateResponse.Likes;

  /**
   * Whether the thread is pinned in this category.
   */
  pinned: boolean;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<ThreadCreateResponse.React>;

  replies: ThreadCreateResponse.Replies;

  reply_status: ThreadCreateResponse.ReplyStatus;

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
   * A list of tags.
   */
  tags: Array<ThreadCreateResponse.Tag>;

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
   * The time of the last reply to the thread.
   */
  last_reply_at?: string;

  /**
   * A minimal object used to refer to a link without sending too much data.
   */
  link?: ThreadCreateResponse.Link;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace ThreadCreateResponse {
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

  /**
   * A minimal object used to refer to a link without sending too much data.
   */
  export interface BodyLink {
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

    favicon_image?: BodyLink.FaviconImage;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    primary_image?: BodyLink.PrimaryImage;

    title?: string;
  }

  export namespace BodyLink {
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

  export interface Category {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    admin: boolean;

    colour: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    /**
     * A category's user-facing name.
     */
    name: string;

    /**
     * A category's URL-safe slug.
     */
    slug: string;

    sort: number;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
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

  export interface Replies {
    current_page: number;

    page_size: number;

    replies: Array<Replies.Reply>;

    results: number;

    total_pages: number;

    next_page?: number;
  }

  export namespace Replies {
    /**
     * A new post within a thread of posts. A post may reply to another post in the
     * thread by specifying the `reply_to` property. The identifier in the `reply_to`
     * value must be post within the same thread.
     */
    export interface Reply {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      assets: Array<Reply.Asset>;

      /**
       * A minimal reference to an account.
       */
      author: Reply.Author;

      /**
       * The body text of a post within a thread. The type is either a string or an
       * object, depending on what was used during creation. Strings can be used for
       * basic plain text or markdown content and objects are used for more complex types
       * such as Slate.js editor documents.
       */
      body: string;

      body_links: Array<Reply.BodyLink>;

      collections: Reply.Collections;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      likes: Reply.Likes;

      /**
       * A list of reactions this post has had from people.
       */
      reacts: Array<Reply.React>;

      /**
       * A unique identifier for this resource.
       */
      root_id: string;

      /**
       * A thread's ID and optional slug separated by a dash = it's unique mark. This
       * allows endpoints to respond to varying forms of a thread's ID.
       *
       * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
       * `top-10-movies-thread`, Storyden will understand both the forms:
       * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
       * identifier for that thread.
       */
      root_slug: string;

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

      /**
       * A unique identifier for this resource.
       */
      reply_to?: string;
    }

    export namespace Reply {
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

      /**
       * A minimal object used to refer to a link without sending too much data.
       */
      export interface BodyLink {
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

        favicon_image?: BodyLink.FaviconImage;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;

        primary_image?: BodyLink.PrimaryImage;

        title?: string;
      }

      export namespace BodyLink {
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
  }

  export interface ReplyStatus {
    /**
     * If requested by an authenticated account, the number of replies that were made
     * by that account to the thread.
     */
    replied: number;

    /**
     * The total number of replies to the thread.
     */
    replies: number;
  }

  /**
   * A minimal representation of a tag for use in most contexts where you don't need
   * the full list of items associated with the tag.
   */
  export interface Tag {
    /**
     * The colour of a tag.
     */
    colour: string;

    /**
     * The number of items tagged with this tag.
     */
    item_count: number;

    /**
     * The name of a tag.
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

export interface ThreadRetrieveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ThreadRetrieveResponse.Asset>;

  /**
   * A minimal reference to an account.
   */
  author: ThreadRetrieveResponse.Author;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  body_links: Array<ThreadRetrieveResponse.BodyLink>;

  category: ThreadRetrieveResponse.Category;

  collections: ThreadRetrieveResponse.Collections;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  likes: ThreadRetrieveResponse.Likes;

  /**
   * Whether the thread is pinned in this category.
   */
  pinned: boolean;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<ThreadRetrieveResponse.React>;

  replies: ThreadRetrieveResponse.Replies;

  reply_status: ThreadRetrieveResponse.ReplyStatus;

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
   * A list of tags.
   */
  tags: Array<ThreadRetrieveResponse.Tag>;

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
   * The time of the last reply to the thread.
   */
  last_reply_at?: string;

  /**
   * A minimal object used to refer to a link without sending too much data.
   */
  link?: ThreadRetrieveResponse.Link;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace ThreadRetrieveResponse {
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

  /**
   * A minimal object used to refer to a link without sending too much data.
   */
  export interface BodyLink {
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

    favicon_image?: BodyLink.FaviconImage;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    primary_image?: BodyLink.PrimaryImage;

    title?: string;
  }

  export namespace BodyLink {
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

  export interface Category {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    admin: boolean;

    colour: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    /**
     * A category's user-facing name.
     */
    name: string;

    /**
     * A category's URL-safe slug.
     */
    slug: string;

    sort: number;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
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

  export interface Replies {
    current_page: number;

    page_size: number;

    replies: Array<Replies.Reply>;

    results: number;

    total_pages: number;

    next_page?: number;
  }

  export namespace Replies {
    /**
     * A new post within a thread of posts. A post may reply to another post in the
     * thread by specifying the `reply_to` property. The identifier in the `reply_to`
     * value must be post within the same thread.
     */
    export interface Reply {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      assets: Array<Reply.Asset>;

      /**
       * A minimal reference to an account.
       */
      author: Reply.Author;

      /**
       * The body text of a post within a thread. The type is either a string or an
       * object, depending on what was used during creation. Strings can be used for
       * basic plain text or markdown content and objects are used for more complex types
       * such as Slate.js editor documents.
       */
      body: string;

      body_links: Array<Reply.BodyLink>;

      collections: Reply.Collections;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      likes: Reply.Likes;

      /**
       * A list of reactions this post has had from people.
       */
      reacts: Array<Reply.React>;

      /**
       * A unique identifier for this resource.
       */
      root_id: string;

      /**
       * A thread's ID and optional slug separated by a dash = it's unique mark. This
       * allows endpoints to respond to varying forms of a thread's ID.
       *
       * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
       * `top-10-movies-thread`, Storyden will understand both the forms:
       * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
       * identifier for that thread.
       */
      root_slug: string;

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

      /**
       * A unique identifier for this resource.
       */
      reply_to?: string;
    }

    export namespace Reply {
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

      /**
       * A minimal object used to refer to a link without sending too much data.
       */
      export interface BodyLink {
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

        favicon_image?: BodyLink.FaviconImage;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;

        primary_image?: BodyLink.PrimaryImage;

        title?: string;
      }

      export namespace BodyLink {
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
  }

  export interface ReplyStatus {
    /**
     * If requested by an authenticated account, the number of replies that were made
     * by that account to the thread.
     */
    replied: number;

    /**
     * The total number of replies to the thread.
     */
    replies: number;
  }

  /**
   * A minimal representation of a tag for use in most contexts where you don't need
   * the full list of items associated with the tag.
   */
  export interface Tag {
    /**
     * The colour of a tag.
     */
    colour: string;

    /**
     * The number of items tagged with this tag.
     */
    item_count: number;

    /**
     * The name of a tag.
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

export interface ThreadUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ThreadUpdateResponse.Asset>;

  /**
   * A minimal reference to an account.
   */
  author: ThreadUpdateResponse.Author;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  body_links: Array<ThreadUpdateResponse.BodyLink>;

  category: ThreadUpdateResponse.Category;

  collections: ThreadUpdateResponse.Collections;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  likes: ThreadUpdateResponse.Likes;

  /**
   * Whether the thread is pinned in this category.
   */
  pinned: boolean;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<ThreadUpdateResponse.React>;

  replies: ThreadUpdateResponse.Replies;

  reply_status: ThreadUpdateResponse.ReplyStatus;

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
   * A list of tags.
   */
  tags: Array<ThreadUpdateResponse.Tag>;

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
   * The time of the last reply to the thread.
   */
  last_reply_at?: string;

  /**
   * A minimal object used to refer to a link without sending too much data.
   */
  link?: ThreadUpdateResponse.Link;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace ThreadUpdateResponse {
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

  /**
   * A minimal object used to refer to a link without sending too much data.
   */
  export interface BodyLink {
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

    favicon_image?: BodyLink.FaviconImage;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    primary_image?: BodyLink.PrimaryImage;

    title?: string;
  }

  export namespace BodyLink {
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

  export interface Category {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    admin: boolean;

    colour: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    /**
     * A category's user-facing name.
     */
    name: string;

    /**
     * A category's URL-safe slug.
     */
    slug: string;

    sort: number;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
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

  export interface Replies {
    current_page: number;

    page_size: number;

    replies: Array<Replies.Reply>;

    results: number;

    total_pages: number;

    next_page?: number;
  }

  export namespace Replies {
    /**
     * A new post within a thread of posts. A post may reply to another post in the
     * thread by specifying the `reply_to` property. The identifier in the `reply_to`
     * value must be post within the same thread.
     */
    export interface Reply {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      assets: Array<Reply.Asset>;

      /**
       * A minimal reference to an account.
       */
      author: Reply.Author;

      /**
       * The body text of a post within a thread. The type is either a string or an
       * object, depending on what was used during creation. Strings can be used for
       * basic plain text or markdown content and objects are used for more complex types
       * such as Slate.js editor documents.
       */
      body: string;

      body_links: Array<Reply.BodyLink>;

      collections: Reply.Collections;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      likes: Reply.Likes;

      /**
       * A list of reactions this post has had from people.
       */
      reacts: Array<Reply.React>;

      /**
       * A unique identifier for this resource.
       */
      root_id: string;

      /**
       * A thread's ID and optional slug separated by a dash = it's unique mark. This
       * allows endpoints to respond to varying forms of a thread's ID.
       *
       * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
       * `top-10-movies-thread`, Storyden will understand both the forms:
       * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
       * identifier for that thread.
       */
      root_slug: string;

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

      /**
       * A unique identifier for this resource.
       */
      reply_to?: string;
    }

    export namespace Reply {
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

      /**
       * A minimal object used to refer to a link without sending too much data.
       */
      export interface BodyLink {
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

        favicon_image?: BodyLink.FaviconImage;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;

        primary_image?: BodyLink.PrimaryImage;

        title?: string;
      }

      export namespace BodyLink {
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
  }

  export interface ReplyStatus {
    /**
     * If requested by an authenticated account, the number of replies that were made
     * by that account to the thread.
     */
    replied: number;

    /**
     * The total number of replies to the thread.
     */
    replies: number;
  }

  /**
   * A minimal representation of a tag for use in most contexts where you don't need
   * the full list of items associated with the tag.
   */
  export interface Tag {
    /**
     * The colour of a tag.
     */
    colour: string;

    /**
     * The number of items tagged with this tag.
     */
    item_count: number;

    /**
     * The name of a tag.
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

export interface ThreadListResponse {
  current_page: number;

  page_size: number;

  results: number;

  threads: Array<ThreadListResponse.Thread>;

  total_pages: number;

  next_page?: number;
}

export namespace ThreadListResponse {
  /**
   * A thread reference includes most of the information about a thread but does not
   * include the posts within the thread. Useful for rendering large lists of threads
   * or other situations when you don't need the full data.
   */
  export interface Thread {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Thread.Asset>;

    /**
     * A minimal reference to an account.
     */
    author: Thread.Author;

    /**
     * The body text of a post within a thread. The type is either a string or an
     * object, depending on what was used during creation. Strings can be used for
     * basic plain text or markdown content and objects are used for more complex types
     * such as Slate.js editor documents.
     */
    body: string;

    body_links: Array<Thread.BodyLink>;

    category: Thread.Category;

    collections: Thread.Collections;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    likes: Thread.Likes;

    /**
     * Whether the thread is pinned in this category.
     */
    pinned: boolean;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Thread.React>;

    reply_status: Thread.ReplyStatus;

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
     * A list of tags.
     */
    tags: Array<Thread.Tag>;

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
     * The time of the last reply to the thread.
     */
    last_reply_at?: string;

    /**
     * A minimal object used to refer to a link without sending too much data.
     */
    link?: Thread.Link;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
  }

  export namespace Thread {
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

    /**
     * A minimal object used to refer to a link without sending too much data.
     */
    export interface BodyLink {
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

      favicon_image?: BodyLink.FaviconImage;

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;

      primary_image?: BodyLink.PrimaryImage;

      title?: string;
    }

    export namespace BodyLink {
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

    export interface Category {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      admin: boolean;

      colour: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      description: string;

      /**
       * A category's user-facing name.
       */
      name: string;

      /**
       * A category's URL-safe slug.
       */
      slug: string;

      sort: number;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      /**
       * Arbitrary metadata for the resource.
       */
      meta?: { [key: string]: unknown };

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;
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

    export interface ReplyStatus {
      /**
       * If requested by an authenticated account, the number of replies that were made
       * by that account to the thread.
       */
      replied: number;

      /**
       * The total number of replies to the thread.
       */
      replies: number;
    }

    /**
     * A minimal representation of a tag for use in most contexts where you don't need
     * the full list of items associated with the tag.
     */
    export interface Tag {
      /**
       * The colour of a tag.
       */
      colour: string;

      /**
       * The number of items tagged with this tag.
       */
      item_count: number;

      /**
       * The name of a tag.
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
}

/**
 * A new post within a thread of posts. A post may reply to another post in the
 * thread by specifying the `reply_to` property. The identifier in the `reply_to`
 * value must be post within the same thread.
 */
export interface ThreadCreateReplyResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ThreadCreateReplyResponse.Asset>;

  /**
   * A minimal reference to an account.
   */
  author: ThreadCreateReplyResponse.Author;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  body_links: Array<ThreadCreateReplyResponse.BodyLink>;

  collections: ThreadCreateReplyResponse.Collections;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  likes: ThreadCreateReplyResponse.Likes;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<ThreadCreateReplyResponse.React>;

  /**
   * A unique identifier for this resource.
   */
  root_id: string;

  /**
   * A thread's ID and optional slug separated by a dash = it's unique mark. This
   * allows endpoints to respond to varying forms of a thread's ID.
   *
   * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
   * `top-10-movies-thread`, Storyden will understand both the forms:
   * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
   * identifier for that thread.
   */
  root_slug: string;

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

  /**
   * A unique identifier for this resource.
   */
  reply_to?: string;
}

export namespace ThreadCreateReplyResponse {
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

  /**
   * A minimal object used to refer to a link without sending too much data.
   */
  export interface BodyLink {
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

    favicon_image?: BodyLink.FaviconImage;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    primary_image?: BodyLink.PrimaryImage;

    title?: string;
  }

  export namespace BodyLink {
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

export interface ThreadCreateParams {
  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  /**
   * A unique identifier for this resource.
   */
  category: string;

  /**
   * The title of a thread.
   */
  title: string;

  visibility: 'draft' | 'unlisted' | 'review' | 'published';

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  tags?: Array<string>;

  /**
   * A web address
   */
  url?: string;
}

export interface ThreadRetrieveParams {
  /**
   * Pagination query parameters.
   */
  page?: string;
}

export interface ThreadUpdateParams {
  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body?: string;

  /**
   * A unique identifier for this resource.
   */
  category?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  tags?: Array<string>;

  /**
   * The title of a thread.
   */
  title?: string;

  /**
   * A web address
   */
  url?: string;

  visibility?: 'draft' | 'unlisted' | 'review' | 'published';
}

export interface ThreadListParams {
  /**
   * Show only results creeated by this user.
   */
  author?: string;

  /**
   * Show only results with these categories
   */
  categories?: Array<string>;

  /**
   * Pagination query parameters.
   */
  page?: string;

  /**
   * Search query string.
   */
  q?: string;

  /**
   * Show only results with these tags
   */
  tags?: Array<string>;

  /**
   * Filter content with specific visibility values. Note that by default, only
   * published items are returned. When 'draft' is specified, only drafts owned by
   * the requesting account are included. When 'review' is specified, the request
   * will fail if the requesting account does not have the necessary permission to
   * view in-review items.
   */
  visibility?: Array<'draft' | 'unlisted' | 'review' | 'published'>;
}

export interface ThreadCreateReplyParams {
  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * A unique identifier for this resource.
   */
  reply_to?: string;

  /**
   * A web address
   */
  url?: string;
}

export declare namespace Threads {
  export {
    type ThreadCreateResponse as ThreadCreateResponse,
    type ThreadRetrieveResponse as ThreadRetrieveResponse,
    type ThreadUpdateResponse as ThreadUpdateResponse,
    type ThreadListResponse as ThreadListResponse,
    type ThreadCreateReplyResponse as ThreadCreateReplyResponse,
    type ThreadCreateParams as ThreadCreateParams,
    type ThreadRetrieveParams as ThreadRetrieveParams,
    type ThreadUpdateParams as ThreadUpdateParams,
    type ThreadListParams as ThreadListParams,
    type ThreadCreateReplyParams as ThreadCreateReplyParams,
  };
}
