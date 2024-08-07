// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OAuthCallbackAPI from './oauth-callback';

export class OAuthCallback extends APIResource {
  /**
   * OAuth2 callback.
   */
  create(
    oauthProvider: string,
    body: OAuthCallbackCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OAuthCallbackCreateResponse> {
    return this._client.post(`/v1/auth/oauth/${oauthProvider}/callback`, { body, ...options });
  }
}

export interface OAuthCallbackCreateResponse {
  id: string;
}

export interface OAuthCallbackCreateParams {
  code: string;

  state: string;
}

export namespace OAuthCallback {
  export import OAuthCallbackCreateResponse = OAuthCallbackAPI.OAuthCallbackCreateResponse;
  export import OAuthCallbackCreateParams = OAuthCallbackAPI.OAuthCallbackCreateParams;
}
