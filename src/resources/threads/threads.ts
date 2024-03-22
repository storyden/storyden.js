// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import { isRequestOptions } from 'Storyden/core';
import * as ThreadsAPI from 'Storyden/resources/threads/threads';
import * as PostsAPI from 'Storyden/resources/threads/posts';

export class Threads extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);

  /**
   * Create a new thread within the specified category.
   */
  create(body: ThreadCreateParams, options?: Core.RequestOptions): Core.APIPromise<ThreadCreateResponse> {
    return this._client.post('/v1/threads', { body, ...options });
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
  archive(threadMark: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/threads/${threadMark}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Publish changes to a thread.
   */
  publishChanges(
    threadMark: string,
    body?: ThreadPublishChangesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadPublishChangesResponse>;
  publishChanges(
    threadMark: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadPublishChangesResponse>;
  publishChanges(
    threadMark: string,
    body: ThreadPublishChangesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadPublishChangesResponse> {
    if (isRequestOptions(body)) {
      return this.publishChanges(threadMark, {}, body);
    }
    return this._client.patch(`/v1/threads/${threadMark}`, { body, ...options });
  }

  /**
   * Get information about a thread such as its title, author, when it was created as
   * well as a list of the posts within the thread.
   */
  retrieveInformation(
    threadMark: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ThreadRetrieveInformationResponse> {
    return this._client.get(`/v1/threads/${threadMark}`, options);
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

  category: ThreadCreateResponse.Category;

  collections: Array<ThreadCreateResponse.Collection>;

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

  posts: Array<ThreadCreateResponse.Post>;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<ThreadCreateResponse.React>;

  recomentations: Array<ThreadCreateResponse.Recomentation>;

  /**
   * A short version of the thread's body text for use in previews.
   */
  short: string;

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
   * The title of the thread.
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
   * A new post within a thread of posts. A post may reply to another post in the
   * thread by specifying the `reply_to` property. The identifier in the `reply_to`
   * value must be post within the same thread.
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

    links: Array<Post.Link>;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Post.React>;

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
     * Arbitrary metadata for the resource.
     */
    meta?: Record<string, unknown>;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    /**
     * A unique identifier for this resource.
     */
    reply_to?: string;
  }

  export namespace Post {
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

    export interface React {
      /**
       * A unique identifier for this resource.
       */
      id?: string;

      emoji?: string;
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

    category: Thread.Category;

    collections: Array<Thread.Collection>;

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
     * A list of reactions this post has had from people.
     */
    reacts: Array<Thread.React>;

    /**
     * A short version of the thread's body text for use in previews.
     */
    short: string;

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
     * The title of the thread.
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
     * A web address with content information such as title, description, etc.
     */
    link?: Thread.Link;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: Record<string, unknown>;

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

    export interface React {
      /**
       * A unique identifier for this resource.
       */
      id?: string;

      emoji?: string;
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

export interface ThreadPublishChangesResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ThreadPublishChangesResponse.Asset>;

  /**
   * A minimal reference to an account.
   */
  author: ThreadPublishChangesResponse.Author;

  category: ThreadPublishChangesResponse.Category;

  collections: Array<ThreadPublishChangesResponse.Collection>;

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

  posts: Array<ThreadPublishChangesResponse.Post>;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<ThreadPublishChangesResponse.React>;

  recomentations: Array<ThreadPublishChangesResponse.Recomentation>;

  /**
   * A short version of the thread's body text for use in previews.
   */
  short: string;

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
   * The title of the thread.
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
   * A web address with content information such as title, description, etc.
   */
  link?: ThreadPublishChangesResponse.Link;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: Record<string, unknown>;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace ThreadPublishChangesResponse {
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
   * A new post within a thread of posts. A post may reply to another post in the
   * thread by specifying the `reply_to` property. The identifier in the `reply_to`
   * value must be post within the same thread.
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

    links: Array<Post.Link>;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Post.React>;

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
     * Arbitrary metadata for the resource.
     */
    meta?: Record<string, unknown>;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    /**
     * A unique identifier for this resource.
     */
    reply_to?: string;
  }

  export namespace Post {
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

    export interface React {
      /**
       * A unique identifier for this resource.
       */
      id?: string;

      emoji?: string;
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
}

export interface ThreadRetrieveInformationResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  assets: Array<ThreadRetrieveInformationResponse.Asset>;

  /**
   * A minimal reference to an account.
   */
  author: ThreadRetrieveInformationResponse.Author;

  category: ThreadRetrieveInformationResponse.Category;

  collections: Array<ThreadRetrieveInformationResponse.Collection>;

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

  posts: Array<ThreadRetrieveInformationResponse.Post>;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<ThreadRetrieveInformationResponse.React>;

  recomentations: Array<ThreadRetrieveInformationResponse.Recomentation>;

  /**
   * A short version of the thread's body text for use in previews.
   */
  short: string;

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
   * The title of the thread.
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
   * A web address with content information such as title, description, etc.
   */
  link?: ThreadRetrieveInformationResponse.Link;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: Record<string, unknown>;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace ThreadRetrieveInformationResponse {
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
   * A new post within a thread of posts. A post may reply to another post in the
   * thread by specifying the `reply_to` property. The identifier in the `reply_to`
   * value must be post within the same thread.
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

    links: Array<Post.Link>;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Post.React>;

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
     * Arbitrary metadata for the resource.
     */
    meta?: Record<string, unknown>;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    /**
     * A unique identifier for this resource.
     */
    reply_to?: string;
  }

  export namespace Post {
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

    export interface React {
      /**
       * A unique identifier for this resource.
       */
      id?: string;

      emoji?: string;
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

  visibility: 'draft' | 'review' | 'published';

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

export interface ThreadPublishChangesParams {
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

  visibility?: 'draft' | 'review' | 'published';
}

export namespace Threads {
  export import ThreadCreateResponse = ThreadsAPI.ThreadCreateResponse;
  export import ThreadListResponse = ThreadsAPI.ThreadListResponse;
  export import ThreadPublishChangesResponse = ThreadsAPI.ThreadPublishChangesResponse;
  export import ThreadRetrieveInformationResponse = ThreadsAPI.ThreadRetrieveInformationResponse;
  export import ThreadCreateParams = ThreadsAPI.ThreadCreateParams;
  export import ThreadListParams = ThreadsAPI.ThreadListParams;
  export import ThreadPublishChangesParams = ThreadsAPI.ThreadPublishChangesParams;
  export import Posts = PostsAPI.Posts;
  export import PostCreateResponse = PostsAPI.PostCreateResponse;
  export import PostCreateParams = PostsAPI.PostCreateParams;
}
