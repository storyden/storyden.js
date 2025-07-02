// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';

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

export interface BadgeCreateResponse extends Shared.CommonProperties {
  admin: boolean;

  /**
   * The rich-text bio for an account's public profile.
   */
  bio: string;

  /**
   * If the instance is configured to not use any email features for auth or
   * transactional/content communications, this will always be empty.
   */
  email_addresses: Array<Shared.AccountEmailAddress>;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * The time the resource was created.
   */
  joined: string;

  links: Array<Shared.ProfileExternalLink>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<Shared.AccountRole>;

  verified_status: 'none' | 'verified_email';

  /**
   * A list of tags.
   */
  interests?: Array<Shared.TagReferenceProps>;

  /**
   * A minimal reference to an account.
   */
  invited_by?: Shared.ProfileReference;

  notifications?: number;

  /**
   * The time the resource was created.
   */
  suspended?: string;
}

export interface BadgeDeleteAllResponse extends Shared.CommonProperties {
  admin: boolean;

  /**
   * The rich-text bio for an account's public profile.
   */
  bio: string;

  /**
   * If the instance is configured to not use any email features for auth or
   * transactional/content communications, this will always be empty.
   */
  email_addresses: Array<Shared.AccountEmailAddress>;

  /**
   * The unique @ handle of an account.
   */
  handle: string;

  /**
   * The time the resource was created.
   */
  joined: string;

  links: Array<Shared.ProfileExternalLink>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<Shared.AccountRole>;

  verified_status: 'none' | 'verified_email';

  /**
   * A list of tags.
   */
  interests?: Array<Shared.TagReferenceProps>;

  /**
   * A minimal reference to an account.
   */
  invited_by?: Shared.ProfileReference;

  notifications?: number;

  /**
   * The time the resource was created.
   */
  suspended?: string;
}

export declare namespace Badge {
  export {
    type BadgeCreateResponse as BadgeCreateResponse,
    type BadgeDeleteAllResponse as BadgeDeleteAllResponse,
  };
}
