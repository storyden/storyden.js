// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AdminAPI from './admin';
import * as BansAPI from './bans';

export class Admin extends APIResource {
  bans: BansAPI.Bans = new BansAPI.Bans(this._client);

  /**
   * Update non-env configuration settings for installation.
   */
  update(body?: AdminUpdateParams, options?: Core.RequestOptions): Core.APIPromise<AdminUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<AdminUpdateResponse>;
  update(
    body: AdminUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.patch('/v1/admin', { body, ...options });
  }
}

/**
 * Storyden installation and administration settings.
 */
export interface AdminUpdateResponse {
  accent_colour: string;

  description: string;

  title: string;
}

export interface AdminUpdateParams {
  accent_colour?: string;

  description?: string;

  title?: string;
}

export namespace Admin {
  export import AdminUpdateResponse = AdminAPI.AdminUpdateResponse;
  export import AdminUpdateParams = AdminAPI.AdminUpdateParams;
  export import Bans = BansAPI.Bans;
  export import BanCreateResponse = BansAPI.BanCreateResponse;
  export import BanDeleteResponse = BansAPI.BanDeleteResponse;
}
