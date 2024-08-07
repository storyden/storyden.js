// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as CategoriesAPI from './categories';

export class Categories extends APIResource {
  /**
   * Create a category for organising posts.
   */
  create(body: CategoryCreateParams, options?: Core.RequestOptions): Core.APIPromise<CategoryCreateResponse> {
    return this._client.post('/v1/categories', { body, ...options });
  }

  /**
   * Create a category for organising posts.
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
    return this._client.patch(`/v1/categories/${categoryId}`, { body, ...options });
  }

  /**
   * Get a list of all categories on the site.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CategoryListResponse> {
    return this._client.get('/v1/categories', options);
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
  meta?: Record<string, unknown>;

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
  meta?: Record<string, unknown>;

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
    meta?: Record<string, unknown>;

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
  meta?: Record<string, unknown>;

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
  meta?: Record<string, unknown>;

  /**
   * A category's user-facing name.
   */
  name?: string;

  /**
   * A category's URL-safe slug.
   */
  slug?: string;
}

export namespace Categories {
  export import CategoryCreateResponse = CategoriesAPI.CategoryCreateResponse;
  export import CategoryUpdateResponse = CategoriesAPI.CategoryUpdateResponse;
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
  export import CategoryCreateParams = CategoriesAPI.CategoryCreateParams;
  export import CategoryUpdateParams = CategoriesAPI.CategoryUpdateParams;
}
