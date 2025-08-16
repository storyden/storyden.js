// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as EventsAPI from './events';
import * as Shared from '../shared';
import * as ParticipantsAPI from './participants';
import { ParticipantUpdateParams, Participants } from './participants';

export class Events extends APIResource {
  participants: ParticipantsAPI.Participants = new ParticipantsAPI.Participants(this._client);

  /**
   * Create a new event. When an event is created, a thread is also created which
   * provides the means for discussion via the thread and reply APIs.
   *
   * @example
   * ```ts
   * const event = await client.events.create({
   *   content: 'content',
   *   name: 'Friday beers, coding and design hack night',
   *   participation_policy: 'open',
   *   thread_category_id: 'cc5lnd2s1s4652adtu50',
   *   time_range: {
   *     end: '2019-12-27T18:11:19.117Z',
   *     start: '2019-12-27T18:11:19.117Z',
   *   },
   *   visibility: 'draft',
   * });
   * ```
   */
  create(body: EventCreateParams, options?: Core.RequestOptions): Core.APIPromise<EventCreateResponse> {
    return this._client.post('/events', { body, ...options });
  }

  /**
   * Get an event by its ID.
   *
   * @example
   * ```ts
   * const event = await client.events.retrieve(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   * );
   * ```
   */
  retrieve(eventMark: string, options?: Core.RequestOptions): Core.APIPromise<EventRetrieveResponse> {
    return this._client.get(`/events/${eventMark}`, options);
  }

  /**
   * Update an event. If the content field is updated, this is stored on the thread
   * associated with the event, rather than the event itself. It's possible to update
   * that thread directly using `threads` operations.
   *
   * @example
   * ```ts
   * const event = await client.events.update(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   * );
   * ```
   */
  update(
    eventMark: string,
    body?: EventUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventUpdateResponse>;
  update(eventMark: string, options?: Core.RequestOptions): Core.APIPromise<EventUpdateResponse>;
  update(
    eventMark: string,
    body: EventUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(eventMark, {}, body);
    }
    return this._client.patch(`/events/${eventMark}`, { body, ...options });
  }

  /**
   * List all events using the filtering options.
   *
   * @example
   * ```ts
   * const events = await client.events.list();
   * ```
   */
  list(query?: EventListParams, options?: Core.RequestOptions): Core.APIPromise<EventListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EventListResponse>;
  list(
    query: EventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/events', { query, ...options });
  }

  /**
   * Delete an event.
   *
   * @example
   * ```ts
   * await client.events.delete(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   * );
   * ```
   */
  delete(eventMark: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/events/${eventMark}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * A physical location for an event, such as a venue, a park, a street address,
 * etc. This location may have a name, address, and coordinates. A URL may also be
 * added for a Google maps link etc.
 */
export interface EventLocationPhysical {
  location_type: 'physical' | 'virtual';

  name: string;

  address?: string;

  latitude?: number;

  longitude?: number;

  url?: string;
}

/**
 * A virtual location for an event, such as a URL, a video conference link, a
 * Discord server, etc. This location may have a URL.
 */
export interface EventLocationVirtual {
  location_type: 'physical' | 'virtual';

  name: string;

  url?: string;
}

export interface EventParticipant {
  /**
   * A minimal reference to an account.
   */
  profile: Shared.ProfileReference;

  role: 'attendee' | 'host';

  status: 'requested' | 'invited' | 'attending' | 'declined';
}

/**
 * A time range for an event, which may span multiple days or times of day.
 */
export interface EventTimeRange {
  end: string;

  start: string;
}

export interface Thread extends Shared.CommonProperties {
  assets: Array<Shared.Asset>;

  /**
   * A minimal reference to an account.
   */
  author: Shared.ProfileReference;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  body_links: Array<Shared.LinkReference>;

  category: Shared.CategoryReference;

  collections: Shared.CollectionStatus;

  likes: Shared.LikeData;

  /**
   * Whether the thread is pinned in this category.
   */
  pinned: boolean;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<Shared.React>;

  recomentations: Array<unknown>;

  replies: Shared.PaginatedReplyList;

  reply_status: Shared.ReplyStatus;

  /**
   * A thread's ID and optional slug separated by a dash = it's unique mark. This
   * allows endpoints to respond to varying forms of a thread's ID.
   *
   * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
   * `top-10-movies-thread`, Storyden will understand both the forms:
   * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
   * identifier for that thread.
   */
  slug: string;

  /**
   * A list of tags.
   */
  tags: Array<Shared.TagReferenceProps>;

  /**
   * The title of a thread.
   */
  title: string;

  /**
   * A short version of the post's body text for use in previews.
   */
  description?: string;

  /**
   * The time of the last reply to the thread.
   */
  last_reply_at?: string;

  /**
   * A minimal object used to refer to a link without sending too much data.
   */
  link?: Shared.LinkReference;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };
}

/**
 * An event represents any kind of event, such as an online or in-person gathering,
 * a conference, a workshop, a webinar, etc. Events will contain a start and end
 * timestamp and may have a location and other metadata.
 *
 * Each event also gets its own thread for discussion and planning. This is
 * automatically created for every new event and is linked to the event.
 */
export interface EventCreateResponse extends Shared.CommonProperties {
  description: string;

  /**
   * An event location can be either physical or virtual. A physical location may
   * have an address or coordinates. A virtual location may have a link.
   */
  location: EventLocationPhysical | EventLocationVirtual;

  name: string;

  /**
   * A list of attendees, hosts and invites for an event.
   */
  participants: Array<EventParticipant>;

  participation_policy: 'open' | 'closed' | 'invite_only';

  slug: string;

  thread: Thread;

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  time_range: EventTimeRange;

  visibility: 'draft' | 'unlisted' | 'review' | 'published';

  /**
   * The maximum number of attendees that can attend the event.
   */
  capacity?: number;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  primary_image?: Shared.Asset;
}

/**
 * An event represents any kind of event, such as an online or in-person gathering,
 * a conference, a workshop, a webinar, etc. Events will contain a start and end
 * timestamp and may have a location and other metadata.
 *
 * Each event also gets its own thread for discussion and planning. This is
 * automatically created for every new event and is linked to the event.
 */
export interface EventRetrieveResponse extends Shared.CommonProperties {
  description: string;

  /**
   * An event location can be either physical or virtual. A physical location may
   * have an address or coordinates. A virtual location may have a link.
   */
  location: EventLocationPhysical | EventLocationVirtual;

  name: string;

  /**
   * A list of attendees, hosts and invites for an event.
   */
  participants: Array<EventParticipant>;

  participation_policy: 'open' | 'closed' | 'invite_only';

  slug: string;

  thread: Thread;

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  time_range: EventTimeRange;

  visibility: 'draft' | 'unlisted' | 'review' | 'published';

  /**
   * The maximum number of attendees that can attend the event.
   */
  capacity?: number;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  primary_image?: Shared.Asset;
}

/**
 * An event represents any kind of event, such as an online or in-person gathering,
 * a conference, a workshop, a webinar, etc. Events will contain a start and end
 * timestamp and may have a location and other metadata.
 *
 * Each event also gets its own thread for discussion and planning. This is
 * automatically created for every new event and is linked to the event.
 */
export interface EventUpdateResponse extends Shared.CommonProperties {
  description: string;

  /**
   * An event location can be either physical or virtual. A physical location may
   * have an address or coordinates. A virtual location may have a link.
   */
  location: EventLocationPhysical | EventLocationVirtual;

  name: string;

  /**
   * A list of attendees, hosts and invites for an event.
   */
  participants: Array<EventParticipant>;

  participation_policy: 'open' | 'closed' | 'invite_only';

  slug: string;

  thread: Thread;

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  time_range: EventTimeRange;

  visibility: 'draft' | 'unlisted' | 'review' | 'published';

  /**
   * The maximum number of attendees that can attend the event.
   */
  capacity?: number;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  primary_image?: Shared.Asset;
}

export interface EventListResponse {
  current_page: number;

  events: Array<EventListResponse.Event>;

  page_size: number;

  results: number;

  total_pages: number;

  next_page?: number;
}

export namespace EventListResponse {
  /**
   * A minimal object used to refer to an event without providing all data.
   */
  export interface Event extends Shared.CommonProperties {
    description: string;

    /**
     * An event location can be either physical or virtual. A physical location may
     * have an address or coordinates. A virtual location may have a link.
     */
    location: EventsAPI.EventLocationPhysical | EventsAPI.EventLocationVirtual;

    name: string;

    /**
     * A list of attendees, hosts and invites for an event.
     */
    participants: Array<EventsAPI.EventParticipant>;

    participation_policy: 'open' | 'closed' | 'invite_only';

    slug: string;

    /**
     * A time range for an event, which may span multiple days or times of day.
     */
    time_range: EventsAPI.EventTimeRange;

    visibility: 'draft' | 'unlisted' | 'review' | 'published';

    /**
     * The maximum number of attendees that can attend the event.
     */
    capacity?: number;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };

    primary_image?: Shared.Asset;
  }
}

export interface EventCreateParams {
  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content: string;

  name: string;

  participation_policy: 'open' | 'closed' | 'invite_only';

  /**
   * A unique identifier for this resource.
   */
  thread_category_id: string;

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  time_range: EventTimeRange;

  visibility: 'draft' | 'unlisted' | 'review' | 'published';

  /**
   * The maximum number of attendees that can attend the event.
   */
  capacity?: number;

  description?: string;

  /**
   * An event location can be either physical or virtual. A physical location may
   * have an address or coordinates. A virtual location may have a link.
   */
  location?: EventLocationPhysical | EventLocationVirtual;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * A unique identifier for this resource.
   */
  primary_image_asset_id?: string;

  slug?: string;
}

export interface EventUpdateParams {
  /**
   * The maximum number of attendees that can attend the event.
   */
  capacity?: number;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content?: string;

  description?: string;

  /**
   * An event location can be either physical or virtual. A physical location may
   * have an address or coordinates. A virtual location may have a link.
   */
  location?: EventLocationPhysical | EventLocationVirtual;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  name?: string;

  participation_policy?: 'open' | 'closed' | 'invite_only';

  /**
   * A unique identifier for this resource.
   */
  primary_image_asset_id?: string;

  slug?: string;

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  time_range?: EventTimeRange;

  visibility?: 'draft' | 'unlisted' | 'review' | 'published';
}

export interface EventListParams {
  /**
   * Pagination query parameters.
   */
  page?: string;

  /**
   * Search query string.
   */
  q?: string;
}

Events.Participants = Participants;

export declare namespace Events {
  export {
    type EventLocationPhysical as EventLocationPhysical,
    type EventLocationVirtual as EventLocationVirtual,
    type EventParticipant as EventParticipant,
    type EventTimeRange as EventTimeRange,
    type Thread as Thread,
    type EventCreateResponse as EventCreateResponse,
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventUpdateResponse as EventUpdateResponse,
    type EventListResponse as EventListResponse,
    type EventCreateParams as EventCreateParams,
    type EventUpdateParams as EventUpdateParams,
    type EventListParams as EventListParams,
  };

  export { Participants as Participants, type ParticipantUpdateParams as ParticipantUpdateParams };
}
