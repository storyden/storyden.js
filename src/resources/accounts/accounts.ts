// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as RolesAPI from './roles/roles';
import { RoleDeleteResponse, RoleUpdateResponse, Roles } from './roles/roles';
import * as SelfAPI from './self/self';
import { Self, SelfAvatarParams } from './self/self';
import { type Response } from '../../_shims/index';

export class Accounts extends APIResource {
  self: SelfAPI.Self = new SelfAPI.Self(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  /**
   * Get the information for the currently authenticated account.
   *
   * @example
   * ```ts
   * const accounts = await client.accounts.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AccountListResponse> {
    return this._client.get('/accounts', options);
  }

  /**
   * Update the information for the currently authenticated account.
   *
   * @example
   * ```ts
   * const response = await client.accounts.patchAll();
   * ```
   */
  patchAll(
    body?: AccountPatchAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountPatchAllResponse>;
  patchAll(options?: Core.RequestOptions): Core.APIPromise<AccountPatchAllResponse>;
  patchAll(
    body: AccountPatchAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountPatchAllResponse> {
    if (isRequestOptions(body)) {
      return this.patchAll({}, body);
    }
    return this._client.patch('/accounts', { body, ...options });
  }

  /**
   * Get an avatar for the specified account.
   *
   * @example
   * ```ts
   * const response = await client.accounts.retrieveAvatar(
   *   'southclaws',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveAvatar(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/accounts/${accountHandle}/avatar`, {
      ...options,
      headers: { Accept: 'image/png', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface AccountListResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  admin: boolean;

  /**
   * The rich-text bio for an account's public profile.
   */
  bio: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  /**
   * If the instance is configured to not use any email features for auth or
   * transactional/content communications, this will always be empty.
   */
  email_addresses: Array<AccountListResponse.EmailAddress>;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * The time the resource was created.
   */
  joined: string;

  links: Array<AccountListResponse.Link>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<AccountListResponse.Role>;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  verified_status: 'none' | 'verified_email';

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * A list of tags.
   */
  interests?: Array<AccountListResponse.Interest>;

  /**
   * A minimal reference to an account.
   */
  invited_by?: AccountListResponse.InvitedBy;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  notifications?: number;

  /**
   * The time the resource was created.
   */
  suspended?: string;
}

export namespace AccountListResponse {
  export interface EmailAddress {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * A valid email address.
     */
    email_address: string;

    /**
     * Is the email address verified to be owned by the account?
     */
    verified: boolean;
  }

  export interface Link {
    text: string;

    url: string;
  }

  export interface Role {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * One role may be designated as a badge for the account. If ture, it should be
     * displayed prominently on the profile or in other contexts.
     */
    badge: boolean;

    colour: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    /**
     * There are two built-in roles: everyone and admin, this boolean flag is set if
     * this role is one of the default built-in roles.
     */
    default: boolean;

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

  /**
   * A minimal representation of a tag for use in most contexts where you don't need
   * the full list of items associated with the tag.
   */
  export interface Interest {
    /**
     * The colour of a tag.
     */
    colour: string;

    /**
     * The number of items tagged with this tag.
     */
    item_count: number;

    /**
     * The name of a tag.
     */
    name: string;
  }

  /**
   * A minimal reference to an account.
   */
  export interface InvitedBy {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The unique @ handle of an account.
     */
    handle: string;

    /**
     * The time the resource was created.
     */
    joined: string;

    /**
     * The account owners display name.
     */
    name: string;

    roles: Array<InvitedBy.Role>;

    /**
     * The time the resource was created.
     */
    suspended?: string;
  }

  export namespace InvitedBy {
    export interface Role {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * One role may be designated as a badge for the account. If ture, it should be
       * displayed prominently on the profile or in other contexts.
       */
      badge: boolean;

      colour: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      /**
       * There are two built-in roles: everyone and admin, this boolean flag is set if
       * this role is one of the default built-in roles.
       */
      default: boolean;

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
}

export interface AccountPatchAllResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  admin: boolean;

  /**
   * The rich-text bio for an account's public profile.
   */
  bio: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  /**
   * If the instance is configured to not use any email features for auth or
   * transactional/content communications, this will always be empty.
   */
  email_addresses: Array<AccountPatchAllResponse.EmailAddress>;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * The time the resource was created.
   */
  joined: string;

  links: Array<AccountPatchAllResponse.Link>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<AccountPatchAllResponse.Role>;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  verified_status: 'none' | 'verified_email';

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * A list of tags.
   */
  interests?: Array<AccountPatchAllResponse.Interest>;

  /**
   * A minimal reference to an account.
   */
  invited_by?: AccountPatchAllResponse.InvitedBy;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  notifications?: number;

  /**
   * The time the resource was created.
   */
  suspended?: string;
}

export namespace AccountPatchAllResponse {
  export interface EmailAddress {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * A valid email address.
     */
    email_address: string;

    /**
     * Is the email address verified to be owned by the account?
     */
    verified: boolean;
  }

  export interface Link {
    text: string;

    url: string;
  }

  export interface Role {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * One role may be designated as a badge for the account. If ture, it should be
     * displayed prominently on the profile or in other contexts.
     */
    badge: boolean;

    colour: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    /**
     * There are two built-in roles: everyone and admin, this boolean flag is set if
     * this role is one of the default built-in roles.
     */
    default: boolean;

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

  /**
   * A minimal representation of a tag for use in most contexts where you don't need
   * the full list of items associated with the tag.
   */
  export interface Interest {
    /**
     * The colour of a tag.
     */
    colour: string;

    /**
     * The number of items tagged with this tag.
     */
    item_count: number;

    /**
     * The name of a tag.
     */
    name: string;
  }

  /**
   * A minimal reference to an account.
   */
  export interface InvitedBy {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The unique @ handle of an account.
     */
    handle: string;

    /**
     * The time the resource was created.
     */
    joined: string;

    /**
     * The account owners display name.
     */
    name: string;

    roles: Array<InvitedBy.Role>;

    /**
     * The time the resource was created.
     */
    suspended?: string;
  }

  export namespace InvitedBy {
    export interface Role {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * One role may be designated as a badge for the account. If ture, it should be
       * displayed prominently on the profile or in other contexts.
       */
      badge: boolean;

      colour: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      /**
       * There are two built-in roles: everyone and admin, this boolean flag is set if
       * this role is one of the default built-in roles.
       */
      default: boolean;

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
}

export interface AccountPatchAllParams {
  /**
   * The rich-text bio for an account's public profile.
   */
  bio?: string;

  /**
   * The unique @ handle of an account.
   */
  handle?: string;

  interests?: Array<string>;

  links?: Array<AccountPatchAllParams.Link>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name?: string;
}

export namespace AccountPatchAllParams {
  export interface Link {
    text: string;

    url: string;
  }
}

Accounts.Self = Self;
Accounts.Roles = Roles;

export declare namespace Accounts {
  export {
    type AccountListResponse as AccountListResponse,
    type AccountPatchAllResponse as AccountPatchAllResponse,
    type AccountPatchAllParams as AccountPatchAllParams,
  };

  export { Self as Self, type SelfAvatarParams as SelfAvatarParams };

  export {
    Roles as Roles,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleDeleteResponse as RoleDeleteResponse,
  };
}
