// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import * as AssertAPI from 'Storyden/resources/auth/webauthn/assert';

export class Assert extends APIResource {
  /**
   * Complete the credential assertion and sign in to an account.
   */
  create(body: AssertCreateParams, options?: Core.RequestOptions): Core.APIPromise<AssertCreateResponse> {
    return this._client.post('/v1/auth/webauthn/assert', { body, ...options });
  }

  /**
   * Start the WebAuthn assertion for an existing account.
   */
  retrieve(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<AssertRetrieveResponse> {
    return this._client.get(`/v1/auth/webauthn/assert/${accountHandle}`, options);
  }
}

export interface AssertCreateResponse {
  id: string;
}

/**
 * https://www.w3.org/TR/webauthn-2/#sctn-credentialrequestoptions-extension
 */
export interface AssertRetrieveResponse {
  /**
   * https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialrequestoptions
   */
  publicKey: AssertRetrieveResponse.PublicKey;
}

export namespace AssertRetrieveResponse {
  /**
   * https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialrequestoptions
   */
  export interface PublicKey {
    challenge: string;

    allowCredentials?: Array<PublicKey.AllowCredential>;

    rpId?: string;

    timeout?: number;

    userVerification?: 'discouraged' | 'preferred' | 'required';
  }

  export namespace PublicKey {
    /**
     * https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialdescriptor
     */
    export interface AllowCredential {
      id: string;

      /**
       * https://www.w3.org/TR/webauthn-2/#enumdef-publickeycredentialtype
       */
      type: 'public-key';

      transports?: Array<'ble' | 'internal' | 'nfc' | 'usb' | 'cable' | 'hybrid'>;
    }
  }
}

export interface AssertCreateParams {
  id: string;

  rawId: string;

  /**
   * https://www.w3.org/TR/webauthn-2/#authenticatorresponse
   */
  response: AssertCreateParams.Response;

  type: string;

  authenticatorAttachment?: string;

  clientExtensionResults?: unknown;
}

export namespace AssertCreateParams {
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

export namespace Assert {
  export import AssertCreateResponse = AssertAPI.AssertCreateResponse;
  export import AssertRetrieveResponse = AssertAPI.AssertRetrieveResponse;
  export import AssertCreateParams = AssertAPI.AssertCreateParams;
}
