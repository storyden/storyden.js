// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AuthMethodsAPI from './auth-methods';

export class AuthMethods extends APIResource {
  /**
   * Retrieve a list of authentication providers with a flag indicating which ones
   * are active for the currently authenticated account.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AuthMethodListResponse> {
    return this._client.get('/v1/accounts/self/auth-methods', options);
  }

  /**
   * Retrieve a list of authentication providers with a flag indicating which ones
   * are active for the currently authenticated account.
   */
  delete(authMethodId: string, options?: Core.RequestOptions): Core.APIPromise<AuthMethodDeleteResponse> {
    return this._client.delete(`/v1/accounts/self/auth-methods/${authMethodId}`, options);
  }
}

export interface AuthMethodListResponse {
  active: Array<AuthMethodListResponse.Active>;

  available: Array<AuthMethodListResponse.Available>;
}

export namespace AuthMethodListResponse {
  /**
   * An authentication method is an active instance of an authentication provider
   * associated with an account. Use this to display a user's active authentication
   * methods so they can edit or remove it.
   */
  export interface Active {
    /**
     * The internal unique ID this method has.
     */
    id: string;

    /**
     * When this auth method was registered to the account.
     */
    created_at: string;

    /**
     * The external identifier (third party ID or device ID)
     */
    identifier: string;

    /**
     * The personal name given to the method.
     */
    name: string;

    provider: Active.Provider;
  }

  export namespace Active {
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

  export interface Available {
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

export interface AuthMethodDeleteResponse {
  active: Array<AuthMethodDeleteResponse.Active>;

  available: Array<AuthMethodDeleteResponse.Available>;
}

export namespace AuthMethodDeleteResponse {
  /**
   * An authentication method is an active instance of an authentication provider
   * associated with an account. Use this to display a user's active authentication
   * methods so they can edit or remove it.
   */
  export interface Active {
    /**
     * The internal unique ID this method has.
     */
    id: string;

    /**
     * When this auth method was registered to the account.
     */
    created_at: string;

    /**
     * The external identifier (third party ID or device ID)
     */
    identifier: string;

    /**
     * The personal name given to the method.
     */
    name: string;

    provider: Active.Provider;
  }

  export namespace Active {
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

  export interface Available {
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

export namespace AuthMethods {
  export import AuthMethodListResponse = AuthMethodsAPI.AuthMethodListResponse;
  export import AuthMethodDeleteResponse = AuthMethodsAPI.AuthMethodDeleteResponse;
}
