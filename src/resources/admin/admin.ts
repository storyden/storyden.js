// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AccessKeysAPI from './access-keys';
import { AccessKeyListResponse, AccessKeys } from './access-keys';
import * as BansAPI from './bans';
import { BanRemoveSuspensionResponse, BanSuspendAccountResponse, Bans } from './bans';

export class Admin extends APIResource {
  bans: BansAPI.Bans = new BansAPI.Bans(this._client);
  accessKeys: AccessKeysAPI.AccessKeys = new AccessKeysAPI.AccessKeys(this._client);

  /**
   * Update non-env configuration settings for installation.
   *
   * @example
   * ```ts
   * const response = await client.admin.updateSettings();
   * ```
   */
  updateSettings(
    body?: AdminUpdateSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminUpdateSettingsResponse>;
  updateSettings(options?: Core.RequestOptions): Core.APIPromise<AdminUpdateSettingsResponse>;
  updateSettings(
    body: AdminUpdateSettingsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminUpdateSettingsResponse> {
    if (isRequestOptions(body)) {
      return this.updateSettings({}, body);
    }
    return this._client.patch('/admin', { body, ...options });
  }
}

/**
 * Storyden installation and administration settings.
 */
export interface AdminUpdateSettingsResponse {
  accent_colour: string;

  authentication_mode: 'handle' | 'email' | 'phone';

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content: string;

  description: string;

  title: string;

  /**
   * Arbitrary metadata for the resource.
   */
  metadata?: { [key: string]: unknown };
}

export interface AdminUpdateSettingsParams {
  accent_colour?: string;

  authentication_mode?: 'handle' | 'email' | 'phone';

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content?: string;

  description?: string;

  /**
   * The settings metadata may be used by frontends to store arbitrary
   * vendor-specific configuration data specific to the frontend itself.
   */
  metadata?: { [key: string]: unknown };

  title?: string;
}

Admin.Bans = Bans;
Admin.AccessKeys = AccessKeys;

export declare namespace Admin {
  export {
    type AdminUpdateSettingsResponse as AdminUpdateSettingsResponse,
    type AdminUpdateSettingsParams as AdminUpdateSettingsParams,
  };

  export {
    Bans as Bans,
    type BanRemoveSuspensionResponse as BanRemoveSuspensionResponse,
    type BanSuspendAccountResponse as BanSuspendAccountResponse,
  };

  export { AccessKeys as AccessKeys, type AccessKeyListResponse as AccessKeyListResponse };
}
