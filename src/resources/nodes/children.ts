// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Children extends APIResource {
  /**
   * Get all the children of a given node using the provided filters and page
   * parameters. This can be used for rendering the child nodes of the given node as
   * an interactive table where properties can be used as columns.
   *
   * @example
   * ```ts
   * const children = await client.nodes.children.list(
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  list(
    nodeSlug: string,
    query?: ChildListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChildListResponse>;
  list(nodeSlug: string, options?: Core.RequestOptions): Core.APIPromise<ChildListResponse>;
  list(
    nodeSlug: string,
    query: ChildListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChildListResponse> {
    if (isRequestOptions(query)) {
      return this.list(nodeSlug, {}, query);
    }
    return this._client.get(`/nodes/${nodeSlug}/children`, { query, ...options });
  }

  /**
   * Updates the property schema of the children of this node. All children of a node
   * use the same schema for properties resulting in a table-like structure and
   * behaviour. See also: NodeUpdatePropertySchema
   *
   * @example
   * ```ts
   * const response =
   *   await client.nodes.children.updatePropertySchema(
   *     'cc5lnd2s1s4652adtu50',
   *     [{ name: 'name', sort: 'sort', type: 'text' }],
   *   );
   * ```
   */
  updatePropertySchema(
    nodeSlug: string,
    body?: ChildUpdatePropertySchemaParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChildUpdatePropertySchemaResponse>;
  updatePropertySchema(
    nodeSlug: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChildUpdatePropertySchemaResponse>;
  updatePropertySchema(
    nodeSlug: string,
    body?: ChildUpdatePropertySchemaParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChildUpdatePropertySchemaResponse> {
    if (isRequestOptions(body)) {
      return this.updatePropertySchema(nodeSlug, undefined, body);
    }
    return this._client.patch(`/nodes/${nodeSlug}/children/property-schema`, { body, ...options });
  }
}

export interface ChildListResponse {
  current_page: number;

  nodes: Array<ChildListResponse.Node>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace ChildListResponse {
  /**
   * The full properties of a node including all child nodes.
   */
  export interface Node {}
}

export interface ChildUpdatePropertySchemaResponse {
  properties: Array<ChildUpdatePropertySchemaResponse.Property>;
}

export namespace ChildUpdatePropertySchemaResponse {
  export interface Property {
    /**
     * A unique identifier for this resource.
     */
    fid: string;

    name: string;

    sort: string;

    type: 'text' | 'number' | 'timestamp' | 'boolean';
  }
}

export interface ChildListParams {
  /**
   * The field (either in schema or in property schema) to sort by.
   */
  children_sort?: string;

  /**
   * Pagination query parameters.
   */
  page?: string;
}

export type ChildUpdatePropertySchemaParams = Array<ChildUpdatePropertySchemaParams.Body>;

export namespace ChildUpdatePropertySchemaParams {
  /**
   * Mutating property schemas permits updating existing fields as well as adding new
   * fields. The discinction is determined by the presence of the `id` field. When an
   * `id` field is provided, the operation is treated as an update operation where
   * any of the other fields will be used to write new values. If an `id` field is
   * omitted, the schema is considered a new field and is subject to a uniqueness
   * constraint on the `name` field.
   */
  export interface Body {
    name: string;

    sort: string;

    type: 'text' | 'number' | 'timestamp' | 'boolean';

    /**
     * A unique identifier for this resource.
     */
    fid?: string;
  }
}

export declare namespace Children {
  export {
    type ChildListResponse as ChildListResponse,
    type ChildUpdatePropertySchemaResponse as ChildUpdatePropertySchemaResponse,
    type ChildListParams as ChildListParams,
    type ChildUpdatePropertySchemaParams as ChildUpdatePropertySchemaParams,
  };
}
