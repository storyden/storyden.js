// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as AssetsAPI from './assets';
import { AssetAddResponse, AssetRemoveResponse, Assets } from './assets';
import * as ChildrenAPI from './children';
import {
  ChildListParams,
  ChildListResponse,
  ChildUpdatePropertySchemaParams,
  ChildUpdatePropertySchemaResponse,
  Children,
} from './children';
import * as NodesNodesAPI from './nodes_';
import { Nodes as NodesAPINodes } from './nodes_';

export class Nodes extends APIResource {
  children: ChildrenAPI.Children = new ChildrenAPI.Children(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  nodes: NodesNodesAPI.Nodes = new NodesNodesAPI.Nodes(this._client);

  /**
   * Create a node for curating structured knowledge together.
   *
   * @example
   * ```ts
   * const commonProperties = await client.nodes.create({
   *   name: 'name',
   * });
   * ```
   */
  create(body: NodeCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.CommonProperties> {
    return this._client.post('/nodes', { body, ...options });
  }

  /**
   * Get a node by its URL slug.
   *
   * @example
   * ```ts
   * const node = await client.nodes.retrieve(
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  retrieve(
    nodeSlug: string,
    query?: NodeRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeRetrieveResponse>;
  retrieve(nodeSlug: string, options?: Core.RequestOptions): Core.APIPromise<NodeRetrieveResponse>;
  retrieve(
    nodeSlug: string,
    query: NodeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(nodeSlug, {}, query);
    }
    return this._client.get(`/nodes/${nodeSlug}`, { query, ...options });
  }

  /**
   * Update a node.
   *
   * @example
   * ```ts
   * const node = await client.nodes.update(
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  update(
    nodeSlug: string,
    body?: NodeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdateResponse>;
  update(nodeSlug: string, options?: Core.RequestOptions): Core.APIPromise<NodeUpdateResponse>;
  update(
    nodeSlug: string,
    body: NodeUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(nodeSlug, {}, body);
    }
    return this._client.patch(`/nodes/${nodeSlug}`, { body, ...options });
  }

  /**
   * List nodes using the given filters. Can be used to get a full tree.
   *
   * @example
   * ```ts
   * const nodes = await client.nodes.list();
   * ```
   */
  list(query?: NodeListParams, options?: Core.RequestOptions): Core.APIPromise<NodeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<NodeListResponse>;
  list(
    query: NodeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/nodes', { query, ...options });
  }

  /**
   * Delete a node and move all children to its parent or root.
   *
   * @example
   * ```ts
   * const node = await client.nodes.delete(
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  delete(
    nodeSlug: string,
    params?: NodeDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeDeleteResponse>;
  delete(nodeSlug: string, options?: Core.RequestOptions): Core.APIPromise<NodeDeleteResponse>;
  delete(
    nodeSlug: string,
    params: NodeDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(nodeSlug, {}, params);
    }
    const { target_node } = params;
    return this._client.delete(`/nodes/${nodeSlug}`, { query: { target_node }, ...options });
  }

  /**
   * Generate proposed content for the specified node. Will not actually mutate the
   * specified node, instead will return a proposal based on the output from a
   * language model call.
   *
   * @example
   * ```ts
   * const response = await client.nodes.proposeContent(
   *   'cc5lnd2s1s4652adtu50',
   *   { content: 'content' },
   * );
   * ```
   */
  proposeContent(
    nodeSlug: string,
    body: NodeProposeContentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeProposeContentResponse> {
    return this._client.post(`/nodes/${nodeSlug}/content`, { body, ...options });
  }

  /**
   * Generate proposed tags for the specified node. Will not actually mutate the
   * specified node, instead will return a proposal based on the output from a
   * language model call.
   *
   * @example
   * ```ts
   * const response = await client.nodes.proposeTags(
   *   'cc5lnd2s1s4652adtu50',
   *   { content: 'content' },
   * );
   * ```
   */
  proposeTags(
    nodeSlug: string,
    body: NodeProposeTagsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeProposeTagsResponse> {
    return this._client.post(`/nodes/${nodeSlug}/tags`, { body, ...options });
  }

  /**
   * Generate a proposed title for the specified node. Will not actually mutate the
   * specified node, instead will return a proposal based on the output from a
   * language model call.
   *
   * @example
   * ```ts
   * const response = await client.nodes.proposeTitle(
   *   'cc5lnd2s1s4652adtu50',
   *   { content: 'content' },
   * );
   * ```
   */
  proposeTitle(
    nodeSlug: string,
    body: NodeProposeTitleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeProposeTitleResponse> {
    return this._client.post(`/nodes/${nodeSlug}/title`, { body, ...options });
  }

  /**
   * Update the node's position in the tree, which optionally allows for changing the
   * node's parent either to another node or to `null` which severs the parent and
   * moves the node to the root. This endpoint also allows for moving the node's sort
   * position within either its current parent, or when moving it to a new parent.
   * Use this operation for a draggable tree interface or a table interface.
   *
   * @example
   * ```ts
   * const response = await client.nodes.updatePosition(
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  updatePosition(
    nodeSlug: string,
    body?: NodeUpdatePositionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdatePositionResponse>;
  updatePosition(
    nodeSlug: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdatePositionResponse>;
  updatePosition(
    nodeSlug: string,
    body: NodeUpdatePositionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdatePositionResponse> {
    if (isRequestOptions(body)) {
      return this.updatePosition(nodeSlug, {}, body);
    }
    return this._client.patch(`/nodes/${nodeSlug}/position`, { body, ...options });
  }

  /**
   * Update the properties of a node. New schema fields will result in the schema of
   * the node being updated before values are assigned. This will also propagate to
   * all sibling nodes as they all share the same schema.
   *
   * @example
   * ```ts
   * const response = await client.nodes.updateProperties(
   *   'cc5lnd2s1s4652adtu50',
   *   { properties: [{ name: 'name', value: 'value' }] },
   * );
   * ```
   */
  updateProperties(
    nodeSlug: string,
    body: NodeUpdatePropertiesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdatePropertiesResponse> {
    return this._client.patch(`/nodes/${nodeSlug}/properties`, { body, ...options });
  }

  /**
   * Updates the property schema of this node and its siblings. All children of a
   * node use the same schema for properties resulting in a table-like structure and
   * behaviour. Property schemas are loosely structured and can automatically cast
   * their values sometimes. A failed cast will not change data and instead just
   * yield an empty value when reading however changing the schema back to the
   * original type (or a type compatible with what the type was before changing) will
   * retain the original data upon next read. This permits clients to undo changes to
   * the schema easily while allowing quick schema changes without the need to remove
   * or update values before.
   *
   * @example
   * ```ts
   * const response = await client.nodes.updatePropertySchema(
   *   'cc5lnd2s1s4652adtu50',
   *   [{ name: 'name', sort: 'sort', type: 'text' }],
   * );
   * ```
   */
  updatePropertySchema(
    nodeSlug: string,
    body?: NodeUpdatePropertySchemaParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdatePropertySchemaResponse>;
  updatePropertySchema(
    nodeSlug: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdatePropertySchemaResponse>;
  updatePropertySchema(
    nodeSlug: string,
    body?: NodeUpdatePropertySchemaParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdatePropertySchemaResponse> {
    if (isRequestOptions(body)) {
      return this.updatePropertySchema(nodeSlug, undefined, body);
    }
    return this._client.patch(`/nodes/${nodeSlug}/property-schema`, { body, ...options });
  }

  /**
   * Update the visibility of a node. When changed, this may trigger other operations
   * such as notifications/newsletters. Changing the visibility of anything to
   * "published" is often accompanied by some other side effects.
   *
   * @example
   * ```ts
   * const response = await client.nodes.updateVisibility(
   *   'cc5lnd2s1s4652adtu50',
   *   { visibility: 'draft' },
   * );
   * ```
   */
  updateVisibility(
    nodeSlug: string,
    body: NodeUpdateVisibilityParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NodeUpdateVisibilityResponse> {
    return this._client.patch(`/nodes/${nodeSlug}/visibility`, { body, ...options });
  }
}

/**
 * The full properties of a node including all child nodes.
 */
export interface NodeRetrieveResponse extends Shared.CommonProperties {}

/**
 * The full properties of a node including all child nodes.
 */
export interface NodeUpdateResponse extends Shared.CommonProperties {}

export interface NodeListResponse {
  current_page: number;

  nodes: Array<NodeListResponse.Node>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace NodeListResponse {
  /**
   * The full properties of a node including all child nodes.
   */
  export interface Node extends Shared.CommonProperties {}
}

export interface NodeDeleteResponse {
  /**
   * A node is a text document with children and assets. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
   * and they also have their own content.
   */
  destination?: Shared.CommonProperties;
}

/**
 * The result of a content generation request from an LLM.
 */
export interface NodeProposeContentResponse {
  content: string;
}

/**
 * The result of a tag generation request from an LLM.
 */
export interface NodeProposeTagsResponse {
  tags: Array<string>;
}

/**
 * The result of a title generation request from an LLM.
 */
export interface NodeProposeTitleResponse {
  title: string;
}

/**
 * The full properties of a node including all child nodes.
 */
export interface NodeUpdatePositionResponse extends Shared.CommonProperties {}

export interface NodeUpdatePropertiesResponse {
  properties: Array<NodeUpdatePropertiesResponse.Property>;
}

export namespace NodeUpdatePropertiesResponse {
  export interface Property {
    /**
     * A unique identifier for this resource.
     */
    fid: string;

    name: string;

    sort: string;

    type: 'text' | 'number' | 'timestamp' | 'boolean';

    value: string;
  }
}

export interface NodeUpdatePropertySchemaResponse {
  properties: Array<NodeUpdatePropertySchemaResponse.Property>;
}

export namespace NodeUpdatePropertySchemaResponse {
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

/**
 * The full properties of a node including all child nodes.
 */
export interface NodeUpdateVisibilityResponse extends Shared.CommonProperties {}

export interface NodeCreateParams {
  name: string;

  asset_ids?: Array<string>;

  asset_sources?: Array<string>;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content?: string;

  hide_child_tree?: boolean;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  parent?: string;

  /**
   * A unique identifier for this resource.
   */
  primary_image_asset_id?: string;

  properties?: Array<NodeCreateParams.Property>;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  slug?: string;

  tags?: Array<string>;

  /**
   * A web address
   */
  url?: string;

  visibility?: 'draft' | 'unlisted' | 'review' | 'published';
}

export namespace NodeCreateParams {
  /**
   * A property mutation is a change to a property on a node. It can be used to
   * update existing properties or add new properties to a node. When a property
   * already exists by name/fid, type and sort columns are optional.
   */
  export interface Property {
    name: string;

    value: string;

    /**
     * A unique identifier for this resource.
     */
    fid?: string;

    sort?: string;

    type?: 'text' | 'number' | 'timestamp' | 'boolean';
  }
}

export interface NodeRetrieveParams {
  /**
   * The field (either in schema or in property schema) to sort by.
   */
  children_sort?: string;

  /**
   * Pagination query parameters.
   */
  page?: string;
}

export interface NodeUpdateParams {
  asset_ids?: Array<string>;

  asset_sources?: Array<string>;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content?: string;

  hide_child_tree?: boolean;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  name?: string;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  parent?: string;

  /**
   * A unique identifier for this resource.
   */
  primary_image_asset_id?: string | null;

  properties?: Array<NodeUpdateParams.Property>;

  /**
   * A URL-safe slug for uniquely identifying resources.
   */
  slug?: string;

  tags?: Array<string>;

  /**
   * A web address
   */
  url?: string;
}

export namespace NodeUpdateParams {
  /**
   * A property mutation is a change to a property on a node. It can be used to
   * update existing properties or add new properties to a node. When a property
   * already exists by name/fid, type and sort columns are optional.
   */
  export interface Property {
    name: string;

    value: string;

    /**
     * A unique identifier for this resource.
     */
    fid?: string;

    sort?: string;

    type?: 'text' | 'number' | 'timestamp' | 'boolean';
  }
}

export interface NodeListParams {
  /**
   * Show only results owned by this account.
   */
  author?: string;

  /**
   * When set to a positive value, the nodes in the response will include all child
   * nodes up to the specified depth. When set to zero, then if the request includes
   * a node ID only that node will be returned, otherwise only top-level (root) nodes
   * will be returned.
   */
  depth?: string;

  /**
   * List format, either a tree where each item contains a children array or flat
   * where children items contain an ID that references their parent.
   */
  format?: 'tree' | 'flat';

  /**
   * List this node and all child nodes.
   */
  node_id?: string;

  /**
   * Pagination query parameters.
   */
  page?: string;

  /**
   * Search query string.
   */
  q?: string;

  /**
   * Filter content with specific visibility values. Note that by default, only
   * published items are returned. When 'draft' is specified, only drafts owned by
   * the requesting account are included. When 'review' is specified, the request
   * will fail if the requesting account does not have the necessary permission to
   * view in-review items.
   */
  visibility?: Array<'draft' | 'unlisted' | 'review' | 'published'>;
}

export interface NodeDeleteParams {
  /**
   * If set, child nodes will be moved to the target node. If not set, child nodes
   * will be moved to the root.
   */
  target_node?: string;
}

export interface NodeProposeContentParams {
  content: string;
}

export interface NodeProposeTagsParams {
  content: string;
}

export interface NodeProposeTitleParams {
  content: string;
}

export interface NodeUpdatePositionParams {
  /**
   * Move this node after the sibling with this ID.
   */
  after?: string;

  /**
   * Move this node before the sibling with this ID.
   */
  before?: string;

  /**
   * Optional new parent node slug. Set to null to move node to the root.
   */
  parent?: string | null;
}

export interface NodeUpdatePropertiesParams {
  properties: Array<NodeUpdatePropertiesParams.Property>;
}

export namespace NodeUpdatePropertiesParams {
  /**
   * A property mutation is a change to a property on a node. It can be used to
   * update existing properties or add new properties to a node. When a property
   * already exists by name/fid, type and sort columns are optional.
   */
  export interface Property {
    name: string;

    value: string;

    /**
     * A unique identifier for this resource.
     */
    fid?: string;

    sort?: string;

    type?: 'text' | 'number' | 'timestamp' | 'boolean';
  }
}

export type NodeUpdatePropertySchemaParams = Array<NodeUpdatePropertySchemaParams.Body>;

export namespace NodeUpdatePropertySchemaParams {
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

export interface NodeUpdateVisibilityParams {
  visibility: 'draft' | 'unlisted' | 'review' | 'published';
}

Nodes.Children = Children;
Nodes.Assets = Assets;
Nodes.Nodes = NodesAPINodes;

export declare namespace Nodes {
  export {
    type NodeRetrieveResponse as NodeRetrieveResponse,
    type NodeUpdateResponse as NodeUpdateResponse,
    type NodeListResponse as NodeListResponse,
    type NodeDeleteResponse as NodeDeleteResponse,
    type NodeProposeContentResponse as NodeProposeContentResponse,
    type NodeProposeTagsResponse as NodeProposeTagsResponse,
    type NodeProposeTitleResponse as NodeProposeTitleResponse,
    type NodeUpdatePositionResponse as NodeUpdatePositionResponse,
    type NodeUpdatePropertiesResponse as NodeUpdatePropertiesResponse,
    type NodeUpdatePropertySchemaResponse as NodeUpdatePropertySchemaResponse,
    type NodeUpdateVisibilityResponse as NodeUpdateVisibilityResponse,
    type NodeCreateParams as NodeCreateParams,
    type NodeRetrieveParams as NodeRetrieveParams,
    type NodeUpdateParams as NodeUpdateParams,
    type NodeListParams as NodeListParams,
    type NodeDeleteParams as NodeDeleteParams,
    type NodeProposeContentParams as NodeProposeContentParams,
    type NodeProposeTagsParams as NodeProposeTagsParams,
    type NodeProposeTitleParams as NodeProposeTitleParams,
    type NodeUpdatePositionParams as NodeUpdatePositionParams,
    type NodeUpdatePropertiesParams as NodeUpdatePropertiesParams,
    type NodeUpdatePropertySchemaParams as NodeUpdatePropertySchemaParams,
    type NodeUpdateVisibilityParams as NodeUpdateVisibilityParams,
  };

  export {
    Children as Children,
    type ChildListResponse as ChildListResponse,
    type ChildUpdatePropertySchemaResponse as ChildUpdatePropertySchemaResponse,
    type ChildListParams as ChildListParams,
    type ChildUpdatePropertySchemaParams as ChildUpdatePropertySchemaParams,
  };

  export {
    Assets as Assets,
    type AssetAddResponse as AssetAddResponse,
    type AssetRemoveResponse as AssetRemoveResponse,
  };

  export { NodesAPINodes as Nodes };
}
