// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Bans extends APIResource {
  /**
   * Given the account is suspended, remove the suspended state.
   *
   * @example
   * ```ts
   * const response = await client.admin.bans.removeSuspension(
   *   'southclaws',
   * );
   * ```
   */
  removeSuspension(
    accountHandle: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BanRemoveSuspensionResponse> {
    return this._client.delete(`/admin/bans/${accountHandle}`, options);
  }

  /**
   * Suspend an account - soft delete. This disables the ability for the account
   * owner to log in and use the platform. It keeps the account on record for linkage
   * to content so UI doesn't break. It does not change anything else about the
   * account such as the avatar, name, etc.
   *
   * @example
   * ```ts
   * const response = await client.admin.bans.suspendAccount(
   *   'southclaws',
   * );
   * ```
   */
  suspendAccount(
    accountHandle: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BanSuspendAccountResponse> {
    return this._client.post(`/admin/bans/${accountHandle}`, options);
  }
}

export interface BanRemoveSuspensionResponse {
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
  email_addresses: Array<BanRemoveSuspensionResponse.EmailAddress>;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * The time the resource was created.
   */
  joined: string;

  links: Array<BanRemoveSuspensionResponse.Link>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<BanRemoveSuspensionResponse.Role>;

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
  interests?: Array<BanRemoveSuspensionResponse.Interest>;

  /**
   * A minimal reference to an account.
   */
  invited_by?: BanRemoveSuspensionResponse.InvitedBy;

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

export namespace BanRemoveSuspensionResponse {
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

export interface BanSuspendAccountResponse {
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
  email_addresses: Array<BanSuspendAccountResponse.EmailAddress>;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * The time the resource was created.
   */
  joined: string;

  links: Array<BanSuspendAccountResponse.Link>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<BanSuspendAccountResponse.Role>;

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
  interests?: Array<BanSuspendAccountResponse.Interest>;

  /**
   * A minimal reference to an account.
   */
  invited_by?: BanSuspendAccountResponse.InvitedBy;

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

export namespace BanSuspendAccountResponse {
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

export declare namespace Bans {
  export {
    type BanRemoveSuspensionResponse as BanRemoveSuspensionResponse,
    type BanSuspendAccountResponse as BanSuspendAccountResponse,
  };
}
