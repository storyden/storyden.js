// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PasswordAPI from './password';

export class Password extends APIResource {
  /**
   * Given the requesting account does not have a password authentication, add a
   * password authentication method to it with the given password.
   */
  create(body: PasswordCreateParams, options?: Core.RequestOptions): Core.APIPromise<PasswordCreateResponse> {
    return this._client.post('/v1/auth/password', { body, ...options });
  }

  /**
   * Given the requesting account has a password authentication, update the password
   * on file.
   */
  update(body: PasswordUpdateParams, options?: Core.RequestOptions): Core.APIPromise<PasswordUpdateResponse> {
    return this._client.patch('/v1/auth/password', { body, ...options });
  }

  /**
   * Sign in to an existing account with a username and password.
   */
  signin(body: PasswordSigninParams, options?: Core.RequestOptions): Core.APIPromise<PasswordSigninResponse> {
    return this._client.post('/v1/auth/password/signin', { body, ...options });
  }
}

export interface PasswordCreateResponse {
  id: string;
}

export interface PasswordUpdateResponse {
  id: string;
}

export interface PasswordSigninResponse {
  id: string;
}

export interface PasswordCreateParams {
  password: string;
}

export interface PasswordUpdateParams {
  new: string;

  old: string;
}

export interface PasswordSigninParams {
  token: string;

  identifier: string;
}

export namespace Password {
  export import PasswordCreateResponse = PasswordAPI.PasswordCreateResponse;
  export import PasswordUpdateResponse = PasswordAPI.PasswordUpdateResponse;
  export import PasswordSigninResponse = PasswordAPI.PasswordSigninResponse;
  export import PasswordCreateParams = PasswordAPI.PasswordCreateParams;
  export import PasswordUpdateParams = PasswordAPI.PasswordUpdateParams;
  export import PasswordSigninParams = PasswordAPI.PasswordSigninParams;
}
