// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AssertAPI from './assert';

export class Assert extends APIResource {
  /**
   * Start the WebAuthn assertion for an existing account.
   */
  start(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<AssertStartResponse> {
    return this._client.get(`/v1/auth/webauthn/assert/${accountHandle}`, options);
  }
}

/**
 * https://www.w3.org/TR/webauthn-2/#sctn-credentialrequestoptions-extension
 */
export interface AssertStartResponse {
  /**
   * https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialrequestoptions
   */
  publicKey: AssertStartResponse.PublicKey;
}

export namespace AssertStartResponse {
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

export namespace Assert {
  export import AssertStartResponse = AssertAPI.AssertStartResponse;
}
