// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Roles extends APIResource {
  /**
   * Creates a role with the specified permissions granted.
   */
  create(body: RoleCreateParams, options?: Core.RequestOptions): Core.APIPromise<RoleCreateResponse> {
    return this._client.post('/roles', { body, ...options });
  }

  /**
   * Retreives a role and all its permissions.
   */
  retrieve(roleId: string, options?: Core.RequestOptions): Core.APIPromise<RoleRetrieveResponse> {
    return this._client.get(`/roles/${roleId}`, options);
  }

  /**
   * Updates a role's attributes.
   */
  update(
    roleId: string,
    body?: RoleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleUpdateResponse>;
  update(roleId: string, options?: Core.RequestOptions): Core.APIPromise<RoleUpdateResponse>;
  update(
    roleId: string,
    body: RoleUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(roleId, {}, body);
    }
    return this._client.patch(`/roles/${roleId}`, { body, ...options });
  }

  /**
   * List all roles and their permissions.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<RoleListResponse> {
    return this._client.get('/roles', options);
  }

  /**
   * Deletes a role.
   */
  delete(roleId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/roles/${roleId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface RoleCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  colour: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  name: string;

  permissions: Array<
    | 'CREATE_POST'
    | 'READ_PUBLISHED_THREADS'
    | 'CREATE_REACTION'
    | 'MANAGE_POSTS'
    | 'MANAGE_CATEGORIES'
    | 'CREATE_INVITATION'
    | 'READ_PUBLISHED_LIBRARY'
    | 'MANAGE_LIBRARY'
    | 'SUBMIT_LIBRARY_NODE'
    | 'UPLOAD_ASSET'
    | 'MANAGE_EVENTS'
    | 'LIST_PROFILES'
    | 'READ_PROFILE'
    | 'CREATE_COLLECTION'
    | 'LIST_COLLECTIONS'
    | 'READ_COLLECTION'
    | 'MANAGE_COLLECTIONS'
    | 'COLLECTION_SUBMIT'
    | 'USE_PERSONAL_ACCESS_KEYS'
    | 'MANAGE_SETTINGS'
    | 'MANAGE_SUSPENSIONS'
    | 'MANAGE_ROLES'
    | 'ADMINISTRATOR'
  >;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export interface RoleRetrieveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  colour: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  name: string;

  permissions: Array<
    | 'CREATE_POST'
    | 'READ_PUBLISHED_THREADS'
    | 'CREATE_REACTION'
    | 'MANAGE_POSTS'
    | 'MANAGE_CATEGORIES'
    | 'CREATE_INVITATION'
    | 'READ_PUBLISHED_LIBRARY'
    | 'MANAGE_LIBRARY'
    | 'SUBMIT_LIBRARY_NODE'
    | 'UPLOAD_ASSET'
    | 'MANAGE_EVENTS'
    | 'LIST_PROFILES'
    | 'READ_PROFILE'
    | 'CREATE_COLLECTION'
    | 'LIST_COLLECTIONS'
    | 'READ_COLLECTION'
    | 'MANAGE_COLLECTIONS'
    | 'COLLECTION_SUBMIT'
    | 'USE_PERSONAL_ACCESS_KEYS'
    | 'MANAGE_SETTINGS'
    | 'MANAGE_SUSPENSIONS'
    | 'MANAGE_ROLES'
    | 'ADMINISTRATOR'
  >;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export interface RoleUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  colour: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  name: string;

  permissions: Array<
    | 'CREATE_POST'
    | 'READ_PUBLISHED_THREADS'
    | 'CREATE_REACTION'
    | 'MANAGE_POSTS'
    | 'MANAGE_CATEGORIES'
    | 'CREATE_INVITATION'
    | 'READ_PUBLISHED_LIBRARY'
    | 'MANAGE_LIBRARY'
    | 'SUBMIT_LIBRARY_NODE'
    | 'UPLOAD_ASSET'
    | 'MANAGE_EVENTS'
    | 'LIST_PROFILES'
    | 'READ_PROFILE'
    | 'CREATE_COLLECTION'
    | 'LIST_COLLECTIONS'
    | 'READ_COLLECTION'
    | 'MANAGE_COLLECTIONS'
    | 'COLLECTION_SUBMIT'
    | 'USE_PERSONAL_ACCESS_KEYS'
    | 'MANAGE_SETTINGS'
    | 'MANAGE_SUSPENSIONS'
    | 'MANAGE_ROLES'
    | 'ADMINISTRATOR'
  >;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export interface RoleListResponse {
  roles: Array<RoleListResponse.Role>;
}

export namespace RoleListResponse {
  export interface Role {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    colour: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    name: string;

    permissions: Array<
      | 'CREATE_POST'
      | 'READ_PUBLISHED_THREADS'
      | 'CREATE_REACTION'
      | 'MANAGE_POSTS'
      | 'MANAGE_CATEGORIES'
      | 'CREATE_INVITATION'
      | 'READ_PUBLISHED_LIBRARY'
      | 'MANAGE_LIBRARY'
      | 'SUBMIT_LIBRARY_NODE'
      | 'UPLOAD_ASSET'
      | 'MANAGE_EVENTS'
      | 'LIST_PROFILES'
      | 'READ_PROFILE'
      | 'CREATE_COLLECTION'
      | 'LIST_COLLECTIONS'
      | 'READ_COLLECTION'
      | 'MANAGE_COLLECTIONS'
      | 'COLLECTION_SUBMIT'
      | 'USE_PERSONAL_ACCESS_KEYS'
      | 'MANAGE_SETTINGS'
      | 'MANAGE_SUSPENSIONS'
      | 'MANAGE_ROLES'
      | 'ADMINISTRATOR'
    >;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
  }
}

export interface RoleCreateParams {
  colour: string;

  name: string;

  permissions: Array<
    | 'CREATE_POST'
    | 'READ_PUBLISHED_THREADS'
    | 'CREATE_REACTION'
    | 'MANAGE_POSTS'
    | 'MANAGE_CATEGORIES'
    | 'CREATE_INVITATION'
    | 'READ_PUBLISHED_LIBRARY'
    | 'MANAGE_LIBRARY'
    | 'SUBMIT_LIBRARY_NODE'
    | 'UPLOAD_ASSET'
    | 'MANAGE_EVENTS'
    | 'LIST_PROFILES'
    | 'READ_PROFILE'
    | 'CREATE_COLLECTION'
    | 'LIST_COLLECTIONS'
    | 'READ_COLLECTION'
    | 'MANAGE_COLLECTIONS'
    | 'COLLECTION_SUBMIT'
    | 'USE_PERSONAL_ACCESS_KEYS'
    | 'MANAGE_SETTINGS'
    | 'MANAGE_SUSPENSIONS'
    | 'MANAGE_ROLES'
    | 'ADMINISTRATOR'
  >;
}

export interface RoleUpdateParams {
  colour?: string;

  name?: string;

  permissions?: Array<
    | 'CREATE_POST'
    | 'READ_PUBLISHED_THREADS'
    | 'CREATE_REACTION'
    | 'MANAGE_POSTS'
    | 'MANAGE_CATEGORIES'
    | 'CREATE_INVITATION'
    | 'READ_PUBLISHED_LIBRARY'
    | 'MANAGE_LIBRARY'
    | 'SUBMIT_LIBRARY_NODE'
    | 'UPLOAD_ASSET'
    | 'MANAGE_EVENTS'
    | 'LIST_PROFILES'
    | 'READ_PROFILE'
    | 'CREATE_COLLECTION'
    | 'LIST_COLLECTIONS'
    | 'READ_COLLECTION'
    | 'MANAGE_COLLECTIONS'
    | 'COLLECTION_SUBMIT'
    | 'USE_PERSONAL_ACCESS_KEYS'
    | 'MANAGE_SETTINGS'
    | 'MANAGE_SUSPENSIONS'
    | 'MANAGE_ROLES'
    | 'ADMINISTRATOR'
  >;
}

export declare namespace Roles {
  export {
    type RoleCreateResponse as RoleCreateResponse,
    type RoleRetrieveResponse as RoleRetrieveResponse,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleListResponse as RoleListResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
  };
}
