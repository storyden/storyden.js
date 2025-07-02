// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Assert extends APIResource {
  /**
   * Complete the credential assertion and sign in to an account.
   *
   * @example
   * ```ts
   * const response = await client.auth.webauthn.assert.complete(
   *   {
   *     id: 'id',
   *     rawId: 'rawId',
   *     response: { clientDataJSON: 'clientDataJSON' },
   *     type: 'type',
   *   },
   * );
   * ```
   */
  complete(
    body: AssertCompleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssertCompleteResponse> {
    return this._client.post('/auth/webauthn/assert', { body, ...options });
  }

  /**
   * Start the WebAuthn assertion for an existing account.
   *
   * @example
   * ```ts
   * const response = await client.auth.webauthn.assert.start(
   *   'southclaws',
   * );
   * ```
   */
  start(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<AssertStartResponse> {
    return this._client.get(`/auth/webauthn/assert/${accountHandle}`, options);
  }
}

export interface AssertCompleteResponse {
  id: string;
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

export interface AssertCompleteParams {
  id: string;

  rawId: string;

  /**
   * https://www.w3.org/TR/webauthn-2/#authenticatorresponse
   */
  response: AssertCompleteParams.Response;

  type: string;

  authenticatorAttachment?: string;

  clientExtensionResults?: unknown;
}

export namespace AssertCompleteParams {
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

export declare namespace Assert {
  export {
    type AssertCompleteResponse as AssertCompleteResponse,
    type AssertStartResponse as AssertStartResponse,
    type AssertCompleteParams as AssertCompleteParams,
  };
}
