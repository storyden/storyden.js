// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ThreadsAPI from './threads';
import * as PostsAPI from './posts';

export class Threads extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);

  /**
   * Create a new thread within the specified category.
   */
  create(body: ThreadCreateParams, options?: Core.RequestOptions): Core.APIPromise<ThreadCreateResponse> {
    return this._client.post('/v1/threads', { body, ...options });
  }

  /**
   * Get information about a thread such as its title, author, when it was created as
   * well as a list of the posts within the thread.
   */
  retrieve(threadMark: string, options?: Core.RequestOptions): Core.APIPromise<ThreadRetrieveResponse> {
    return this._client.get(`/v1/threads/${threadMark}`, options);
  }

  /**
   * Publish changes to a thread.
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
    return this._client.patch(`/v1/threads/${threadMark}`, { body, ...options });
  }

  /**
   * Get a list of all threads.
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
    return this._client.get('/v1/threads', { query, ...options });
  }

  /**
   * Archive a thread using soft-delete.
   */
  delete(threadMark: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/threads/${threadMark}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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

  category: ThreadCreateResponse.Category;

  collections: Array<ThreadCreateResponse.Collection>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  links: Array<ThreadCreateResponse.Link>;

  /**
   * Whether the thread is pinned in this category.
   */
  pinned: boolean;

  /**
   * The number of posts under this thread.
   */
  post_count: number;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<ThreadCreateResponse.React>;

  recomentations: Array<ThreadCreateResponse.Recomentation>;

  replies: Array<ThreadCreateResponse.Reply>;

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
   * A list of tags associated with the thread.
   */
  tags: Array<string>;

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
   * A web address with content information such as title, description, etc.
   */
  link?: ThreadCreateResponse.Link;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: Record<string, unknown>;

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

    url: string;

    width: number;
  }

  /**
   * A minimal reference to an account.
   */
  export interface Author {
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
    meta?: Record<string, unknown>;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
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

  export interface React {
    /**
     * A unique identifier for this resource.
     */
    id?: string;

    emoji?: string;
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

    /**
     * The body text of a post within a thread. The type is either a string or an
     * object, depending on what was used during creation. Strings can be used for
     * basic plain text or markdown content and objects are used for more complex types
     * such as Slate.js editor documents.
     */
    body: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

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

    /**
     * A unique identifier for this resource.
     */
    reply_to?: string;
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

  category: ThreadRetrieveResponse.Category;

  collections: Array<ThreadRetrieveResponse.Collection>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  links: Array<ThreadRetrieveResponse.Link>;

  /**
   * Whether the thread is pinned in this category.
   */
  pinned: boolean;

  /**
   * The number of posts under this thread.
   */
  post_count: number;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<ThreadRetrieveResponse.React>;

  recomentations: Array<ThreadRetrieveResponse.Recomentation>;

  replies: Array<ThreadRetrieveResponse.Reply>;

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
   * A list of tags associated with the thread.
   */
  tags: Array<string>;

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
   * A web address with content information such as title, description, etc.
   */
  link?: ThreadRetrieveResponse.Link;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: Record<string, unknown>;

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

    url: string;

    width: number;
  }

  /**
   * A minimal reference to an account.
   */
  export interface Author {
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
    meta?: Record<string, unknown>;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
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

  export interface React {
    /**
     * A unique identifier for this resource.
     */
    id?: string;

    emoji?: string;
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

    /**
     * The body text of a post within a thread. The type is either a string or an
     * object, depending on what was used during creation. Strings can be used for
     * basic plain text or markdown content and objects are used for more complex types
     * such as Slate.js editor documents.
     */
    body: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

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

    /**
     * A unique identifier for this resource.
     */
    reply_to?: string;
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

  category: ThreadUpdateResponse.Category;

  collections: Array<ThreadUpdateResponse.Collection>;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  links: Array<ThreadUpdateResponse.Link>;

  /**
   * Whether the thread is pinned in this category.
   */
  pinned: boolean;

  /**
   * The number of posts under this thread.
   */
  post_count: number;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<ThreadUpdateResponse.React>;

  recomentations: Array<ThreadUpdateResponse.Recomentation>;

  replies: Array<ThreadUpdateResponse.Reply>;

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
   * A list of tags associated with the thread.
   */
  tags: Array<string>;

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
   * A web address with content information such as title, description, etc.
   */
  link?: ThreadUpdateResponse.Link;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: Record<string, unknown>;

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

    url: string;

    width: number;
  }

  /**
   * A minimal reference to an account.
   */
  export interface Author {
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
    meta?: Record<string, unknown>;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
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

  export interface React {
    /**
     * A unique identifier for this resource.
     */
    id?: string;

    emoji?: string;
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

    /**
     * The body text of a post within a thread. The type is either a string or an
     * object, depending on what was used during creation. Strings can be used for
     * basic plain text or markdown content and objects are used for more complex types
     * such as Slate.js editor documents.
     */
    body: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

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

    /**
     * A unique identifier for this resource.
     */
    reply_to?: string;
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

    /**
     * The body text of a post within a thread. The type is either a string or an
     * object, depending on what was used during creation. Strings can be used for
     * basic plain text or markdown content and objects are used for more complex types
     * such as Slate.js editor documents.
     */
    body: string;

    category: Thread.Category;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    /**
     * Whether the thread is pinned in this category.
     */
    pinned: boolean;

    /**
     * The number of posts under this thread.
     */
    post_count: number;

    /**
     * A list of tags associated with the thread.
     */
    tags: Array<string>;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    /**
     * A web address with content information such as title, description, etc.
     */
    link?: Thread.Link;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
  }

  export namespace Thread {
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
      meta?: Record<string, unknown>;

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;
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
  meta?: Record<string, unknown>;

  /**
   * A list of tags IDs.
   */
  tags?: Array<string>;

  /**
   * A web address
   */
  url?: string;
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
  meta?: Record<string, unknown>;

  /**
   * A list of tags IDs.
   */
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
}

export namespace Threads {
  export import ThreadCreateResponse = ThreadsAPI.ThreadCreateResponse;
  export import ThreadRetrieveResponse = ThreadsAPI.ThreadRetrieveResponse;
  export import ThreadUpdateResponse = ThreadsAPI.ThreadUpdateResponse;
  export import ThreadListResponse = ThreadsAPI.ThreadListResponse;
  export import ThreadCreateParams = ThreadsAPI.ThreadCreateParams;
  export import ThreadUpdateParams = ThreadsAPI.ThreadUpdateParams;
  export import ThreadListParams = ThreadsAPI.ThreadListParams;
  export import Posts = PostsAPI.Posts;
}
