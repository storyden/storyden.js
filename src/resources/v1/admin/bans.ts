// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BansAPI from './bans';

export class Bans extends APIResource {
  /**
   * Suspend an account - soft delete. This disables the ability for the account
   * owner to log in and use the platform. It keeps the account on record for linkage
   * to content so UI doesn't break. It does not change anything else about the
   * account such as the avatar, name, etc.
   */
  create(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<BanCreateResponse> {
    return this._client.post(`/v1/admin/bans/${accountHandle}`, options);
  }

  /**
   * Given the account is suspended, remove the suspended state.
   */
  delete(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<BanDeleteResponse> {
    return this._client.delete(`/v1/admin/bans/${accountHandle}`, options);
  }
}

export interface BanCreateResponse {
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

export interface BanDeleteResponse {
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
  export import BanCreateResponse = BansAPI.BanCreateResponse;
  export import BanDeleteResponse = BansAPI.BanDeleteResponse;
}
