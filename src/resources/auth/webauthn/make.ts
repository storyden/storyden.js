// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Make extends APIResource {
  /**
   * Complete WebAuthn registration by creating a new credential.
   *
   * @example
   * ```ts
   * const response = await client.auth.webauthn.make.complete({
   *   id: 'id',
   *   rawId: 'rawId',
   *   response: { clientDataJSON: 'clientDataJSON' },
   *   type: 'type',
   * });
   * ```
   */
  complete(params: MakeCompleteParams, options?: Core.RequestOptions): Core.APIPromise<MakeCompleteResponse> {
    const { invitation_id, ...body } = params;
    return this._client.post('/auth/webauthn/make', { query: { invitation_id }, body, ...options });
  }

  /**
   * Start the WebAuthn registration process by requesting a credential.
   *
   * @example
   * ```ts
   * const response = await client.auth.webauthn.make.start(
   *   'southclaws',
   * );
   * ```
   */
  start(accountHandle: string, options?: Core.RequestOptions): Core.APIPromise<MakeStartResponse> {
    return this._client.get(`/auth/webauthn/make/${accountHandle}`, options);
  }
}

export interface MakeCompleteResponse {
  id: string;
}

/**
 * https://www.w3.org/TR/webauthn-2/#sctn-credentialcreationoptions-extension
 */
export interface MakeStartResponse {
  /**
   * https://www.w3.org/TR/webautehn-2/#dictdef-publickeycredentialcreationoptions
   */
  publicKey: MakeStartResponse.PublicKey;
}

export namespace MakeStartResponse {
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
    extensions?: { [key: string]: unknown };

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

export interface MakeCompleteParams {
  /**
   * Body param:
   */
  id: string;

  /**
   * Body param:
   */
  rawId: string;

  /**
   * Body param: https://www.w3.org/TR/webauthn-2/#authenticatorresponse
   */
  response: MakeCompleteParams.Response;

  /**
   * Body param:
   */
  type: string;

  /**
   * Query param: Unique invitation ID.
   */
  invitation_id?: string;

  /**
   * Body param:
   */
  authenticatorAttachment?: string;

  /**
   * Body param:
   */
  clientExtensionResults?: unknown;
}

export namespace MakeCompleteParams {
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

export declare namespace Make {
  export {
    type MakeCompleteResponse as MakeCompleteResponse,
    type MakeStartResponse as MakeStartResponse,
    type MakeCompleteParams as MakeCompleteParams,
  };
}
