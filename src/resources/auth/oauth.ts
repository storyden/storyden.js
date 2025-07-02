// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class OAuth extends APIResource {
  /**
   * OAuth2 callback.
   *
   * @example
   * ```ts
   * const response = await client.auth.oauth.callback(
   *   'twitter',
   *   { code: 'code', state: 'state' },
   * );
   * ```
   */
  callback(
    oauthProvider: string,
    body: OAuthCallbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OAuthCallbackResponse> {
    return this._client.post(`/auth/oauth/${oauthProvider}/callback`, { body, ...options });
  }
}

export interface OAuthCallbackResponse {
  id: string;
}

export interface OAuthCallbackParams {
  code: string;

  state: string;
}

export declare namespace OAuth {
  export {
    type OAuthCallbackResponse as OAuthCallbackResponse,
    type OAuthCallbackParams as OAuthCallbackParams,
  };
}
