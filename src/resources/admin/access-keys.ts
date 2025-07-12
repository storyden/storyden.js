// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class AccessKeys extends APIResource {
  /**
   * List all access keys for the entire instance. This is only available to admin
   * accounts and is used to manage access keys from other accounts.
   *
   * @example
   * ```ts
   * const accessKeys = await client.admin.accessKeys.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AccessKeyListResponse> {
    return this._client.get('/admin/access-keys', options);
  }

  /**
   * Revoke an access key. This will immediately invalidate the key and it will no
   * longer be usable for authentication.
   *
   * @example
   * ```ts
   * await client.admin.accessKeys.revoke(
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  revoke(accessKeyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/admin/access-keys/${accessKeyId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AccessKeyListResponse {
  keys: Array<AccessKeyListResponse.Key>;
}

export namespace AccessKeyListResponse {
  /**
   * An owned access key is a key that has been already issued to an account, it is
   * used specifically for administrator listing of all access keys where it's
   * necessary to include the account that created the key.
   */
  export interface Key extends Shared.CommonProperties {
    /**
     * A minimal reference to an account.
     */
    created_by: Shared.ProfileReference;

    enabled: boolean;

    /**
     * The name of the access key.
     */
    name: string;

    /**
     * When the access key expires, if null, it never expires.
     */
    expires_at?: string;
  }
}

export declare namespace AccessKeys {
  export { type AccessKeyListResponse as AccessKeyListResponse };
}
