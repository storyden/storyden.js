// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import { isRequestOptions } from 'Storyden/core';
import * as AccountsAPI from 'Storyden/resources/v1/accounts/accounts';
import * as AuthMethodsAPI from 'Storyden/resources/v1/accounts/auth-methods';
import * as AvatarAPI from 'Storyden/resources/v1/accounts/avatar';

export class Accounts extends APIResource {
  authMethods: AuthMethodsAPI.AuthMethods = new AuthMethodsAPI.AuthMethods(this._client);
  avatar: AvatarAPI.Avatar = new AvatarAPI.Avatar(this._client);

  /**
   * Get the information for the currently authenticated account.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<AccountRetrieveResponse> {
    return this._client.get('/v1/accounts', options);
  }

  /**
   * Update the information for the currently authenticated account.
   */
  update(body?: AccountUpdateParams, options?: Core.RequestOptions): Core.APIPromise<AccountUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<AccountUpdateResponse>;
  update(
    body: AccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.patch('/v1/accounts', { body, ...options });
  }
}

export interface AccountRetrieveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

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

export interface AccountUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

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

export interface AccountUpdateParams {
  bio?: string;

  /**
   * The unique @ handle of an account.
   */
  handle?: string;

  /**
   * A list of tags IDs.
   */
  interests?: Array<string>;

  /**
   * The account owners display name.
   */
  name?: string;
}

export namespace Accounts {
  export import AccountRetrieveResponse = AccountsAPI.AccountRetrieveResponse;
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountUpdateParams = AccountsAPI.AccountUpdateParams;
  export import AuthMethods = AuthMethodsAPI.AuthMethods;
  export import AuthMethodListResponse = AuthMethodsAPI.AuthMethodListResponse;
  export import AuthMethodDeleteResponse = AuthMethodsAPI.AuthMethodDeleteResponse;
  export import Avatar = AvatarAPI.Avatar;
  export import AvatarCreateParams = AvatarAPI.AvatarCreateParams;
}
