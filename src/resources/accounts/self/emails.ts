// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Emails extends APIResource {
  /**
   * Add an email address to the authenticated account.
   *
   * @example
   * ```ts
   * const email = await client.accounts.self.emails.create({
   *   email_address: 'hello@storyden.org',
   * });
   * ```
   */
  create(body: EmailCreateParams, options?: Core.RequestOptions): Core.APIPromise<EmailCreateResponse> {
    return this._client.post('/accounts/self/emails', { body, ...options });
  }

  /**
   * Remove an email address from the authenticated account.
   *
   * @example
   * ```ts
   * await client.accounts.self.emails.delete(
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  delete(emailAddressId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/accounts/self/emails/${emailAddressId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface EmailCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * A valid email address.
   */
  email_address: string;

  /**
   * Is the email address verified to be owned by the account?
   */
  verified: boolean;
}

export interface EmailCreateParams {
  /**
   * A valid email address.
   */
  email_address: string;
}

export declare namespace Emails {
  export { type EmailCreateResponse as EmailCreateResponse, type EmailCreateParams as EmailCreateParams };
}
