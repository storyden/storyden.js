// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OAuthAPI from './oauth';

export class OAuth extends APIResource {
  /**
   * OAuth2 callback.
   */
  callback(
    oauthProvider: string,
    body: OAuthCallbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OAuthCallbackResponse> {
    return this._client.post(`/v1/auth/oauth/${oauthProvider}/callback`, { body, ...options });
  }
}

export interface OAuthCallbackResponse {
  id: string;
}

export interface OAuthCallbackParams {
  code: string;

  state: string;
}

export namespace OAuth {
  export import OAuthCallbackResponse = OAuthAPI.OAuthCallbackResponse;
  export import OAuthCallbackParams = OAuthAPI.OAuthCallbackParams;
}
