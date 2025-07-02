// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
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

export interface RoleUpdateResponse extends Shared.CommonProperties {
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

export interface RoleDeleteResponse extends Shared.CommonProperties {
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

Roles.Badge = Badge;

export declare namespace Roles {
  export { type RoleUpdateResponse as RoleUpdateResponse, type RoleDeleteResponse as RoleDeleteResponse };

  export {
    Badge as Badge,
    type BadgeCreateResponse as BadgeCreateResponse,
    type BadgeDeleteAllResponse as BadgeDeleteAllResponse,
  };
}
