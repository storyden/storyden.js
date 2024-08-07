// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BansAPI from './bans';

export class Bans extends APIResource {
  /**
   * Given the account is suspended, remove the suspended state.
   */
  deleteSuspended(
    accountHandle: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BanDeleteSuspendedResponse> {
    return this._client.delete(`/v1/admin/bans/${accountHandle}`, options);
  }

  /**
   * Suspend an account - soft delete. This disables the ability for the account
   * owner to log in and use the platform. It keeps the account on record for linkage
   * to content so UI doesn't break. It does not change anything else about the
   * account such as the avatar, name, etc.
   */
  suspend(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<BanSuspendResponse> {
    return this._client.post(`/v1/admin/bans/${accountHandle}`, options);
  }
}

export interface BanDeleteSuspendedResponse {
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

export interface BanSuspendResponse {
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

export namespace Bans {
  export import BanDeleteSuspendedResponse = BansAPI.BanDeleteSuspendedResponse;
  export import BanSuspendResponse = BansAPI.BanSuspendResponse;
}
