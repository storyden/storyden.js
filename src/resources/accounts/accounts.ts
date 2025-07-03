// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
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

export interface AccountListResponse extends Shared.CommonProperties {
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

export interface AccountPatchAllResponse extends Shared.CommonProperties {
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

  links?: Array<Shared.ProfileExternalLink>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name?: string;
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
