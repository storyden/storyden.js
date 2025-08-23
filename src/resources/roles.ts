// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

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

export interface RoleCreateResponse extends Shared.CommonProperties {
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

export interface RoleRetrieveResponse extends Shared.CommonProperties {
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

export interface RoleUpdateResponse extends Shared.CommonProperties {
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

export interface RoleListResponse {
  roles: Array<RoleListResponse.Role>;
}

export namespace RoleListResponse {
  export interface Role extends Shared.CommonProperties {
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
