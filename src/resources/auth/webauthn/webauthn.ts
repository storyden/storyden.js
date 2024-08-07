// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as WebauthnAPI from './webauthn';
import * as AssertAPI from './assert';

export class Webauthn extends APIResource {
  assert: AssertAPI.Assert = new AssertAPI.Assert(this._client);

  /**
   * Complete WebAuthn registration by creating a new credential.
   */
  make(body: WebauthnMakeParams, options?: Core.RequestOptions): Core.APIPromise<WebauthnMakeResponse> {
    return this._client.post('/v1/auth/webauthn/make', { body, ...options });
  }
}

export interface WebauthnMakeResponse {
  id: string;
}

export interface WebauthnMakeParams {
  id: string;

  rawId: string;

  /**
   * https://www.w3.org/TR/webauthn-2/#authenticatorresponse
   */
  response: WebauthnMakeParams.Response;

  type: string;

  authenticatorAttachment?: string;

  clientExtensionResults?: unknown;
}

export namespace WebauthnMakeParams {
  /**
   * https://www.w3.org/TR/webauthn-2/#authenticatorresponse
   */
  export interface Response {
    clientDataJSON: string;

    attestationObject?: string;

    authenticatorData?: string;

    signature?: string;

    transports?: Array<string>;

    userHandle?: string;
  }
}

export namespace Webauthn {
  export import WebauthnMakeResponse = WebauthnAPI.WebauthnMakeResponse;
  export import WebauthnMakeParams = WebauthnAPI.WebauthnMakeParams;
  export import Assert = AssertAPI.Assert;
  export import AssertStartResponse = AssertAPI.AssertStartResponse;
}
