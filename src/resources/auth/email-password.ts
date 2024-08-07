// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EmailPasswordAPI from './email-password';

export class EmailPassword extends APIResource {
  /**
   * Sign in to an existing account with a email and password.
   */
  signin(
    body: EmailPasswordSigninParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailPasswordSigninResponse> {
    return this._client.post('/v1/auth/email-password/signin', { body, ...options });
  }

  /**
   * Register a new account with a email and password.
   */
  signup(
    body: EmailPasswordSignupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailPasswordSignupResponse> {
    return this._client.post('/v1/auth/email-password/signup', { body, ...options });
  }
}

export interface EmailPasswordSigninResponse {
  id: string;
}

export interface EmailPasswordSignupResponse {
  id: string;
}

export interface EmailPasswordSigninParams {
  email: string;

  password: string;

  /**
   * The unique @ handle of an account.
   */
  handle?: string;
}

export interface EmailPasswordSignupParams {
  email: string;

  password: string;

  /**
   * The unique @ handle of an account.
   */
  handle?: string;
}

export namespace EmailPassword {
  export import EmailPasswordSigninResponse = EmailPasswordAPI.EmailPasswordSigninResponse;
  export import EmailPasswordSignupResponse = EmailPasswordAPI.EmailPasswordSignupResponse;
  export import EmailPasswordSigninParams = EmailPasswordAPI.EmailPasswordSigninParams;
  export import EmailPasswordSignupParams = EmailPasswordAPI.EmailPasswordSignupParams;
}
