// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Password extends APIResource {
  /**
   * Given the requesting account has a password authentication, update the password
   * on file.
   *
   * @example
   * ```ts
   * const password = await client.auth.password.update({
   *   new: 'password456',
   *   old: 'password123',
   * });
   * ```
   */
  update(body: PasswordUpdateParams, options?: Core.RequestOptions): Core.APIPromise<PasswordUpdateResponse> {
    return this._client.patch('/auth/password', { body, ...options });
  }

  /**
   * Given the requesting account does not have a password authentication, add a
   * password authentication method to it with the given password.
   *
   * @example
   * ```ts
   * const response = await client.auth.password.add({
   *   password: 'password123',
   * });
   * ```
   */
  add(body: PasswordAddParams, options?: Core.RequestOptions): Core.APIPromise<PasswordAddResponse> {
    return this._client.post('/auth/password', { body, ...options });
  }

  /**
   * Complete a password-reset flow using a token that was provided to the member via
   * a reset request operation such as `AuthEmailPasswordReset`.
   *
   * @example
   * ```ts
   * const response = await client.auth.password.reset({
   *   token: 'token',
   *   new: 'password456',
   * });
   * ```
   */
  reset(body: PasswordResetParams, options?: Core.RequestOptions): Core.APIPromise<PasswordResetResponse> {
    return this._client.post('/auth/password/reset', { body, ...options });
  }

  /**
   * Sign in to an existing account with a username and password.
   *
   * @example
   * ```ts
   * const response = await client.auth.password.signin({
   *   token: 'password',
   *   identifier: 'odin',
   * });
   * ```
   */
  signin(body: PasswordSigninParams, options?: Core.RequestOptions): Core.APIPromise<PasswordSigninResponse> {
    return this._client.post('/auth/password/signin', { body, ...options });
  }

  /**
   * Register a new account with a username and password.
   *
   * @example
   * ```ts
   * const response = await client.auth.password.signup({
   *   token: 'password',
   *   identifier: 'odin',
   * });
   * ```
   */
  signup(
    params: PasswordSignupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PasswordSignupResponse> {
    const { invitation_id, ...body } = params;
    return this._client.post('/auth/password/signup', { query: { invitation_id }, body, ...options });
  }
}

export interface PasswordUpdateResponse {
  id: string;
}

export interface PasswordAddResponse {
  id: string;
}

export interface PasswordResetResponse {
  id: string;
}

export interface PasswordSigninResponse {
  id: string;
}

export interface PasswordSignupResponse {
  id: string;
}

export interface PasswordUpdateParams {
  new: string;

  old: string;
}

export interface PasswordAddParams {
  password: string;
}

export interface PasswordResetParams {
  token: string;

  new: string;
}

export interface PasswordSigninParams {
  token: string;

  identifier: string;
}

export interface PasswordSignupParams {
  /**
   * Body param:
   */
  token: string;

  /**
   * Body param:
   */
  identifier: string;

  /**
   * Query param: Unique invitation ID.
   */
  invitation_id?: string;
}

export declare namespace Password {
  export {
    type PasswordUpdateResponse as PasswordUpdateResponse,
    type PasswordAddResponse as PasswordAddResponse,
    type PasswordResetResponse as PasswordResetResponse,
    type PasswordSigninResponse as PasswordSigninResponse,
    type PasswordSignupResponse as PasswordSignupResponse,
    type PasswordUpdateParams as PasswordUpdateParams,
    type PasswordAddParams as PasswordAddParams,
    type PasswordResetParams as PasswordResetParams,
    type PasswordSigninParams as PasswordSigninParams,
    type PasswordSignupParams as PasswordSignupParams,
  };
}
