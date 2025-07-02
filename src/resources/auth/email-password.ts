// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class EmailPassword extends APIResource {
  /**
   * Request password reset email to be sent to the specified email address.
   *
   * @example
   * ```ts
   * await client.auth.emailPassword.requestReset({
   *   email: 'hello@storyden.org',
   *   token_url: { query: 'query', url: 'url' },
   * });
   * ```
   */
  requestReset(body: EmailPasswordRequestResetParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/auth/email-password/reset', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Sign in to an existing account with a email and password.
   *
   * @example
   * ```ts
   * const response = await client.auth.emailPassword.signin({
   *   email: 'hello@storyden.org',
   *   password: 'password',
   * });
   * ```
   */
  signin(
    body: EmailPasswordSigninParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailPasswordSigninResponse> {
    return this._client.post('/auth/email-password/signin', { body, ...options });
  }

  /**
   * Register a new account with a email and password.
   *
   * @example
   * ```ts
   * const response = await client.auth.emailPassword.signup({
   *   email: 'hello@storyden.org',
   *   password: 'password',
   * });
   * ```
   */
  signup(
    params: EmailPasswordSignupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailPasswordSignupResponse> {
    const { invitation_id, ...body } = params;
    return this._client.post('/auth/email-password/signup', { query: { invitation_id }, body, ...options });
  }
}

export interface EmailPasswordSigninResponse {
  id: string;
}

export interface EmailPasswordSignupResponse {
  id: string;
}

export interface EmailPasswordRequestResetParams {
  /**
   * A valid email address.
   */
  email: string;

  token_url: EmailPasswordRequestResetParams.TokenURL;
}

export namespace EmailPasswordRequestResetParams {
  export interface TokenURL {
    /**
     * The query parameters to store the reset token in. This is a frontend client
     * specific value.
     */
    query: string;

    /**
     * The URL to include in the password reset email. This URL's host must match the
     * configured Storyden instance's web address value.
     */
    url: string;
  }
}

export interface EmailPasswordSigninParams {
  /**
   * A valid email address.
   */
  email: string;

  password: string;

  /**
   * The unique @ handle of an account.
   */
  handle?: string;
}

export interface EmailPasswordSignupParams {
  /**
   * Body param: A valid email address.
   */
  email: string;

  /**
   * Body param:
   */
  password: string;

  /**
   * Query param: Unique invitation ID.
   */
  invitation_id?: string;

  /**
   * Body param: The unique @ handle of an account.
   */
  handle?: string;
}

export declare namespace EmailPassword {
  export {
    type EmailPasswordSigninResponse as EmailPasswordSigninResponse,
    type EmailPasswordSignupResponse as EmailPasswordSignupResponse,
    type EmailPasswordRequestResetParams as EmailPasswordRequestResetParams,
    type EmailPasswordSigninParams as EmailPasswordSigninParams,
    type EmailPasswordSignupParams as EmailPasswordSignupParams,
  };
}
