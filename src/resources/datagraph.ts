// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as DatagraphAPI from './datagraph';

export class Datagraph extends APIResource {
  /**
   * Query and search content.
   */
  list(query?: DatagraphListParams, options?: Core.RequestOptions): Core.APIPromise<DatagraphListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DatagraphListResponse>;
  list(
    query: DatagraphListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatagraphListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/datagraph', { query, ...options });
  }
}

export interface DatagraphListResponse {
  current_page: number;

  items: Array<DatagraphListResponse.Item>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace DatagraphListResponse {
  export interface Item {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    kind: 'post' | 'node' | 'profile';

    name: string;

    slug: string;

    description?: string;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: Record<string, unknown>;
  }
}

export interface DatagraphListParams {
  /**
   * Pagination query parameters.
   */
  page?: string;

  /**
   * Search query string.
   */
  q?: string;
}

export namespace Datagraph {
  export import DatagraphListResponse = DatagraphAPI.DatagraphListResponse;
  export import DatagraphListParams = DatagraphAPI.DatagraphListParams;
}
