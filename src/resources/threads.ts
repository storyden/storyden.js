// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import * as EventsAPI from './events/events';

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
  create(body: ThreadCreateParams, options?: Core.RequestOptions): Core.APIPromise<EventsAPI.Thread> {
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
  ): Core.APIPromise<EventsAPI.Thread>;
  retrieve(threadMark: string, options?: Core.RequestOptions): Core.APIPromise<EventsAPI.Thread>;
  retrieve(
    threadMark: string,
    query: ThreadRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventsAPI.Thread> {
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
  ): Core.APIPromise<EventsAPI.Thread>;
  update(threadMark: string, options?: Core.RequestOptions): Core.APIPromise<EventsAPI.Thread>;
  update(
    threadMark: string,
    body: ThreadUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventsAPI.Thread> {
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
   * const reply = await client.threads.createReply(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   *   { body: 'body' },
   * );
   * ```
   */
  createReply(
    threadMark: string,
    body: ThreadCreateReplyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Reply> {
    return this._client.post(`/threads/${threadMark}/replies`, { body, ...options });
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
  export interface Thread extends Shared.CommonProperties {
    assets: Array<Shared.Asset>;

    /**
     * A minimal reference to an account.
     */
    author: Shared.ProfileReference;

    /**
     * The body text of a post within a thread. The type is either a string or an
     * object, depending on what was used during creation. Strings can be used for
     * basic plain text or markdown content and objects are used for more complex types
     * such as Slate.js editor documents.
     */
    body: string;

    body_links: Array<Shared.LinkReference>;

    category: Shared.CategoryReference;

    collections: Shared.CollectionStatus;

    likes: Shared.LikeData;

    /**
     * Whether the thread is pinned in this category.
     */
    pinned: boolean;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Shared.React>;

    reply_status: Shared.ReplyStatus;

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
    tags: Array<Shared.TagReferenceProps>;

    /**
     * The title of a thread.
     */
    title: string;

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
    link?: Shared.LinkReference;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };
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
    type ThreadListResponse as ThreadListResponse,
    type ThreadCreateParams as ThreadCreateParams,
    type ThreadRetrieveParams as ThreadRetrieveParams,
    type ThreadUpdateParams as ThreadUpdateParams,
    type ThreadListParams as ThreadListParams,
    type ThreadCreateReplyParams as ThreadCreateReplyParams,
  };
}
