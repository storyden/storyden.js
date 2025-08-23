// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import * as EventsAPI from './events/events';

export class Tags extends APIResource {
  /**
   * Get information about a tag.
   */
  retrieve(tagName: string, options?: Core.RequestOptions): Core.APIPromise<TagRetrieveResponse> {
    return this._client.get(`/tags/${tagName}`, options);
  }

  /**
   * Get a list of all tags on the site.
   */
  list(query?: TagListParams, options?: Core.RequestOptions): Core.APIPromise<TagListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TagListResponse>;
  list(
    query: TagListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/tags', { query, ...options });
  }
}

/**
 * A tag is a label that can be applied to posts or pages to organise related
 * content. They can be used to filter and search for content. The Tag schema
 * provides all the data for a tag including its items, so it's quite a heavy
 * object if referencing a lot of items. For a lighter weight version, use a
 * TagReference for use-cases such as tag searches.
 */
export interface TagRetrieveResponse extends Shared.TagReferenceProps {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  items: Array<
    | Shared.DatagraphItemPost
    | TagRetrieveResponse.DatagraphItemThread
    | Shared.DatagraphItemReply
    | Shared.DatagraphItemNode
    | Shared.DatagraphItemProfile
  >;
}

export namespace TagRetrieveResponse {
  export interface DatagraphItemThread {
    kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

    ref: EventsAPI.Thread;
  }
}

export interface TagListResponse {
  /**
   * A list of tags.
   */
  tags: Array<Shared.TagReferenceProps>;
}

export interface TagListParams {
  /**
   * Search query string.
   */
  q?: string;
}

export declare namespace Tags {
  export {
    type TagRetrieveResponse as TagRetrieveResponse,
    type TagListResponse as TagListResponse,
    type TagListParams as TagListParams,
  };
}
