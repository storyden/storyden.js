// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AuthMethodsAPI from './auth-methods';
import { AuthMethodDeleteResponse, AuthMethodRetrieveAuthMethodsResponse, AuthMethods } from './auth-methods';
import * as EmailsAPI from './emails';
import { EmailCreateParams, Emails } from './emails';
import { type BlobLike } from '../../../uploads';

export class Self extends APIResource {
  authMethods: AuthMethodsAPI.AuthMethods = new AuthMethodsAPI.AuthMethods(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);

  /**
   * Upload an avatar for the authenticated account.
   *
   * @example
   * ```ts
   * await client.accounts.self.avatar(
   *   fs.createReadStream('path/to/file'),
   * );
   * ```
   */
  avatar(body?: SelfAvatarParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  avatar(options?: Core.RequestOptions): Core.APIPromise<void>;
  avatar(
    body?: SelfAvatarParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.avatar(undefined, body);
    }
    return this._client.post('/accounts/self/avatar', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }
}

export type SelfAvatarParams = string | ArrayBufferView | ArrayBuffer | BlobLike;

Self.AuthMethods = AuthMethods;
Self.Emails = Emails;

export declare namespace Self {
  export { type SelfAvatarParams as SelfAvatarParams };

  export {
    AuthMethods as AuthMethods,
    type AuthMethodDeleteResponse as AuthMethodDeleteResponse,
    type AuthMethodRetrieveAuthMethodsResponse as AuthMethodRetrieveAuthMethodsResponse,
  };

  export { Emails as Emails, type EmailCreateParams as EmailCreateParams };
}
