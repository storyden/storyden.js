// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BadgeAPI from './badge';
import { Badge, BadgeCreateResponse, BadgeDeleteAllResponse } from './badge';

export class Roles extends APIResource {
  badge: BadgeAPI.Badge = new BadgeAPI.Badge(this._client);

  /**
   * Adds a role to an account. Members without the MANAGE_ROLES permission cannot
   * use this operation.
   *
   * @example
   * ```ts
   * const role = await client.accounts.roles.update(
   *   'southclaws',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  update(
    accountHandle: string,
    roleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleUpdateResponse> {
    return this._client.put(`/accounts/${accountHandle}/roles/${roleId}`, options);
  }

  /**
   * Removes a role from an account. Members without the MANAGE_ROLES cannot use this
   * operation. Admins cannot remove the admin role from themselves.
   *
   * @example
   * ```ts
   * const role = await client.accounts.roles.delete(
   *   'southclaws',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  delete(
    accountHandle: string,
    roleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleDeleteResponse> {
    return this._client.delete(`/accounts/${accountHandle}/roles/${roleId}`, options);
  }
}

export interface RoleUpdateResponse {
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
  email_addresses: Array<RoleUpdateResponse.EmailAddress>;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * The time the resource was created.
   */
  joined: string;

  links: Array<RoleUpdateResponse.Link>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<RoleUpdateResponse.Role>;

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
  interests?: Array<RoleUpdateResponse.Interest>;

  /**
   * A minimal reference to an account.
   */
  invited_by?: RoleUpdateResponse.InvitedBy;

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

export namespace RoleUpdateResponse {
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

export interface RoleDeleteResponse {
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
  email_addresses: Array<RoleDeleteResponse.EmailAddress>;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * The time the resource was created.
   */
  joined: string;

  links: Array<RoleDeleteResponse.Link>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<RoleDeleteResponse.Role>;

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
  interests?: Array<RoleDeleteResponse.Interest>;

  /**
   * A minimal reference to an account.
   */
  invited_by?: RoleDeleteResponse.InvitedBy;

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

export namespace RoleDeleteResponse {
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

Roles.Badge = Badge;

export declare namespace Roles {
  export { type RoleUpdateResponse as RoleUpdateResponse, type RoleDeleteResponse as RoleDeleteResponse };

  export {
    Badge as Badge,
    type BadgeCreateResponse as BadgeCreateResponse,
    type BadgeDeleteAllResponse as BadgeDeleteAllResponse,
  };
}
