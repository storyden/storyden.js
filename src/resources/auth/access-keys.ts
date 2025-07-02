// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class AccessKeys extends APIResource {
  /**
   * Create a new access key for the authenticated account. Access keys are used to
   * authenticate API requests on behalf of the account in a more granular and
   * service-friendly way than a session cookie.
   *
   * Access keys share the same roles and permissions as the owning account and only
   * provide a way to use an `Authorization` header as an way of interacting with the
   * Storyden API.
   *
   * Access keys also allow an expiry date to be set to limit how long a key can be
   * used to authenticate against the API.
   *
   * @example
   * ```ts
   * const accessKey = await client.auth.accessKeys.create({
   *   name: 'name',
   * });
   * ```
   */
  create(
    body: AccessKeyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessKeyCreateResponse> {
    return this._client.post('/auth/access-keys', { body, ...options });
  }

  /**
   * List all access keys for the authenticated account or all access keys that have
   * been issued for the entire instance if and only if the request parameters
   * specify all keys and the requesting account is an admin.
   *
   * @example
   * ```ts
   * const accessKeys = await client.auth.accessKeys.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AccessKeyListResponse> {
    return this._client.get('/auth/access-keys', options);
  }

  /**
   * Revoke an access key. This will immediately invalidate the key and it will no
   * longer be usable for authentication.
   *
   * @example
   * ```ts
   * await client.auth.accessKeys.revoke('cc5lnd2s1s4652adtu50');
   * ```
   */
  revoke(accessKeyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/auth/access-keys/${accessKeyId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * An access key issued to an account, this is the full access key object including
 * the secret. This is only exposed upon creation of the key and the secret value
 * is never stored. The caller that receives this object is responsible for
 * securely storing the secret value for later use.
 */
export interface AccessKeyCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  enabled: boolean;

  /**
   * The name of the access key.
   */
  name: string;

  /**
   * The secret key used to authenticate with the API.
   *
   * Keys are prefixed with a kind identifier, "sdpak" refers to a Storyden Personal
   * Access Key and "sdbak" refers to a Storyden Bot Access Key. The two kinds are
   * not interchangeable however they do not have behavioural differences and is
   * merely a visual cue.
   */
  secret: string;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * When the access key expires, if null, it never expires.
   */
  expires_at?: string;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export interface AccessKeyListResponse {
  keys: Array<AccessKeyListResponse.Key>;
}

export namespace AccessKeyListResponse {
  export interface Key {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    enabled: boolean;

    /**
     * The name of the access key.
     */
    name: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    /**
     * When the access key expires, if null, it never expires.
     */
    expires_at?: string;

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
  }
}

export interface AccessKeyCreateParams {
  /**
   * The name of the access key.
   */
  name: string;

  /**
   * When the access key expires, if null, it never expires.
   */
  expires_at?: string;
}

export declare namespace AccessKeys {
  export {
    type AccessKeyCreateResponse as AccessKeyCreateResponse,
    type AccessKeyListResponse as AccessKeyListResponse,
    type AccessKeyCreateParams as AccessKeyCreateParams,
  };
}
