// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import * as EventsAPI from './events/events';

export class Notifications extends APIResource {
  /**
   * Retreive all notifications.
   */
  list(
    query?: NotificationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<NotificationListResponse>;
  list(
    query: NotificationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/notifications', { query, ...options });
  }

  /**
   * Change the read status for a notification.
   */
  updateReadStatus(
    notificationId: string,
    body?: NotificationUpdateReadStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationUpdateReadStatusResponse>;
  updateReadStatus(
    notificationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationUpdateReadStatusResponse>;
  updateReadStatus(
    notificationId: string,
    body: NotificationUpdateReadStatusParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NotificationUpdateReadStatusResponse> {
    if (isRequestOptions(body)) {
      return this.updateReadStatus(notificationId, {}, body);
    }
    return this._client.patch(`/notifications/${notificationId}`, { body, ...options });
  }
}

export interface NotificationListResponse {
  current_page: number;

  notifications: Array<NotificationListResponse.Notification>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace NotificationListResponse {
  export interface Notification {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time the resource was created.
     */
    created_at: string;

    /**
     * The kind of event that triggered the notification. Identical to the
     * `notification.Event` enumerated type.
     */
    event: 'thread_reply' | 'post_like' | 'follow' | 'profile_mention';

    status: 'unread' | 'read';

    item?:
      | Shared.DatagraphItemPost
      | Notification.DatagraphItemThread
      | Shared.DatagraphItemReply
      | Shared.DatagraphItemNode
      | Shared.DatagraphItemProfile;

    /**
     * A minimal reference to an account.
     */
    source?: Shared.ProfileReference;
  }

  export namespace Notification {
    export interface DatagraphItemThread {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      ref: EventsAPI.Thread;
    }
  }
}

export interface NotificationUpdateReadStatusResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  created_at: string;

  /**
   * The kind of event that triggered the notification. Identical to the
   * `notification.Event` enumerated type.
   */
  event: 'thread_reply' | 'post_like' | 'follow' | 'profile_mention';

  status: 'unread' | 'read';

  item?:
    | Shared.DatagraphItemPost
    | NotificationUpdateReadStatusResponse.DatagraphItemThread
    | Shared.DatagraphItemReply
    | Shared.DatagraphItemNode
    | Shared.DatagraphItemProfile;

  /**
   * A minimal reference to an account.
   */
  source?: Shared.ProfileReference;
}

export namespace NotificationUpdateReadStatusResponse {
  export interface DatagraphItemThread {
    kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

    ref: EventsAPI.Thread;
  }
}

export interface NotificationListParams {
  /**
   * Pagination query parameters.
   */
  page?: string;

  /**
   * Notification status.
   */
  status?: Array<'unread' | 'read'>;
}

export interface NotificationUpdateReadStatusParams {
  status?: 'unread' | 'read';
}

export declare namespace Notifications {
  export {
    type NotificationListResponse as NotificationListResponse,
    type NotificationUpdateReadStatusResponse as NotificationUpdateReadStatusResponse,
    type NotificationListParams as NotificationListParams,
    type NotificationUpdateReadStatusParams as NotificationUpdateReadStatusParams,
  };
}
