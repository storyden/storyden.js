// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MakeAPI from './make';

export class Make extends APIResource {
  /**
   * Complete WebAuthn registration by creating a new credential.
   */
  create(body: MakeCreateParams, options?: Core.RequestOptions): Core.APIPromise<MakeCreateResponse> {
    return this._client.post('/v1/auth/webauthn/make', { body, ...options });
  }

  /**
   * Start the WebAuthn registration process by requesting a credential.
   */
  retrieve(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<MakeRetrieveResponse> {
    return this._client.get(`/v1/auth/webauthn/make/${accountHandle}`, options);
  }
}

export interface MakeCreateResponse {
  id: string;
}

/**
 * https://www.w3.org/TR/webauthn-2/#sctn-credentialcreationoptions-extension
 */
export interface MakeRetrieveResponse {
  /**
   * https://www.w3.org/TR/webautehn-2/#dictdef-publickeycredentialcreationoptions
   */
  publicKey: MakeRetrieveResponse.PublicKey;
}

export namespace MakeRetrieveResponse {
  /**
   * https://www.w3.org/TR/webautehn-2/#dictdef-publickeycredentialcreationoptions
   */
  export interface PublicKey {
    challenge: string;

    excludeCredentials: Array<PublicKey.ExcludeCredential>;

    pubKeyCredParams: Array<PublicKey.PubKeyCredParam>;

    /**
     * https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialrpentity
     */
    rp: PublicKey.Rp;

    /**
     * https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialuserentity
     */
    user: PublicKey.User;

    /**
     * https://www.w3.org/TR/webauthn-2/#enum-attestation-convey
     */
    attestation?: 'direct' | 'enterprise' | 'indirect' | 'none';

    /**
     * https://www.w3.org/TR/webauthn-2/#dictdef-authenticatorselectioncriteria
     */
    authenticatorSelection?: PublicKey.AuthenticatorSelection;

    /**
     * https://www.w3.org/TR/webauthn-2/#dictdef-authenticationextensionsclientinputs
     */
    extensions?: Record<string, unknown>;

    timeout?: number;
  }

  export namespace PublicKey {
    /**
     * https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialdescriptor
     */
    export interface ExcludeCredential {
      id: string;

      /**
       * https://www.w3.org/TR/webauthn-2/#enumdef-publickeycredentialtype
       */
      type: 'public-key';

      transports?: Array<'ble' | 'internal' | 'nfc' | 'usb' | 'cable' | 'hybrid'>;
    }

    /**
     * https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialparameters
     */
    export interface PubKeyCredParam {
      alg: number;

      /**
       * https://www.w3.org/TR/webauthn-2/#enumdef-publickeycredentialtype
       */
      type: 'public-key';
    }

    /**
     * https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialrpentity
     */
    export interface Rp {
      id: string;

      name: string;
    }

    /**
     * https://www.w3.org/TR/webauthn-2/#dictdef-publickeycredentialuserentity
     */
    export interface User {
      id: string;

      displayName: string;

      name: string;
    }

    /**
     * https://www.w3.org/TR/webauthn-2/#dictdef-authenticatorselectioncriteria
     */
    export interface AuthenticatorSelection {
      /**
       * https://www.w3.org/TR/webauthn-2/#enumdef-authenticatorattachment
       */
      authenticatorAttachment: 'platform' | 'cross-platform';

      /**
       * https://www.w3.org/TR/webauthn-2/#enumdef-residentkeyrequirement
       */
      residentKey: 'discouraged' | 'preferred' | 'required';

      requireResidentKey?: boolean;

      /**
       * https://www.w3.org/TR/webauthn-2/#enumdef-userverificationrequirement
       */
      userVerification?: 'discouraged' | 'preferred' | 'required';
    }
  }
}

export interface MakeCreateParams {
  id: string;

  rawId: string;

  /**
   * https://www.w3.org/TR/webauthn-2/#authenticatorresponse
   */
  response: MakeCreateParams.Response;

  type: string;

  authenticatorAttachment?: string;

  clientExtensionResults?: unknown;
}

export namespace MakeCreateParams {
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

export namespace Make {
  export import MakeCreateResponse = MakeAPI.MakeCreateResponse;
  export import MakeRetrieveResponse = MakeAPI.MakeRetrieveResponse;
  export import MakeCreateParams = MakeAPI.MakeCreateParams;
}
