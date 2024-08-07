// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CategoriesAPI from './categories';

export class Categories extends APIResource {
  /**
   * Create a category for organising posts.
   */
  create(body: CategoryCreateParams, options?: Core.RequestOptions): Core.APIPromise<CategoryCreateResponse> {
    return this._client.post('/v1/categories', { body, ...options });
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

export namespace Categories {
  export import CategoryCreateResponse = CategoriesAPI.CategoryCreateResponse;
  export import CategoryCreateParams = CategoriesAPI.CategoryCreateParams;
}
