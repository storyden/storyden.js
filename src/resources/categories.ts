// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Categories extends APIResource {
  /**
   * Create a category for organising posts.
   */
  create(body: CategoryCreateParams, options?: Core.RequestOptions): Core.APIPromise<CategoryCreateResponse> {
    return this._client.post('/categories', { body, ...options });
  }

  /**
   * Update a category's information.
   */
  update(
    categoryId: string,
    body?: CategoryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryUpdateResponse>;
  update(categoryId: string, options?: Core.RequestOptions): Core.APIPromise<CategoryUpdateResponse>;
  update(
    categoryId: string,
    body: CategoryUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(categoryId, {}, body);
    }
    return this._client.patch(`/categories/${categoryId}`, { body, ...options });
  }

  /**
   * Get a list of all categories on the site.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CategoryListResponse> {
    return this._client.get('/categories', options);
  }

  /**
   * Update the sort order of categories.
   */
  updateSortOrder(
    body?: CategoryUpdateSortOrderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryUpdateSortOrderResponse>;
  updateSortOrder(options?: Core.RequestOptions): Core.APIPromise<CategoryUpdateSortOrderResponse>;
  updateSortOrder(
    body?: CategoryUpdateSortOrderParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryUpdateSortOrderResponse> {
    if (isRequestOptions(body)) {
      return this.updateSortOrder(undefined, body);
    }
    return this._client.patch('/categories', { body, ...options });
  }
}

export interface CategoryCreateResponse {
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

  postCount: number;

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

export interface CategoryUpdateResponse {
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

  postCount: number;

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

export interface CategoryListResponse {
  categories: Array<CategoryListResponse.Category>;
}

export namespace CategoryListResponse {
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

    postCount: number;

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
}

export interface CategoryUpdateSortOrderResponse {
  categories: Array<CategoryUpdateSortOrderResponse.Category>;
}

export namespace CategoryUpdateSortOrderResponse {
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

    postCount: number;

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
}

export interface CategoryCreateParams {
  admin: boolean;

  colour: string;

  description: string;

  /**
   * A category's user-facing name.
   */
  name: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * A category's URL-safe slug.
   */
  slug?: string;
}

export interface CategoryUpdateParams {
  admin?: boolean;

  colour?: string;

  description?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * A category's user-facing name.
   */
  name?: string;

  /**
   * A category's URL-safe slug.
   */
  slug?: string;
}

export type CategoryUpdateSortOrderParams = Array<string>;

export declare namespace Categories {
  export {
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryUpdateResponse as CategoryUpdateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryUpdateSortOrderResponse as CategoryUpdateSortOrderResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryUpdateSortOrderParams as CategoryUpdateSortOrderParams,
  };
}
