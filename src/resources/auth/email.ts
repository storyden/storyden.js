// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Email extends APIResource {
  /**
   * Sign in to an existing account with an email and optional password. The
   * behaviour of this endpoint depends on how the instance is configured. If
   * email+password is the preferred method, a cookie is returned on success but if
   * magic links are preferred, the endpoint will start the code flow.
   *
   * @example
   * ```ts
   * const response = await client.auth.email.signin({
   *   email: 'hello@storyden.org',
   * });
   * ```
   */
  signin(body: EmailSigninParams, options?: Core.RequestOptions): Core.APIPromise<EmailSigninResponse> {
    return this._client.post('/auth/email/signin', { body, ...options });
  }

  /**
   * Register a new account with an email and optional password. The password
   * requirement is dependent on how the instance is configured for account
   * authentication with email addresses (password vs magic link.)
   *
   * When the email address has not been registered, this endpoint will send a
   * verification email however it will also return a session cookie to facilitate
   * pre-verification usage of the platform. If the email address already exists, no
   * session cookie will be returned in order to prevent arbitrary account control by
   * a malicious actor. In this case, the email will be sent again with the same OTP
   * for the case where the user has cleared their cookies or switched device but
   * hasn't yet verified due to missing the email or a delivery failure. In this
   * sense, the endpoint can act as a "resend verification email" operation as well
   * as registration.
   *
   * In the first case, a 200 response is provided with the session cookie, in the
   * second case, a 422 response is provided without a session cookie.
   *
   * Given that this is an unauthenticated endpoint that triggers an email to be sent
   * to any public address, it MUST be heavily rate limited.
   *
   * @example
   * ```ts
   * const response = await client.auth.email.signup({
   *   email: 'hello@storyden.org',
   * });
   * ```
   */
  signup(params: EmailSignupParams, options?: Core.RequestOptions): Core.APIPromise<EmailSignupResponse> {
    const { invitation_id, ...body } = params;
    return this._client.post('/auth/email/signup', { query: { invitation_id }, body, ...options });
  }

  /**
   * Verify an email address using a token that was emailed to one of the account's
   * email addresses either set via sign up or added later.
   *
   * @example
   * ```ts
   * const response = await client.auth.email.verify({
   *   code: '728562',
   *   email: 'hello@storyden.org',
   * });
   * ```
   */
  verify(body: EmailVerifyParams, options?: Core.RequestOptions): Core.APIPromise<EmailVerifyResponse> {
    return this._client.post('/auth/email/verify', { body, ...options });
  }
}

export interface EmailSigninResponse {
  id: string;
}

export interface EmailSignupResponse {
  id: string;
}

export interface EmailVerifyResponse {
  id: string;
}

export interface EmailSigninParams {
  /**
   * A valid email address.
   */
  email: string;

  /**
   * The unique @ handle of an account.
   */
  handle?: string;
}

export interface EmailSignupParams {
  /**
   * Body param: A valid email address.
   */
  email: string;

  /**
   * Query param: Unique invitation ID.
   */
  invitation_id?: string;

  /**
   * Body param: The unique @ handle of an account.
   */
  handle?: string;
}

export interface EmailVerifyParams {
  code: string;

  /**
   * The email address to be verified, only necessary for when submitting a
   * verification without a session cookie present.
   */
  email: string;
}

export declare namespace Email {
  export {
    type EmailSigninResponse as EmailSigninResponse,
    type EmailSignupResponse as EmailSignupResponse,
    type EmailVerifyResponse as EmailVerifyResponse,
    type EmailSigninParams as EmailSigninParams,
    type EmailSignupParams as EmailSignupParams,
    type EmailVerifyParams as EmailVerifyParams,
  };
}
