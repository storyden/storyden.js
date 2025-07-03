// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

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

export interface BanRemoveSuspensionResponse extends Shared.CommonProperties {
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

export interface BanSuspendAccountResponse extends Shared.CommonProperties {
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

export declare namespace Bans {
  export {
    type BanRemoveSuspensionResponse as BanRemoveSuspensionResponse,
    type BanSuspendAccountResponse as BanSuspendAccountResponse,
  };
}
