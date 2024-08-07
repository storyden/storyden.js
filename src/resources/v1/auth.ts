// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AuthAPI from './auth';

export class Auth extends APIResource {
  /**
   * Retrieve a list of authentication providers. Storyden supports a few ways to
   * authenticate, from simple passwords to OAuth and WebAuthn. This endpoint tells a
   * client which auth capabilities are enabled.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AuthListResponse> {
    return this._client.get('/v1/auth', options);
  }

  /**
   * Remove cookies from requesting client.
   */
  logout(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/auth/logout', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Register a new account with a username and password.
   */
  passwordSignup(
    body: AuthPasswordSignupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthPasswordSignupResponse> {
    return this._client.post('/v1/auth/password/signup', { body, ...options });
  }
}

export interface AuthListResponse {
  providers: Array<AuthListResponse.Provider>;
}

export namespace AuthListResponse {
  export interface Provider {
    /**
     * The hyperlink to render for the user.
     */
    link: string;

    /**
     * The human-readable name of the provider.
     */
    name: string;

    /**
     * The slug name of the provider.
     */
    provider: string;
  }
}

export interface AuthPasswordSignupResponse {
  id: string;
}

export interface AuthPasswordSignupParams {
  token: string;

  identifier: string;
}

export namespace Auth {
  export import AuthListResponse = AuthAPI.AuthListResponse;
  export import AuthPasswordSignupResponse = AuthAPI.AuthPasswordSignupResponse;
  export import AuthPasswordSignupParams = AuthAPI.AuthPasswordSignupParams;
}
