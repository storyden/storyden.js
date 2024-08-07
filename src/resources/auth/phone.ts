// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PhoneAPI from './phone';

export class Phone extends APIResource {
  /**
   * Complete the phone number authentication flow by submitting the one-time code
   * that was sent to the user's phone.
   */
  complete(
    accountHandle: string,
    body: PhoneCompleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhoneCompleteResponse> {
    return this._client.put(`/v1/auth/phone/${accountHandle}`, { body, ...options });
  }

  /**
   * Start the authentication flow with a phone number. The handler will send a
   * one-time code to the provided phone number which must then be sent to the other
   * phone endpoint to verify the number and validate the account.
   */
  start(body: PhoneStartParams, options?: Core.RequestOptions): Core.APIPromise<PhoneStartResponse> {
    return this._client.post('/v1/auth/phone', { body, ...options });
  }
}

export interface PhoneCompleteResponse {
  id: string;
}

export interface PhoneStartResponse {
  id: string;
}

export interface PhoneCompleteParams {
  code: string;
}

export interface PhoneStartParams {
  /**
   * The desired username to link to the phone number.
   */
  identifier: string;

  /**
   * The phone number to receive the one-time code on.
   */
  phone_number: string;
}

export namespace Phone {
  export import PhoneCompleteResponse = PhoneAPI.PhoneCompleteResponse;
  export import PhoneStartResponse = PhoneAPI.PhoneStartResponse;
  export import PhoneCompleteParams = PhoneAPI.PhoneCompleteParams;
  export import PhoneStartParams = PhoneAPI.PhoneStartParams;
}
