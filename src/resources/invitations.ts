// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class Invitations extends APIResource {
  /**
   * Create an invitation for the authenticated account. Responds with the invitation
   * data which can be used to construct a public vendor-specific registration URL
   * using the invitation's identifier which can be used in calls to registration
   * operations to indicate the account was invited.
   */
  create(
    body?: InvitationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvitationCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<InvitationCreateResponse>;
  create(
    body: InvitationCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvitationCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/invitations', { body, ...options });
  }

  /**
   * Retrieve the details of an invitation by its identifier. This endpoint is
   * publicly accessible and can be used to show invitation details before the
   * client's registration flow.
   */
  retrieve(invitationId: string, options?: Core.RequestOptions): Core.APIPromise<InvitationRetrieveResponse> {
    return this._client.get(`/invitations/${invitationId}`, options);
  }

  /**
   * Retrieve all invitations for the authenticated account. This endpoint is useful
   * for showing the user which invitations they have sent out and which ones have
   * been accepted.
   *
   * If the requesting account is not an admin, the account_id query param must be
   * equal to the ID of the requesting session account's ID.
   *
   * If the requesting account is an admin, the account_id query param may be used to
   * retrieve invitations for a specific account. Otherwise, the endpoint will return
   * all invitations for all accounts.
   */
  list(query?: InvitationListParams, options?: Core.RequestOptions): Core.APIPromise<InvitationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<InvitationListResponse>;
  list(
    query: InvitationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvitationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/invitations', { query, ...options });
  }

  /**
   * Delete an invitation. After deletion, it cannot be used.
   */
  delete(invitationId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/invitations/${invitationId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface InvitationCreateResponse extends Shared.CommonProperties {
  /**
   * A minimal reference to an account.
   */
  creator: Shared.ProfileReference;

  message?: string;
}

export interface InvitationRetrieveResponse extends Shared.CommonProperties {
  /**
   * A minimal reference to an account.
   */
  creator: Shared.ProfileReference;

  message?: string;
}

export interface InvitationListResponse {
  current_page: number;

  invitations: Array<InvitationListResponse.Invitation>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace InvitationListResponse {
  export interface Invitation extends Shared.CommonProperties {
    /**
     * A minimal reference to an account.
     */
    creator: Shared.ProfileReference;

    message?: string;
  }
}

export interface InvitationCreateParams {
  message?: string;
}

export interface InvitationListParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export declare namespace Invitations {
  export {
    type InvitationCreateResponse as InvitationCreateResponse,
    type InvitationRetrieveResponse as InvitationRetrieveResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
  };
}
