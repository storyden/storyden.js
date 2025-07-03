// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import * as EventsAPI from './events/events';

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
   * const linkReference = await client.links.create({
   *   url: 'url',
   * });
   * ```
   */
  create(body: LinkCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.LinkReference> {
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
 * A web address with content information such as title, description, etc.
 */
export interface LinkRetrieveResponse extends Shared.CommonProperties {
  assets: Array<Shared.Asset>;

  domain: string;

  nodes: Array<Shared.CommonProperties>;

  posts: Array<LinkRetrieveResponse.Post>;

  recomentations: Array<
    | Shared.DatagraphItemPost
    | LinkRetrieveResponse.DatagraphItemThread
    | Shared.DatagraphItemReply
    | Shared.DatagraphItemNode
    | Shared.DatagraphItemProfile
  >;

  slug: string;

  /**
   * A web address
   */
  url: string;

  description?: string;

  favicon_image?: Shared.Asset;

  primary_image?: Shared.Asset;

  title?: string;
}

export namespace LinkRetrieveResponse {
  /**
   * A minimal object used to refer to a post without providing a lot of unnecessary
   * data such as the full content or child items.
   */
  export interface Post extends Shared.CommonProperties {
    assets: Array<Shared.Asset>;

    /**
     * A minimal reference to an account.
     */
    author: Shared.ProfileReference;

    collections: Shared.CollectionStatus;

    likes: Shared.LikeData;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Shared.React>;

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
     * A short version of the post's body text for use in previews.
     */
    description?: string;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };
  }

  export interface DatagraphItemThread {
    kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

    ref: EventsAPI.Thread;
  }
}

export interface LinkListResponse {
  current_page: number;

  links: Array<Shared.LinkReference>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
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
    type LinkRetrieveResponse as LinkRetrieveResponse,
    type LinkListResponse as LinkListResponse,
    type LinkCreateParams as LinkCreateParams,
    type LinkListParams as LinkListParams,
  };
}
