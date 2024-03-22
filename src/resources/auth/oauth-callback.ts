// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import * as OAuthCallbackAPI from 'Storyden/resources/auth/oauth-callback';

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
