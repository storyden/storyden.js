// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

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
  export interface Key {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * A minimal reference to an account.
     */
    created_by: Key.CreatedBy;

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

  export namespace Key {
    /**
     * A minimal reference to an account.
     */
    export interface CreatedBy {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The unique @ handle of an account.
       */
      handle: string;

      /**
       * The time the resource was created.
       */
      joined: string;

      /**
       * The account owners display name.
       */
      name: string;

      roles: Array<CreatedBy.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace CreatedBy {
      export interface Role {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * One role may be designated as a badge for the account. If ture, it should be
         * displayed prominently on the profile or in other contexts.
         */
        badge: boolean;

        colour: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        /**
         * There are two built-in roles: everyone and admin, this boolean flag is set if
         * this role is one of the default built-in roles.
         */
        default: boolean;

        name: string;

        permissions: Array<
          | 'CREATE_POST'
          | 'READ_PUBLISHED_THREADS'
          | 'CREATE_REACTION'
          | 'MANAGE_POSTS'
          | 'MANAGE_CATEGORIES'
          | 'CREATE_INVITATION'
          | 'READ_PUBLISHED_LIBRARY'
          | 'MANAGE_LIBRARY'
          | 'SUBMIT_LIBRARY_NODE'
          | 'UPLOAD_ASSET'
          | 'MANAGE_EVENTS'
          | 'LIST_PROFILES'
          | 'READ_PROFILE'
          | 'CREATE_COLLECTION'
          | 'LIST_COLLECTIONS'
          | 'READ_COLLECTION'
          | 'MANAGE_COLLECTIONS'
          | 'COLLECTION_SUBMIT'
          | 'USE_PERSONAL_ACCESS_KEYS'
          | 'MANAGE_SETTINGS'
          | 'MANAGE_SUSPENSIONS'
          | 'MANAGE_ROLES'
          | 'ADMINISTRATOR'
        >;

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
    }
  }
}

export declare namespace AccessKeys {
  export { type AccessKeyListResponse as AccessKeyListResponse };
}
