// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Phone extends APIResource {
  /**
   * Start the authentication flow with a phone number. The handler will send a
   * one-time code to the provided phone number which must then be sent to the other
   * phone endpoint to verify the number and validate the account.
   *
   * @example
   * ```ts
   * const response = await client.auth.phone.start({
   *   identifier: 'southclaws',
   *   phone_number: 'phone_number',
   * });
   * ```
   */
  start(params: PhoneStartParams, options?: Core.RequestOptions): Core.APIPromise<PhoneStartResponse> {
    const { invitation_id, ...body } = params;
    return this._client.post('/auth/phone', { query: { invitation_id }, body, ...options });
  }

  /**
   * Complete the phone number authentication flow by submitting the one-time code
   * that was sent to the user's phone.
   *
   * @example
   * ```ts
   * const response = await client.auth.phone.verify(
   *   'southclaws',
   *   { code: 'code' },
   * );
   * ```
   */
  verify(
    accountHandle: string,
    body: PhoneVerifyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhoneVerifyResponse> {
    return this._client.put(`/auth/phone/${accountHandle}`, { body, ...options });
  }
}

export interface PhoneStartResponse {
  id: string;
}

export interface PhoneVerifyResponse {
  id: string;
}

export interface PhoneStartParams {
  /**
   * Body param: The desired username to link to the phone number.
   */
  identifier: string;

  /**
   * Body param: The phone number to receive the one-time code on.
   */
  phone_number: string;

  /**
   * Query param: Unique invitation ID.
   */
  invitation_id?: string;
}

export interface PhoneVerifyParams {
  code: string;
}

export declare namespace Phone {
  export {
    type PhoneStartResponse as PhoneStartResponse,
    type PhoneVerifyResponse as PhoneVerifyResponse,
    type PhoneStartParams as PhoneStartParams,
    type PhoneVerifyParams as PhoneVerifyParams,
  };
}
