// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class AuthMethods extends APIResource {
  /**
   * Deletes the specified authentication method from the account. This is
   * irreversible however if this authentication method is the only remaining method
   * for the account, this operation will fail with a 400 bad request.
   *
   * @example
   * ```ts
   * const authMethod =
   *   await client.accounts.self.authMethods.delete(
   *     'auth_method_id',
   *   );
   * ```
   */
  delete(authMethodId: string, options?: Core.RequestOptions): Core.APIPromise<AuthMethodDeleteResponse> {
    return this._client.delete(`/accounts/self/auth-methods/${authMethodId}`, options);
  }

  /**
   * Retrieve a list of authentication providers with a flag indicating which ones
   * are active for the currently authenticated account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.self.authMethods.retrieveAuthMethods();
   * ```
   */
  retrieveAuthMethods(options?: Core.RequestOptions): Core.APIPromise<AuthMethodRetrieveAuthMethodsResponse> {
    return this._client.get('/accounts/self/auth-methods', options);
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
       * The human-readable name of the provider.
       */
      name: string;

      /**
       * The slug name of the provider.
       */
      provider: string;

      /**
       * The hyperlink to render for the user.
       */
      link?: string;
    }
  }

  export interface Available {
    /**
     * The human-readable name of the provider.
     */
    name: string;

    /**
     * The slug name of the provider.
     */
    provider: string;

    /**
     * The hyperlink to render for the user.
     */
    link?: string;
  }
}

export interface AuthMethodRetrieveAuthMethodsResponse {
  active: Array<AuthMethodRetrieveAuthMethodsResponse.Active>;

  available: Array<AuthMethodRetrieveAuthMethodsResponse.Available>;
}

export namespace AuthMethodRetrieveAuthMethodsResponse {
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
       * The human-readable name of the provider.
       */
      name: string;

      /**
       * The slug name of the provider.
       */
      provider: string;

      /**
       * The hyperlink to render for the user.
       */
      link?: string;
    }
  }

  export interface Available {
    /**
     * The human-readable name of the provider.
     */
    name: string;

    /**
     * The slug name of the provider.
     */
    provider: string;

    /**
     * The hyperlink to render for the user.
     */
    link?: string;
  }
}

export declare namespace AuthMethods {
  export {
    type AuthMethodDeleteResponse as AuthMethodDeleteResponse,
    type AuthMethodRetrieveAuthMethodsResponse as AuthMethodRetrieveAuthMethodsResponse,
  };
}
