// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Participants extends APIResource {
  /**
   * Add a participant to an event or change an existing participant's state.
   *
   * If the requesting account is an admin or holds MANAGE_EVENTS permission, they
   * can change the participation properties of any account. Otherwise, they can only
   * change their own participation properties.
   *
   * For non-managing members (i.e. not an admin and not a host) this will follow a
   * stricter state machine for the participation status. If the participation status
   * is not set (no participation record is present) or set to "declined", the member
   * may only set their status to "requested" if the event policy is set to
   * "invite_only". Otherwise, they may set it to "attending". If the member is
   * already set to one of these states, they may change it to "declined".
   *
   * A non-managing member cannot change their role and the default is "attendee",
   * only managing members can change participant roles.
   *
   * If the event participation policy is set to "invite_only" then members can only
   * set their status to "requested" or delete their participation.
   *
   * If the event participation policy is set to "closed", it's a no-op.
   *
   * Requests to this resource are idempotent given identical request bodies. It acts
   * as a create-or-update action as participation is account-unique.
   *
   * @example
   * ```ts
   * await client.events.participants.update(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  update(
    eventMark: string,
    accountId: string,
    body?: ParticipantUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  update(eventMark: string, accountId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    eventMark: string,
    accountId: string,
    body: ParticipantUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(eventMark, accountId, {}, body);
    }
    return this._client.put(`/events/${eventMark}/participants/${accountId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Remove a participant from an event. Same rules as EventParticipantUpdate where
   * non-managing members may only remove themselves. Not soft-delete.
   *
   * @example
   * ```ts
   * await client.events.participants.delete(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  delete(eventMark: string, accountId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/events/${eventMark}/participants/${accountId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ParticipantUpdateParams {
  role?: 'attendee' | 'host';

  status?: 'requested' | 'invited' | 'attending' | 'declined';
}

export declare namespace Participants {
  export { type ParticipantUpdateParams as ParticipantUpdateParams };
}
