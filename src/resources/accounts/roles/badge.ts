// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Badge extends APIResource {
  /**
   * Desgiantes the specified role as a badge for the profile. Only one role may be
   * set as a badge for the profile. Setting a role as a badge is entirely aesthetic
   * and does not grant any additional permissions. Roles may be created without any
   * permissions in order to be used as badges.
   *
   * @example
   * ```ts
   * const badge = await client.accounts.roles.badge.create(
   *   'southclaws',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  create(
    accountHandle: string,
    roleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BadgeCreateResponse> {
    return this._client.put(`/accounts/${accountHandle}/roles/${roleId}/badge`, options);
  }

  /**
   * Removes the badge from the profile. This does not remove the role from the
   * account, only the visual badge-status representation of the role.
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.roles.badge.deleteAll(
   *     'southclaws',
   *     'cc5lnd2s1s4652adtu50',
   *   );
   * ```
   */
  deleteAll(
    accountHandle: string,
    roleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BadgeDeleteAllResponse> {
    return this._client.delete(`/accounts/${accountHandle}/roles/${roleId}/badge`, options);
  }
}

export interface BadgeCreateResponse {
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
  email_addresses: Array<BadgeCreateResponse.EmailAddress>;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * The time the resource was created.
   */
  joined: string;

  links: Array<BadgeCreateResponse.Link>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<BadgeCreateResponse.Role>;

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
  interests?: Array<BadgeCreateResponse.Interest>;

  /**
   * A minimal reference to an account.
   */
  invited_by?: BadgeCreateResponse.InvitedBy;

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

export namespace BadgeCreateResponse {
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

export interface BadgeDeleteAllResponse {
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
  email_addresses: Array<BadgeDeleteAllResponse.EmailAddress>;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * The time the resource was created.
   */
  joined: string;

  links: Array<BadgeDeleteAllResponse.Link>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<BadgeDeleteAllResponse.Role>;

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
  interests?: Array<BadgeDeleteAllResponse.Interest>;

  /**
   * A minimal reference to an account.
   */
  invited_by?: BadgeDeleteAllResponse.InvitedBy;

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

export namespace BadgeDeleteAllResponse {
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

export declare namespace Badge {
  export {
    type BadgeCreateResponse as BadgeCreateResponse,
    type BadgeDeleteAllResponse as BadgeDeleteAllResponse,
  };
}
