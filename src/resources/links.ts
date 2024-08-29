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
 * A web address with content information such as title, description, etc.
 */
export interface LinkRetrieveResponse {}

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
