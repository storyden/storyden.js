// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PhoneAPI from './phone';

export class Phone extends APIResource {
  /**
   * Start the authentication flow with a phone number. The handler will send a
   * one-time code to the provided phone number which must then be sent to the other
   * phone endpoint to verify the number and validate the account.
   */
  create(body: PhoneCreateParams, options?: Core.RequestOptions): Core.APIPromise<PhoneCreateResponse> {
    return this._client.post('/v1/auth/phone', { body, ...options });
  }

  /**
   * Complete the phone number authentication flow by submitting the one-time code
   * that was sent to the user's phone.
   */
  update(
    accountHandle: string,
    body: PhoneUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PhoneUpdateResponse> {
    return this._client.put(`/v1/auth/phone/${accountHandle}`, { body, ...options });
  }
}

export interface PhoneCreateResponse {
  id: string;
}

export interface PhoneUpdateResponse {
  id: string;
}

export interface PhoneCreateParams {
  /**
   * The desired username to link to the phone number.
   */
  identifier: string;

  /**
   * The phone number to receive the one-time code on.
   */
  phone_number: string;
}

export interface PhoneUpdateParams {
  code: string;
}

export namespace Phone {
  export import PhoneCreateResponse = PhoneAPI.PhoneCreateResponse;
  export import PhoneUpdateResponse = PhoneAPI.PhoneUpdateResponse;
  export import PhoneCreateParams = PhoneAPI.PhoneCreateParams;
  export import PhoneUpdateParams = PhoneAPI.PhoneUpdateParams;
}
