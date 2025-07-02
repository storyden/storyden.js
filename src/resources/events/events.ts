// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
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
 * An event represents any kind of event, such as an online or in-person gathering,
 * a conference, a workshop, a webinar, etc. Events will contain a start and end
 * timestamp and may have a location and other metadata.
 *
 * Each event also gets its own thread for discussion and planning. This is
 * automatically created for every new event and is linked to the event.
 */
export interface EventCreateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  /**
   * An event location can be either physical or virtual. A physical location may
   * have an address or coordinates. A virtual location may have a link.
   */
  location: EventCreateResponse.EventLocationPhysical | EventCreateResponse.EventLocationVirtual;

  name: string;

  /**
   * A list of attendees, hosts and invites for an event.
   */
  participants: Array<EventCreateResponse.Participant>;

  participation_policy: 'open' | 'closed' | 'invite_only';

  slug: string;

  thread: EventCreateResponse.Thread;

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  time_range: EventCreateResponse.TimeRange;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  visibility: 'draft' | 'unlisted' | 'review' | 'published';

  /**
   * The maximum number of attendees that can attend the event.
   */
  capacity?: number;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  primary_image?: EventCreateResponse.PrimaryImage;
}

export namespace EventCreateResponse {
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

  export interface Participant {
    /**
     * A minimal reference to an account.
     */
    profile: Participant.Profile;

    role: 'attendee' | 'host';

    status: 'requested' | 'invited' | 'attending' | 'declined';
  }

  export namespace Participant {
    /**
     * A minimal reference to an account.
     */
    export interface Profile {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The unique @ handle of an account.
       */
      handle: string;

      /**
       * The time the resource was created.
       */
      joined: string;

      /**
       * The account owners display name.
       */
      name: string;

      roles: Array<Profile.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace Profile {
      export interface Role {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * One role may be designated as a badge for the account. If ture, it should be
         * displayed prominently on the profile or in other contexts.
         */
        badge: boolean;

        colour: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        /**
         * There are two built-in roles: everyone and admin, this boolean flag is set if
         * this role is one of the default built-in roles.
         */
        default: boolean;

        name: string;

        permissions: Array<
          | 'CREATE_POST'
          | 'READ_PUBLISHED_THREADS'
          | 'CREATE_REACTION'
          | 'MANAGE_POSTS'
          | 'MANAGE_CATEGORIES'
          | 'CREATE_INVITATION'
          | 'READ_PUBLISHED_LIBRARY'
          | 'MANAGE_LIBRARY'
          | 'SUBMIT_LIBRARY_NODE'
          | 'UPLOAD_ASSET'
          | 'MANAGE_EVENTS'
          | 'LIST_PROFILES'
          | 'READ_PROFILE'
          | 'CREATE_COLLECTION'
          | 'LIST_COLLECTIONS'
          | 'READ_COLLECTION'
          | 'MANAGE_COLLECTIONS'
          | 'COLLECTION_SUBMIT'
          | 'USE_PERSONAL_ACCESS_KEYS'
          | 'MANAGE_SETTINGS'
          | 'MANAGE_SUSPENSIONS'
          | 'MANAGE_ROLES'
          | 'ADMINISTRATOR'
        >;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;
      }
    }
  }

  export interface Thread {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Thread.Asset>;

    /**
     * A minimal reference to an account.
     */
    author: Thread.Author;

    /**
     * The body text of a post within a thread. The type is either a string or an
     * object, depending on what was used during creation. Strings can be used for
     * basic plain text or markdown content and objects are used for more complex types
     * such as Slate.js editor documents.
     */
    body: string;

    body_links: Array<Thread.BodyLink>;

    category: Thread.Category;

    collections: Thread.Collections;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    likes: Thread.Likes;

    /**
     * Whether the thread is pinned in this category.
     */
    pinned: boolean;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Thread.React>;

    replies: Thread.Replies;

    reply_status: Thread.ReplyStatus;

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
    tags: Array<Thread.Tag>;

    /**
     * The title of a thread.
     */
    title: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

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
    link?: Thread.Link;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
  }

  export namespace Thread {
    export interface Asset {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

      height: number;

      mime_type: string;

      /**
       * The API path of the asset, conforms to the schema's GET `/assets`.
       */
      path: string;

      width: number;

      parent?: unknown;
    }

    /**
     * A minimal reference to an account.
     */
    export interface Author {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The unique @ handle of an account.
       */
      handle: string;

      /**
       * The time the resource was created.
       */
      joined: string;

      /**
       * The account owners display name.
       */
      name: string;

      roles: Array<Author.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace Author {
      export interface Role {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * One role may be designated as a badge for the account. If ture, it should be
         * displayed prominently on the profile or in other contexts.
         */
        badge: boolean;

        colour: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        /**
         * There are two built-in roles: everyone and admin, this boolean flag is set if
         * this role is one of the default built-in roles.
         */
        default: boolean;

        name: string;

        permissions: Array<
          | 'CREATE_POST'
          | 'READ_PUBLISHED_THREADS'
          | 'CREATE_REACTION'
          | 'MANAGE_POSTS'
          | 'MANAGE_CATEGORIES'
          | 'CREATE_INVITATION'
          | 'READ_PUBLISHED_LIBRARY'
          | 'MANAGE_LIBRARY'
          | 'SUBMIT_LIBRARY_NODE'
          | 'UPLOAD_ASSET'
          | 'MANAGE_EVENTS'
          | 'LIST_PROFILES'
          | 'READ_PROFILE'
          | 'CREATE_COLLECTION'
          | 'LIST_COLLECTIONS'
          | 'READ_COLLECTION'
          | 'MANAGE_COLLECTIONS'
          | 'COLLECTION_SUBMIT'
          | 'USE_PERSONAL_ACCESS_KEYS'
          | 'MANAGE_SETTINGS'
          | 'MANAGE_SUSPENSIONS'
          | 'MANAGE_ROLES'
          | 'ADMINISTRATOR'
        >;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;
      }
    }

    /**
     * A minimal object used to refer to a link without sending too much data.
     */
    export interface BodyLink {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      domain: string;

      slug: string;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * A web address
       */
      url: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      description?: string;

      favicon_image?: BodyLink.FaviconImage;

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;

      primary_image?: BodyLink.PrimaryImage;

      title?: string;
    }

    export namespace BodyLink {
      export interface FaviconImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }

      export interface PrimaryImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }
    }

    export interface Category {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      admin: boolean;

      colour: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      description: string;

      /**
       * A category's user-facing name.
       */
      name: string;

      /**
       * A category's URL-safe slug.
       */
      slug: string;

      sort: number;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      /**
       * Arbitrary metadata for the resource.
       */
      meta?: { [key: string]: unknown };

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;
    }

    export interface Collections {
      /**
       * A boolean indicating if the account in context has collected this item.
       */
      has_collected: boolean;

      /**
       * How many collections has this item been added to?
       */
      in_collections: number;
    }

    export interface Likes {
      /**
       * A boolean indicating if the account in context has liked this item.
       */
      liked: boolean;

      /**
       * A simple count of likes for contexts where pulling the full list would be
       * overkill. For use on minimal item reference schemas.
       */
      likes: number;
    }

    export interface React {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * A minimal reference to an account.
       */
      author: React.Author;

      /**
       * A single emoji character representing a reaction. In future, this will be
       * augmented with a more fully fledged custom emoji system.
       */
      emoji: string;
    }

    export namespace React {
      /**
       * A minimal reference to an account.
       */
      export interface Author {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * The unique @ handle of an account.
         */
        handle: string;

        /**
         * The time the resource was created.
         */
        joined: string;

        /**
         * The account owners display name.
         */
        name: string;

        roles: Array<Author.Role>;

        /**
         * The time the resource was created.
         */
        suspended?: string;
      }

      export namespace Author {
        export interface Role {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * One role may be designated as a badge for the account. If ture, it should be
           * displayed prominently on the profile or in other contexts.
           */
          badge: boolean;

          colour: string;

          /**
           * The time the resource was created.
           */
          createdAt: string;

          /**
           * There are two built-in roles: everyone and admin, this boolean flag is set if
           * this role is one of the default built-in roles.
           */
          default: boolean;

          name: string;

          permissions: Array<
            | 'CREATE_POST'
            | 'READ_PUBLISHED_THREADS'
            | 'CREATE_REACTION'
            | 'MANAGE_POSTS'
            | 'MANAGE_CATEGORIES'
            | 'CREATE_INVITATION'
            | 'READ_PUBLISHED_LIBRARY'
            | 'MANAGE_LIBRARY'
            | 'SUBMIT_LIBRARY_NODE'
            | 'UPLOAD_ASSET'
            | 'MANAGE_EVENTS'
            | 'LIST_PROFILES'
            | 'READ_PROFILE'
            | 'CREATE_COLLECTION'
            | 'LIST_COLLECTIONS'
            | 'READ_COLLECTION'
            | 'MANAGE_COLLECTIONS'
            | 'COLLECTION_SUBMIT'
            | 'USE_PERSONAL_ACCESS_KEYS'
            | 'MANAGE_SETTINGS'
            | 'MANAGE_SUSPENSIONS'
            | 'MANAGE_ROLES'
            | 'ADMINISTRATOR'
          >;

          /**
           * The time the resource was updated.
           */
          updatedAt: string;

          /**
           * The time the resource was soft-deleted.
           */
          deletedAt?: string;

          /**
           * Arbitrary extra data stored with the resource.
           */
          misc?: unknown;
        }
      }
    }

    export interface Replies {
      current_page: number;

      page_size: number;

      replies: Array<Replies.Reply>;

      results: number;

      total_pages: number;

      next_page?: number;
    }

    export namespace Replies {
      /**
       * A new post within a thread of posts. A post may reply to another post in the
       * thread by specifying the `reply_to` property. The identifier in the `reply_to`
       * value must be post within the same thread.
       */
      export interface Reply {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        assets: Array<Reply.Asset>;

        /**
         * A minimal reference to an account.
         */
        author: Reply.Author;

        /**
         * The body text of a post within a thread. The type is either a string or an
         * object, depending on what was used during creation. Strings can be used for
         * basic plain text or markdown content and objects are used for more complex types
         * such as Slate.js editor documents.
         */
        body: string;

        body_links: Array<Reply.BodyLink>;

        collections: Reply.Collections;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        likes: Reply.Likes;

        /**
         * A list of reactions this post has had from people.
         */
        reacts: Array<Reply.React>;

        /**
         * A unique identifier for this resource.
         */
        root_id: string;

        /**
         * A thread's ID and optional slug separated by a dash = it's unique mark. This
         * allows endpoints to respond to varying forms of a thread's ID.
         *
         * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
         * `top-10-movies-thread`, Storyden will understand both the forms:
         * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
         * identifier for that thread.
         */
        root_slug: string;

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
         * The title of a thread.
         */
        title: string;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        /**
         * A short version of the post's body text for use in previews.
         */
        description?: string;

        /**
         * Arbitrary metadata for the resource.
         */
        meta?: { [key: string]: unknown };

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;

        /**
         * A unique identifier for this resource.
         */
        reply_to?: string;
      }

      export namespace Reply {
        export interface Asset {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          filename: string;

          height: number;

          mime_type: string;

          /**
           * The API path of the asset, conforms to the schema's GET `/assets`.
           */
          path: string;

          width: number;

          parent?: unknown;
        }

        /**
         * A minimal reference to an account.
         */
        export interface Author {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * The unique @ handle of an account.
           */
          handle: string;

          /**
           * The time the resource was created.
           */
          joined: string;

          /**
           * The account owners display name.
           */
          name: string;

          roles: Array<Author.Role>;

          /**
           * The time the resource was created.
           */
          suspended?: string;
        }

        export namespace Author {
          export interface Role {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            /**
             * One role may be designated as a badge for the account. If ture, it should be
             * displayed prominently on the profile or in other contexts.
             */
            badge: boolean;

            colour: string;

            /**
             * The time the resource was created.
             */
            createdAt: string;

            /**
             * There are two built-in roles: everyone and admin, this boolean flag is set if
             * this role is one of the default built-in roles.
             */
            default: boolean;

            name: string;

            permissions: Array<
              | 'CREATE_POST'
              | 'READ_PUBLISHED_THREADS'
              | 'CREATE_REACTION'
              | 'MANAGE_POSTS'
              | 'MANAGE_CATEGORIES'
              | 'CREATE_INVITATION'
              | 'READ_PUBLISHED_LIBRARY'
              | 'MANAGE_LIBRARY'
              | 'SUBMIT_LIBRARY_NODE'
              | 'UPLOAD_ASSET'
              | 'MANAGE_EVENTS'
              | 'LIST_PROFILES'
              | 'READ_PROFILE'
              | 'CREATE_COLLECTION'
              | 'LIST_COLLECTIONS'
              | 'READ_COLLECTION'
              | 'MANAGE_COLLECTIONS'
              | 'COLLECTION_SUBMIT'
              | 'USE_PERSONAL_ACCESS_KEYS'
              | 'MANAGE_SETTINGS'
              | 'MANAGE_SUSPENSIONS'
              | 'MANAGE_ROLES'
              | 'ADMINISTRATOR'
            >;

            /**
             * The time the resource was updated.
             */
            updatedAt: string;

            /**
             * The time the resource was soft-deleted.
             */
            deletedAt?: string;

            /**
             * Arbitrary extra data stored with the resource.
             */
            misc?: unknown;
          }
        }

        /**
         * A minimal object used to refer to a link without sending too much data.
         */
        export interface BodyLink {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * The time the resource was created.
           */
          createdAt: string;

          domain: string;

          slug: string;

          /**
           * The time the resource was updated.
           */
          updatedAt: string;

          /**
           * A web address
           */
          url: string;

          /**
           * The time the resource was soft-deleted.
           */
          deletedAt?: string;

          description?: string;

          favicon_image?: BodyLink.FaviconImage;

          /**
           * Arbitrary extra data stored with the resource.
           */
          misc?: unknown;

          primary_image?: BodyLink.PrimaryImage;

          title?: string;
        }

        export namespace BodyLink {
          export interface FaviconImage {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            filename: string;

            height: number;

            mime_type: string;

            /**
             * The API path of the asset, conforms to the schema's GET `/assets`.
             */
            path: string;

            width: number;

            parent?: unknown;
          }

          export interface PrimaryImage {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            filename: string;

            height: number;

            mime_type: string;

            /**
             * The API path of the asset, conforms to the schema's GET `/assets`.
             */
            path: string;

            width: number;

            parent?: unknown;
          }
        }

        export interface Collections {
          /**
           * A boolean indicating if the account in context has collected this item.
           */
          has_collected: boolean;

          /**
           * How many collections has this item been added to?
           */
          in_collections: number;
        }

        export interface Likes {
          /**
           * A boolean indicating if the account in context has liked this item.
           */
          liked: boolean;

          /**
           * A simple count of likes for contexts where pulling the full list would be
           * overkill. For use on minimal item reference schemas.
           */
          likes: number;
        }

        export interface React {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * A minimal reference to an account.
           */
          author: React.Author;

          /**
           * A single emoji character representing a reaction. In future, this will be
           * augmented with a more fully fledged custom emoji system.
           */
          emoji: string;
        }

        export namespace React {
          /**
           * A minimal reference to an account.
           */
          export interface Author {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            /**
             * The unique @ handle of an account.
             */
            handle: string;

            /**
             * The time the resource was created.
             */
            joined: string;

            /**
             * The account owners display name.
             */
            name: string;

            roles: Array<Author.Role>;

            /**
             * The time the resource was created.
             */
            suspended?: string;
          }

          export namespace Author {
            export interface Role {
              /**
               * A unique identifier for this resource.
               */
              id: string;

              /**
               * One role may be designated as a badge for the account. If ture, it should be
               * displayed prominently on the profile or in other contexts.
               */
              badge: boolean;

              colour: string;

              /**
               * The time the resource was created.
               */
              createdAt: string;

              /**
               * There are two built-in roles: everyone and admin, this boolean flag is set if
               * this role is one of the default built-in roles.
               */
              default: boolean;

              name: string;

              permissions: Array<
                | 'CREATE_POST'
                | 'READ_PUBLISHED_THREADS'
                | 'CREATE_REACTION'
                | 'MANAGE_POSTS'
                | 'MANAGE_CATEGORIES'
                | 'CREATE_INVITATION'
                | 'READ_PUBLISHED_LIBRARY'
                | 'MANAGE_LIBRARY'
                | 'SUBMIT_LIBRARY_NODE'
                | 'UPLOAD_ASSET'
                | 'MANAGE_EVENTS'
                | 'LIST_PROFILES'
                | 'READ_PROFILE'
                | 'CREATE_COLLECTION'
                | 'LIST_COLLECTIONS'
                | 'READ_COLLECTION'
                | 'MANAGE_COLLECTIONS'
                | 'COLLECTION_SUBMIT'
                | 'USE_PERSONAL_ACCESS_KEYS'
                | 'MANAGE_SETTINGS'
                | 'MANAGE_SUSPENSIONS'
                | 'MANAGE_ROLES'
                | 'ADMINISTRATOR'
              >;

              /**
               * The time the resource was updated.
               */
              updatedAt: string;

              /**
               * The time the resource was soft-deleted.
               */
              deletedAt?: string;

              /**
               * Arbitrary extra data stored with the resource.
               */
              misc?: unknown;
            }
          }
        }
      }
    }

    export interface ReplyStatus {
      /**
       * If requested by an authenticated account, the number of replies that were made
       * by that account to the thread.
       */
      replied: number;

      /**
       * The total number of replies to the thread.
       */
      replies: number;
    }

    /**
     * A minimal representation of a tag for use in most contexts where you don't need
     * the full list of items associated with the tag.
     */
    export interface Tag {
      /**
       * The colour of a tag.
       */
      colour: string;

      /**
       * The number of items tagged with this tag.
       */
      item_count: number;

      /**
       * The name of a tag.
       */
      name: string;
    }

    /**
     * A minimal object used to refer to a link without sending too much data.
     */
    export interface Link {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      domain: string;

      slug: string;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * A web address
       */
      url: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      description?: string;

      favicon_image?: Link.FaviconImage;

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;

      primary_image?: Link.PrimaryImage;

      title?: string;
    }

    export namespace Link {
      export interface FaviconImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }

      export interface PrimaryImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }
    }
  }

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  export interface TimeRange {
    end: string;

    start: string;
  }

  export interface PrimaryImage {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

    height: number;

    mime_type: string;

    /**
     * The API path of the asset, conforms to the schema's GET `/assets`.
     */
    path: string;

    width: number;

    parent?: unknown;
  }
}

/**
 * An event represents any kind of event, such as an online or in-person gathering,
 * a conference, a workshop, a webinar, etc. Events will contain a start and end
 * timestamp and may have a location and other metadata.
 *
 * Each event also gets its own thread for discussion and planning. This is
 * automatically created for every new event and is linked to the event.
 */
export interface EventRetrieveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  /**
   * An event location can be either physical or virtual. A physical location may
   * have an address or coordinates. A virtual location may have a link.
   */
  location: EventRetrieveResponse.EventLocationPhysical | EventRetrieveResponse.EventLocationVirtual;

  name: string;

  /**
   * A list of attendees, hosts and invites for an event.
   */
  participants: Array<EventRetrieveResponse.Participant>;

  participation_policy: 'open' | 'closed' | 'invite_only';

  slug: string;

  thread: EventRetrieveResponse.Thread;

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  time_range: EventRetrieveResponse.TimeRange;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  visibility: 'draft' | 'unlisted' | 'review' | 'published';

  /**
   * The maximum number of attendees that can attend the event.
   */
  capacity?: number;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  primary_image?: EventRetrieveResponse.PrimaryImage;
}

export namespace EventRetrieveResponse {
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

  export interface Participant {
    /**
     * A minimal reference to an account.
     */
    profile: Participant.Profile;

    role: 'attendee' | 'host';

    status: 'requested' | 'invited' | 'attending' | 'declined';
  }

  export namespace Participant {
    /**
     * A minimal reference to an account.
     */
    export interface Profile {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The unique @ handle of an account.
       */
      handle: string;

      /**
       * The time the resource was created.
       */
      joined: string;

      /**
       * The account owners display name.
       */
      name: string;

      roles: Array<Profile.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace Profile {
      export interface Role {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * One role may be designated as a badge for the account. If ture, it should be
         * displayed prominently on the profile or in other contexts.
         */
        badge: boolean;

        colour: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        /**
         * There are two built-in roles: everyone and admin, this boolean flag is set if
         * this role is one of the default built-in roles.
         */
        default: boolean;

        name: string;

        permissions: Array<
          | 'CREATE_POST'
          | 'READ_PUBLISHED_THREADS'
          | 'CREATE_REACTION'
          | 'MANAGE_POSTS'
          | 'MANAGE_CATEGORIES'
          | 'CREATE_INVITATION'
          | 'READ_PUBLISHED_LIBRARY'
          | 'MANAGE_LIBRARY'
          | 'SUBMIT_LIBRARY_NODE'
          | 'UPLOAD_ASSET'
          | 'MANAGE_EVENTS'
          | 'LIST_PROFILES'
          | 'READ_PROFILE'
          | 'CREATE_COLLECTION'
          | 'LIST_COLLECTIONS'
          | 'READ_COLLECTION'
          | 'MANAGE_COLLECTIONS'
          | 'COLLECTION_SUBMIT'
          | 'USE_PERSONAL_ACCESS_KEYS'
          | 'MANAGE_SETTINGS'
          | 'MANAGE_SUSPENSIONS'
          | 'MANAGE_ROLES'
          | 'ADMINISTRATOR'
        >;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;
      }
    }
  }

  export interface Thread {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Thread.Asset>;

    /**
     * A minimal reference to an account.
     */
    author: Thread.Author;

    /**
     * The body text of a post within a thread. The type is either a string or an
     * object, depending on what was used during creation. Strings can be used for
     * basic plain text or markdown content and objects are used for more complex types
     * such as Slate.js editor documents.
     */
    body: string;

    body_links: Array<Thread.BodyLink>;

    category: Thread.Category;

    collections: Thread.Collections;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    likes: Thread.Likes;

    /**
     * Whether the thread is pinned in this category.
     */
    pinned: boolean;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Thread.React>;

    replies: Thread.Replies;

    reply_status: Thread.ReplyStatus;

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
    tags: Array<Thread.Tag>;

    /**
     * The title of a thread.
     */
    title: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

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
    link?: Thread.Link;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
  }

  export namespace Thread {
    export interface Asset {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

      height: number;

      mime_type: string;

      /**
       * The API path of the asset, conforms to the schema's GET `/assets`.
       */
      path: string;

      width: number;

      parent?: unknown;
    }

    /**
     * A minimal reference to an account.
     */
    export interface Author {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The unique @ handle of an account.
       */
      handle: string;

      /**
       * The time the resource was created.
       */
      joined: string;

      /**
       * The account owners display name.
       */
      name: string;

      roles: Array<Author.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace Author {
      export interface Role {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * One role may be designated as a badge for the account. If ture, it should be
         * displayed prominently on the profile or in other contexts.
         */
        badge: boolean;

        colour: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        /**
         * There are two built-in roles: everyone and admin, this boolean flag is set if
         * this role is one of the default built-in roles.
         */
        default: boolean;

        name: string;

        permissions: Array<
          | 'CREATE_POST'
          | 'READ_PUBLISHED_THREADS'
          | 'CREATE_REACTION'
          | 'MANAGE_POSTS'
          | 'MANAGE_CATEGORIES'
          | 'CREATE_INVITATION'
          | 'READ_PUBLISHED_LIBRARY'
          | 'MANAGE_LIBRARY'
          | 'SUBMIT_LIBRARY_NODE'
          | 'UPLOAD_ASSET'
          | 'MANAGE_EVENTS'
          | 'LIST_PROFILES'
          | 'READ_PROFILE'
          | 'CREATE_COLLECTION'
          | 'LIST_COLLECTIONS'
          | 'READ_COLLECTION'
          | 'MANAGE_COLLECTIONS'
          | 'COLLECTION_SUBMIT'
          | 'USE_PERSONAL_ACCESS_KEYS'
          | 'MANAGE_SETTINGS'
          | 'MANAGE_SUSPENSIONS'
          | 'MANAGE_ROLES'
          | 'ADMINISTRATOR'
        >;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;
      }
    }

    /**
     * A minimal object used to refer to a link without sending too much data.
     */
    export interface BodyLink {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      domain: string;

      slug: string;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * A web address
       */
      url: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      description?: string;

      favicon_image?: BodyLink.FaviconImage;

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;

      primary_image?: BodyLink.PrimaryImage;

      title?: string;
    }

    export namespace BodyLink {
      export interface FaviconImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }

      export interface PrimaryImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }
    }

    export interface Category {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      admin: boolean;

      colour: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      description: string;

      /**
       * A category's user-facing name.
       */
      name: string;

      /**
       * A category's URL-safe slug.
       */
      slug: string;

      sort: number;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      /**
       * Arbitrary metadata for the resource.
       */
      meta?: { [key: string]: unknown };

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;
    }

    export interface Collections {
      /**
       * A boolean indicating if the account in context has collected this item.
       */
      has_collected: boolean;

      /**
       * How many collections has this item been added to?
       */
      in_collections: number;
    }

    export interface Likes {
      /**
       * A boolean indicating if the account in context has liked this item.
       */
      liked: boolean;

      /**
       * A simple count of likes for contexts where pulling the full list would be
       * overkill. For use on minimal item reference schemas.
       */
      likes: number;
    }

    export interface React {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * A minimal reference to an account.
       */
      author: React.Author;

      /**
       * A single emoji character representing a reaction. In future, this will be
       * augmented with a more fully fledged custom emoji system.
       */
      emoji: string;
    }

    export namespace React {
      /**
       * A minimal reference to an account.
       */
      export interface Author {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * The unique @ handle of an account.
         */
        handle: string;

        /**
         * The time the resource was created.
         */
        joined: string;

        /**
         * The account owners display name.
         */
        name: string;

        roles: Array<Author.Role>;

        /**
         * The time the resource was created.
         */
        suspended?: string;
      }

      export namespace Author {
        export interface Role {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * One role may be designated as a badge for the account. If ture, it should be
           * displayed prominently on the profile or in other contexts.
           */
          badge: boolean;

          colour: string;

          /**
           * The time the resource was created.
           */
          createdAt: string;

          /**
           * There are two built-in roles: everyone and admin, this boolean flag is set if
           * this role is one of the default built-in roles.
           */
          default: boolean;

          name: string;

          permissions: Array<
            | 'CREATE_POST'
            | 'READ_PUBLISHED_THREADS'
            | 'CREATE_REACTION'
            | 'MANAGE_POSTS'
            | 'MANAGE_CATEGORIES'
            | 'CREATE_INVITATION'
            | 'READ_PUBLISHED_LIBRARY'
            | 'MANAGE_LIBRARY'
            | 'SUBMIT_LIBRARY_NODE'
            | 'UPLOAD_ASSET'
            | 'MANAGE_EVENTS'
            | 'LIST_PROFILES'
            | 'READ_PROFILE'
            | 'CREATE_COLLECTION'
            | 'LIST_COLLECTIONS'
            | 'READ_COLLECTION'
            | 'MANAGE_COLLECTIONS'
            | 'COLLECTION_SUBMIT'
            | 'USE_PERSONAL_ACCESS_KEYS'
            | 'MANAGE_SETTINGS'
            | 'MANAGE_SUSPENSIONS'
            | 'MANAGE_ROLES'
            | 'ADMINISTRATOR'
          >;

          /**
           * The time the resource was updated.
           */
          updatedAt: string;

          /**
           * The time the resource was soft-deleted.
           */
          deletedAt?: string;

          /**
           * Arbitrary extra data stored with the resource.
           */
          misc?: unknown;
        }
      }
    }

    export interface Replies {
      current_page: number;

      page_size: number;

      replies: Array<Replies.Reply>;

      results: number;

      total_pages: number;

      next_page?: number;
    }

    export namespace Replies {
      /**
       * A new post within a thread of posts. A post may reply to another post in the
       * thread by specifying the `reply_to` property. The identifier in the `reply_to`
       * value must be post within the same thread.
       */
      export interface Reply {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        assets: Array<Reply.Asset>;

        /**
         * A minimal reference to an account.
         */
        author: Reply.Author;

        /**
         * The body text of a post within a thread. The type is either a string or an
         * object, depending on what was used during creation. Strings can be used for
         * basic plain text or markdown content and objects are used for more complex types
         * such as Slate.js editor documents.
         */
        body: string;

        body_links: Array<Reply.BodyLink>;

        collections: Reply.Collections;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        likes: Reply.Likes;

        /**
         * A list of reactions this post has had from people.
         */
        reacts: Array<Reply.React>;

        /**
         * A unique identifier for this resource.
         */
        root_id: string;

        /**
         * A thread's ID and optional slug separated by a dash = it's unique mark. This
         * allows endpoints to respond to varying forms of a thread's ID.
         *
         * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
         * `top-10-movies-thread`, Storyden will understand both the forms:
         * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
         * identifier for that thread.
         */
        root_slug: string;

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
         * The title of a thread.
         */
        title: string;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        /**
         * A short version of the post's body text for use in previews.
         */
        description?: string;

        /**
         * Arbitrary metadata for the resource.
         */
        meta?: { [key: string]: unknown };

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;

        /**
         * A unique identifier for this resource.
         */
        reply_to?: string;
      }

      export namespace Reply {
        export interface Asset {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          filename: string;

          height: number;

          mime_type: string;

          /**
           * The API path of the asset, conforms to the schema's GET `/assets`.
           */
          path: string;

          width: number;

          parent?: unknown;
        }

        /**
         * A minimal reference to an account.
         */
        export interface Author {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * The unique @ handle of an account.
           */
          handle: string;

          /**
           * The time the resource was created.
           */
          joined: string;

          /**
           * The account owners display name.
           */
          name: string;

          roles: Array<Author.Role>;

          /**
           * The time the resource was created.
           */
          suspended?: string;
        }

        export namespace Author {
          export interface Role {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            /**
             * One role may be designated as a badge for the account. If ture, it should be
             * displayed prominently on the profile or in other contexts.
             */
            badge: boolean;

            colour: string;

            /**
             * The time the resource was created.
             */
            createdAt: string;

            /**
             * There are two built-in roles: everyone and admin, this boolean flag is set if
             * this role is one of the default built-in roles.
             */
            default: boolean;

            name: string;

            permissions: Array<
              | 'CREATE_POST'
              | 'READ_PUBLISHED_THREADS'
              | 'CREATE_REACTION'
              | 'MANAGE_POSTS'
              | 'MANAGE_CATEGORIES'
              | 'CREATE_INVITATION'
              | 'READ_PUBLISHED_LIBRARY'
              | 'MANAGE_LIBRARY'
              | 'SUBMIT_LIBRARY_NODE'
              | 'UPLOAD_ASSET'
              | 'MANAGE_EVENTS'
              | 'LIST_PROFILES'
              | 'READ_PROFILE'
              | 'CREATE_COLLECTION'
              | 'LIST_COLLECTIONS'
              | 'READ_COLLECTION'
              | 'MANAGE_COLLECTIONS'
              | 'COLLECTION_SUBMIT'
              | 'USE_PERSONAL_ACCESS_KEYS'
              | 'MANAGE_SETTINGS'
              | 'MANAGE_SUSPENSIONS'
              | 'MANAGE_ROLES'
              | 'ADMINISTRATOR'
            >;

            /**
             * The time the resource was updated.
             */
            updatedAt: string;

            /**
             * The time the resource was soft-deleted.
             */
            deletedAt?: string;

            /**
             * Arbitrary extra data stored with the resource.
             */
            misc?: unknown;
          }
        }

        /**
         * A minimal object used to refer to a link without sending too much data.
         */
        export interface BodyLink {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * The time the resource was created.
           */
          createdAt: string;

          domain: string;

          slug: string;

          /**
           * The time the resource was updated.
           */
          updatedAt: string;

          /**
           * A web address
           */
          url: string;

          /**
           * The time the resource was soft-deleted.
           */
          deletedAt?: string;

          description?: string;

          favicon_image?: BodyLink.FaviconImage;

          /**
           * Arbitrary extra data stored with the resource.
           */
          misc?: unknown;

          primary_image?: BodyLink.PrimaryImage;

          title?: string;
        }

        export namespace BodyLink {
          export interface FaviconImage {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            filename: string;

            height: number;

            mime_type: string;

            /**
             * The API path of the asset, conforms to the schema's GET `/assets`.
             */
            path: string;

            width: number;

            parent?: unknown;
          }

          export interface PrimaryImage {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            filename: string;

            height: number;

            mime_type: string;

            /**
             * The API path of the asset, conforms to the schema's GET `/assets`.
             */
            path: string;

            width: number;

            parent?: unknown;
          }
        }

        export interface Collections {
          /**
           * A boolean indicating if the account in context has collected this item.
           */
          has_collected: boolean;

          /**
           * How many collections has this item been added to?
           */
          in_collections: number;
        }

        export interface Likes {
          /**
           * A boolean indicating if the account in context has liked this item.
           */
          liked: boolean;

          /**
           * A simple count of likes for contexts where pulling the full list would be
           * overkill. For use on minimal item reference schemas.
           */
          likes: number;
        }

        export interface React {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * A minimal reference to an account.
           */
          author: React.Author;

          /**
           * A single emoji character representing a reaction. In future, this will be
           * augmented with a more fully fledged custom emoji system.
           */
          emoji: string;
        }

        export namespace React {
          /**
           * A minimal reference to an account.
           */
          export interface Author {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            /**
             * The unique @ handle of an account.
             */
            handle: string;

            /**
             * The time the resource was created.
             */
            joined: string;

            /**
             * The account owners display name.
             */
            name: string;

            roles: Array<Author.Role>;

            /**
             * The time the resource was created.
             */
            suspended?: string;
          }

          export namespace Author {
            export interface Role {
              /**
               * A unique identifier for this resource.
               */
              id: string;

              /**
               * One role may be designated as a badge for the account. If ture, it should be
               * displayed prominently on the profile or in other contexts.
               */
              badge: boolean;

              colour: string;

              /**
               * The time the resource was created.
               */
              createdAt: string;

              /**
               * There are two built-in roles: everyone and admin, this boolean flag is set if
               * this role is one of the default built-in roles.
               */
              default: boolean;

              name: string;

              permissions: Array<
                | 'CREATE_POST'
                | 'READ_PUBLISHED_THREADS'
                | 'CREATE_REACTION'
                | 'MANAGE_POSTS'
                | 'MANAGE_CATEGORIES'
                | 'CREATE_INVITATION'
                | 'READ_PUBLISHED_LIBRARY'
                | 'MANAGE_LIBRARY'
                | 'SUBMIT_LIBRARY_NODE'
                | 'UPLOAD_ASSET'
                | 'MANAGE_EVENTS'
                | 'LIST_PROFILES'
                | 'READ_PROFILE'
                | 'CREATE_COLLECTION'
                | 'LIST_COLLECTIONS'
                | 'READ_COLLECTION'
                | 'MANAGE_COLLECTIONS'
                | 'COLLECTION_SUBMIT'
                | 'USE_PERSONAL_ACCESS_KEYS'
                | 'MANAGE_SETTINGS'
                | 'MANAGE_SUSPENSIONS'
                | 'MANAGE_ROLES'
                | 'ADMINISTRATOR'
              >;

              /**
               * The time the resource was updated.
               */
              updatedAt: string;

              /**
               * The time the resource was soft-deleted.
               */
              deletedAt?: string;

              /**
               * Arbitrary extra data stored with the resource.
               */
              misc?: unknown;
            }
          }
        }
      }
    }

    export interface ReplyStatus {
      /**
       * If requested by an authenticated account, the number of replies that were made
       * by that account to the thread.
       */
      replied: number;

      /**
       * The total number of replies to the thread.
       */
      replies: number;
    }

    /**
     * A minimal representation of a tag for use in most contexts where you don't need
     * the full list of items associated with the tag.
     */
    export interface Tag {
      /**
       * The colour of a tag.
       */
      colour: string;

      /**
       * The number of items tagged with this tag.
       */
      item_count: number;

      /**
       * The name of a tag.
       */
      name: string;
    }

    /**
     * A minimal object used to refer to a link without sending too much data.
     */
    export interface Link {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      domain: string;

      slug: string;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * A web address
       */
      url: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      description?: string;

      favicon_image?: Link.FaviconImage;

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;

      primary_image?: Link.PrimaryImage;

      title?: string;
    }

    export namespace Link {
      export interface FaviconImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }

      export interface PrimaryImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }
    }
  }

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  export interface TimeRange {
    end: string;

    start: string;
  }

  export interface PrimaryImage {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

    height: number;

    mime_type: string;

    /**
     * The API path of the asset, conforms to the schema's GET `/assets`.
     */
    path: string;

    width: number;

    parent?: unknown;
  }
}

/**
 * An event represents any kind of event, such as an online or in-person gathering,
 * a conference, a workshop, a webinar, etc. Events will contain a start and end
 * timestamp and may have a location and other metadata.
 *
 * Each event also gets its own thread for discussion and planning. This is
 * automatically created for every new event and is linked to the event.
 */
export interface EventUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  description: string;

  /**
   * An event location can be either physical or virtual. A physical location may
   * have an address or coordinates. A virtual location may have a link.
   */
  location: EventUpdateResponse.EventLocationPhysical | EventUpdateResponse.EventLocationVirtual;

  name: string;

  /**
   * A list of attendees, hosts and invites for an event.
   */
  participants: Array<EventUpdateResponse.Participant>;

  participation_policy: 'open' | 'closed' | 'invite_only';

  slug: string;

  thread: EventUpdateResponse.Thread;

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  time_range: EventUpdateResponse.TimeRange;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  visibility: 'draft' | 'unlisted' | 'review' | 'published';

  /**
   * The maximum number of attendees that can attend the event.
   */
  capacity?: number;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;

  primary_image?: EventUpdateResponse.PrimaryImage;
}

export namespace EventUpdateResponse {
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

  export interface Participant {
    /**
     * A minimal reference to an account.
     */
    profile: Participant.Profile;

    role: 'attendee' | 'host';

    status: 'requested' | 'invited' | 'attending' | 'declined';
  }

  export namespace Participant {
    /**
     * A minimal reference to an account.
     */
    export interface Profile {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The unique @ handle of an account.
       */
      handle: string;

      /**
       * The time the resource was created.
       */
      joined: string;

      /**
       * The account owners display name.
       */
      name: string;

      roles: Array<Profile.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace Profile {
      export interface Role {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * One role may be designated as a badge for the account. If ture, it should be
         * displayed prominently on the profile or in other contexts.
         */
        badge: boolean;

        colour: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        /**
         * There are two built-in roles: everyone and admin, this boolean flag is set if
         * this role is one of the default built-in roles.
         */
        default: boolean;

        name: string;

        permissions: Array<
          | 'CREATE_POST'
          | 'READ_PUBLISHED_THREADS'
          | 'CREATE_REACTION'
          | 'MANAGE_POSTS'
          | 'MANAGE_CATEGORIES'
          | 'CREATE_INVITATION'
          | 'READ_PUBLISHED_LIBRARY'
          | 'MANAGE_LIBRARY'
          | 'SUBMIT_LIBRARY_NODE'
          | 'UPLOAD_ASSET'
          | 'MANAGE_EVENTS'
          | 'LIST_PROFILES'
          | 'READ_PROFILE'
          | 'CREATE_COLLECTION'
          | 'LIST_COLLECTIONS'
          | 'READ_COLLECTION'
          | 'MANAGE_COLLECTIONS'
          | 'COLLECTION_SUBMIT'
          | 'USE_PERSONAL_ACCESS_KEYS'
          | 'MANAGE_SETTINGS'
          | 'MANAGE_SUSPENSIONS'
          | 'MANAGE_ROLES'
          | 'ADMINISTRATOR'
        >;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;
      }
    }
  }

  export interface Thread {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    assets: Array<Thread.Asset>;

    /**
     * A minimal reference to an account.
     */
    author: Thread.Author;

    /**
     * The body text of a post within a thread. The type is either a string or an
     * object, depending on what was used during creation. Strings can be used for
     * basic plain text or markdown content and objects are used for more complex types
     * such as Slate.js editor documents.
     */
    body: string;

    body_links: Array<Thread.BodyLink>;

    category: Thread.Category;

    collections: Thread.Collections;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    likes: Thread.Likes;

    /**
     * Whether the thread is pinned in this category.
     */
    pinned: boolean;

    /**
     * A list of reactions this post has had from people.
     */
    reacts: Array<Thread.React>;

    replies: Thread.Replies;

    reply_status: Thread.ReplyStatus;

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
    tags: Array<Thread.Tag>;

    /**
     * The title of a thread.
     */
    title: string;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

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
    link?: Thread.Link;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;
  }

  export namespace Thread {
    export interface Asset {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

      height: number;

      mime_type: string;

      /**
       * The API path of the asset, conforms to the schema's GET `/assets`.
       */
      path: string;

      width: number;

      parent?: unknown;
    }

    /**
     * A minimal reference to an account.
     */
    export interface Author {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The unique @ handle of an account.
       */
      handle: string;

      /**
       * The time the resource was created.
       */
      joined: string;

      /**
       * The account owners display name.
       */
      name: string;

      roles: Array<Author.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace Author {
      export interface Role {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * One role may be designated as a badge for the account. If ture, it should be
         * displayed prominently on the profile or in other contexts.
         */
        badge: boolean;

        colour: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        /**
         * There are two built-in roles: everyone and admin, this boolean flag is set if
         * this role is one of the default built-in roles.
         */
        default: boolean;

        name: string;

        permissions: Array<
          | 'CREATE_POST'
          | 'READ_PUBLISHED_THREADS'
          | 'CREATE_REACTION'
          | 'MANAGE_POSTS'
          | 'MANAGE_CATEGORIES'
          | 'CREATE_INVITATION'
          | 'READ_PUBLISHED_LIBRARY'
          | 'MANAGE_LIBRARY'
          | 'SUBMIT_LIBRARY_NODE'
          | 'UPLOAD_ASSET'
          | 'MANAGE_EVENTS'
          | 'LIST_PROFILES'
          | 'READ_PROFILE'
          | 'CREATE_COLLECTION'
          | 'LIST_COLLECTIONS'
          | 'READ_COLLECTION'
          | 'MANAGE_COLLECTIONS'
          | 'COLLECTION_SUBMIT'
          | 'USE_PERSONAL_ACCESS_KEYS'
          | 'MANAGE_SETTINGS'
          | 'MANAGE_SUSPENSIONS'
          | 'MANAGE_ROLES'
          | 'ADMINISTRATOR'
        >;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;
      }
    }

    /**
     * A minimal object used to refer to a link without sending too much data.
     */
    export interface BodyLink {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      domain: string;

      slug: string;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * A web address
       */
      url: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      description?: string;

      favicon_image?: BodyLink.FaviconImage;

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;

      primary_image?: BodyLink.PrimaryImage;

      title?: string;
    }

    export namespace BodyLink {
      export interface FaviconImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }

      export interface PrimaryImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }
    }

    export interface Category {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      admin: boolean;

      colour: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      description: string;

      /**
       * A category's user-facing name.
       */
      name: string;

      /**
       * A category's URL-safe slug.
       */
      slug: string;

      sort: number;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      /**
       * Arbitrary metadata for the resource.
       */
      meta?: { [key: string]: unknown };

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;
    }

    export interface Collections {
      /**
       * A boolean indicating if the account in context has collected this item.
       */
      has_collected: boolean;

      /**
       * How many collections has this item been added to?
       */
      in_collections: number;
    }

    export interface Likes {
      /**
       * A boolean indicating if the account in context has liked this item.
       */
      liked: boolean;

      /**
       * A simple count of likes for contexts where pulling the full list would be
       * overkill. For use on minimal item reference schemas.
       */
      likes: number;
    }

    export interface React {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * A minimal reference to an account.
       */
      author: React.Author;

      /**
       * A single emoji character representing a reaction. In future, this will be
       * augmented with a more fully fledged custom emoji system.
       */
      emoji: string;
    }

    export namespace React {
      /**
       * A minimal reference to an account.
       */
      export interface Author {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * The unique @ handle of an account.
         */
        handle: string;

        /**
         * The time the resource was created.
         */
        joined: string;

        /**
         * The account owners display name.
         */
        name: string;

        roles: Array<Author.Role>;

        /**
         * The time the resource was created.
         */
        suspended?: string;
      }

      export namespace Author {
        export interface Role {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * One role may be designated as a badge for the account. If ture, it should be
           * displayed prominently on the profile or in other contexts.
           */
          badge: boolean;

          colour: string;

          /**
           * The time the resource was created.
           */
          createdAt: string;

          /**
           * There are two built-in roles: everyone and admin, this boolean flag is set if
           * this role is one of the default built-in roles.
           */
          default: boolean;

          name: string;

          permissions: Array<
            | 'CREATE_POST'
            | 'READ_PUBLISHED_THREADS'
            | 'CREATE_REACTION'
            | 'MANAGE_POSTS'
            | 'MANAGE_CATEGORIES'
            | 'CREATE_INVITATION'
            | 'READ_PUBLISHED_LIBRARY'
            | 'MANAGE_LIBRARY'
            | 'SUBMIT_LIBRARY_NODE'
            | 'UPLOAD_ASSET'
            | 'MANAGE_EVENTS'
            | 'LIST_PROFILES'
            | 'READ_PROFILE'
            | 'CREATE_COLLECTION'
            | 'LIST_COLLECTIONS'
            | 'READ_COLLECTION'
            | 'MANAGE_COLLECTIONS'
            | 'COLLECTION_SUBMIT'
            | 'USE_PERSONAL_ACCESS_KEYS'
            | 'MANAGE_SETTINGS'
            | 'MANAGE_SUSPENSIONS'
            | 'MANAGE_ROLES'
            | 'ADMINISTRATOR'
          >;

          /**
           * The time the resource was updated.
           */
          updatedAt: string;

          /**
           * The time the resource was soft-deleted.
           */
          deletedAt?: string;

          /**
           * Arbitrary extra data stored with the resource.
           */
          misc?: unknown;
        }
      }
    }

    export interface Replies {
      current_page: number;

      page_size: number;

      replies: Array<Replies.Reply>;

      results: number;

      total_pages: number;

      next_page?: number;
    }

    export namespace Replies {
      /**
       * A new post within a thread of posts. A post may reply to another post in the
       * thread by specifying the `reply_to` property. The identifier in the `reply_to`
       * value must be post within the same thread.
       */
      export interface Reply {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        assets: Array<Reply.Asset>;

        /**
         * A minimal reference to an account.
         */
        author: Reply.Author;

        /**
         * The body text of a post within a thread. The type is either a string or an
         * object, depending on what was used during creation. Strings can be used for
         * basic plain text or markdown content and objects are used for more complex types
         * such as Slate.js editor documents.
         */
        body: string;

        body_links: Array<Reply.BodyLink>;

        collections: Reply.Collections;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        likes: Reply.Likes;

        /**
         * A list of reactions this post has had from people.
         */
        reacts: Array<Reply.React>;

        /**
         * A unique identifier for this resource.
         */
        root_id: string;

        /**
         * A thread's ID and optional slug separated by a dash = it's unique mark. This
         * allows endpoints to respond to varying forms of a thread's ID.
         *
         * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
         * `top-10-movies-thread`, Storyden will understand both the forms:
         * `cc5lnd2s1s4652adtu50-top-10-movies-thread` and `cc5lnd2s1s4652adtu50` as the
         * identifier for that thread.
         */
        root_slug: string;

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
         * The title of a thread.
         */
        title: string;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        /**
         * A short version of the post's body text for use in previews.
         */
        description?: string;

        /**
         * Arbitrary metadata for the resource.
         */
        meta?: { [key: string]: unknown };

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;

        /**
         * A unique identifier for this resource.
         */
        reply_to?: string;
      }

      export namespace Reply {
        export interface Asset {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          filename: string;

          height: number;

          mime_type: string;

          /**
           * The API path of the asset, conforms to the schema's GET `/assets`.
           */
          path: string;

          width: number;

          parent?: unknown;
        }

        /**
         * A minimal reference to an account.
         */
        export interface Author {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * The unique @ handle of an account.
           */
          handle: string;

          /**
           * The time the resource was created.
           */
          joined: string;

          /**
           * The account owners display name.
           */
          name: string;

          roles: Array<Author.Role>;

          /**
           * The time the resource was created.
           */
          suspended?: string;
        }

        export namespace Author {
          export interface Role {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            /**
             * One role may be designated as a badge for the account. If ture, it should be
             * displayed prominently on the profile or in other contexts.
             */
            badge: boolean;

            colour: string;

            /**
             * The time the resource was created.
             */
            createdAt: string;

            /**
             * There are two built-in roles: everyone and admin, this boolean flag is set if
             * this role is one of the default built-in roles.
             */
            default: boolean;

            name: string;

            permissions: Array<
              | 'CREATE_POST'
              | 'READ_PUBLISHED_THREADS'
              | 'CREATE_REACTION'
              | 'MANAGE_POSTS'
              | 'MANAGE_CATEGORIES'
              | 'CREATE_INVITATION'
              | 'READ_PUBLISHED_LIBRARY'
              | 'MANAGE_LIBRARY'
              | 'SUBMIT_LIBRARY_NODE'
              | 'UPLOAD_ASSET'
              | 'MANAGE_EVENTS'
              | 'LIST_PROFILES'
              | 'READ_PROFILE'
              | 'CREATE_COLLECTION'
              | 'LIST_COLLECTIONS'
              | 'READ_COLLECTION'
              | 'MANAGE_COLLECTIONS'
              | 'COLLECTION_SUBMIT'
              | 'USE_PERSONAL_ACCESS_KEYS'
              | 'MANAGE_SETTINGS'
              | 'MANAGE_SUSPENSIONS'
              | 'MANAGE_ROLES'
              | 'ADMINISTRATOR'
            >;

            /**
             * The time the resource was updated.
             */
            updatedAt: string;

            /**
             * The time the resource was soft-deleted.
             */
            deletedAt?: string;

            /**
             * Arbitrary extra data stored with the resource.
             */
            misc?: unknown;
          }
        }

        /**
         * A minimal object used to refer to a link without sending too much data.
         */
        export interface BodyLink {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * The time the resource was created.
           */
          createdAt: string;

          domain: string;

          slug: string;

          /**
           * The time the resource was updated.
           */
          updatedAt: string;

          /**
           * A web address
           */
          url: string;

          /**
           * The time the resource was soft-deleted.
           */
          deletedAt?: string;

          description?: string;

          favicon_image?: BodyLink.FaviconImage;

          /**
           * Arbitrary extra data stored with the resource.
           */
          misc?: unknown;

          primary_image?: BodyLink.PrimaryImage;

          title?: string;
        }

        export namespace BodyLink {
          export interface FaviconImage {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            filename: string;

            height: number;

            mime_type: string;

            /**
             * The API path of the asset, conforms to the schema's GET `/assets`.
             */
            path: string;

            width: number;

            parent?: unknown;
          }

          export interface PrimaryImage {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            filename: string;

            height: number;

            mime_type: string;

            /**
             * The API path of the asset, conforms to the schema's GET `/assets`.
             */
            path: string;

            width: number;

            parent?: unknown;
          }
        }

        export interface Collections {
          /**
           * A boolean indicating if the account in context has collected this item.
           */
          has_collected: boolean;

          /**
           * How many collections has this item been added to?
           */
          in_collections: number;
        }

        export interface Likes {
          /**
           * A boolean indicating if the account in context has liked this item.
           */
          liked: boolean;

          /**
           * A simple count of likes for contexts where pulling the full list would be
           * overkill. For use on minimal item reference schemas.
           */
          likes: number;
        }

        export interface React {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * A minimal reference to an account.
           */
          author: React.Author;

          /**
           * A single emoji character representing a reaction. In future, this will be
           * augmented with a more fully fledged custom emoji system.
           */
          emoji: string;
        }

        export namespace React {
          /**
           * A minimal reference to an account.
           */
          export interface Author {
            /**
             * A unique identifier for this resource.
             */
            id: string;

            /**
             * The unique @ handle of an account.
             */
            handle: string;

            /**
             * The time the resource was created.
             */
            joined: string;

            /**
             * The account owners display name.
             */
            name: string;

            roles: Array<Author.Role>;

            /**
             * The time the resource was created.
             */
            suspended?: string;
          }

          export namespace Author {
            export interface Role {
              /**
               * A unique identifier for this resource.
               */
              id: string;

              /**
               * One role may be designated as a badge for the account. If ture, it should be
               * displayed prominently on the profile or in other contexts.
               */
              badge: boolean;

              colour: string;

              /**
               * The time the resource was created.
               */
              createdAt: string;

              /**
               * There are two built-in roles: everyone and admin, this boolean flag is set if
               * this role is one of the default built-in roles.
               */
              default: boolean;

              name: string;

              permissions: Array<
                | 'CREATE_POST'
                | 'READ_PUBLISHED_THREADS'
                | 'CREATE_REACTION'
                | 'MANAGE_POSTS'
                | 'MANAGE_CATEGORIES'
                | 'CREATE_INVITATION'
                | 'READ_PUBLISHED_LIBRARY'
                | 'MANAGE_LIBRARY'
                | 'SUBMIT_LIBRARY_NODE'
                | 'UPLOAD_ASSET'
                | 'MANAGE_EVENTS'
                | 'LIST_PROFILES'
                | 'READ_PROFILE'
                | 'CREATE_COLLECTION'
                | 'LIST_COLLECTIONS'
                | 'READ_COLLECTION'
                | 'MANAGE_COLLECTIONS'
                | 'COLLECTION_SUBMIT'
                | 'USE_PERSONAL_ACCESS_KEYS'
                | 'MANAGE_SETTINGS'
                | 'MANAGE_SUSPENSIONS'
                | 'MANAGE_ROLES'
                | 'ADMINISTRATOR'
              >;

              /**
               * The time the resource was updated.
               */
              updatedAt: string;

              /**
               * The time the resource was soft-deleted.
               */
              deletedAt?: string;

              /**
               * Arbitrary extra data stored with the resource.
               */
              misc?: unknown;
            }
          }
        }
      }
    }

    export interface ReplyStatus {
      /**
       * If requested by an authenticated account, the number of replies that were made
       * by that account to the thread.
       */
      replied: number;

      /**
       * The total number of replies to the thread.
       */
      replies: number;
    }

    /**
     * A minimal representation of a tag for use in most contexts where you don't need
     * the full list of items associated with the tag.
     */
    export interface Tag {
      /**
       * The colour of a tag.
       */
      colour: string;

      /**
       * The number of items tagged with this tag.
       */
      item_count: number;

      /**
       * The name of a tag.
       */
      name: string;
    }

    /**
     * A minimal object used to refer to a link without sending too much data.
     */
    export interface Link {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      /**
       * The time the resource was created.
       */
      createdAt: string;

      domain: string;

      slug: string;

      /**
       * The time the resource was updated.
       */
      updatedAt: string;

      /**
       * A web address
       */
      url: string;

      /**
       * The time the resource was soft-deleted.
       */
      deletedAt?: string;

      description?: string;

      favicon_image?: Link.FaviconImage;

      /**
       * Arbitrary extra data stored with the resource.
       */
      misc?: unknown;

      primary_image?: Link.PrimaryImage;

      title?: string;
    }

    export namespace Link {
      export interface FaviconImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }

      export interface PrimaryImage {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        filename: string;

        height: number;

        mime_type: string;

        /**
         * The API path of the asset, conforms to the schema's GET `/assets`.
         */
        path: string;

        width: number;

        parent?: unknown;
      }
    }
  }

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  export interface TimeRange {
    end: string;

    start: string;
  }

  export interface PrimaryImage {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    filename: string;

    height: number;

    mime_type: string;

    /**
     * The API path of the asset, conforms to the schema's GET `/assets`.
     */
    path: string;

    width: number;

    parent?: unknown;
  }
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
  export interface Event {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    description: string;

    /**
     * An event location can be either physical or virtual. A physical location may
     * have an address or coordinates. A virtual location may have a link.
     */
    location: Event.EventLocationPhysical | Event.EventLocationVirtual;

    name: string;

    /**
     * A list of attendees, hosts and invites for an event.
     */
    participants: Array<Event.Participant>;

    participation_policy: 'open' | 'closed' | 'invite_only';

    slug: string;

    /**
     * A time range for an event, which may span multiple days or times of day.
     */
    time_range: Event.TimeRange;

    /**
     * The time the resource was updated.
     */
    updatedAt: string;

    visibility: 'draft' | 'unlisted' | 'review' | 'published';

    /**
     * The maximum number of attendees that can attend the event.
     */
    capacity?: number;

    /**
     * The time the resource was soft-deleted.
     */
    deletedAt?: string;

    /**
     * Arbitrary metadata for the resource.
     */
    meta?: { [key: string]: unknown };

    /**
     * Arbitrary extra data stored with the resource.
     */
    misc?: unknown;

    primary_image?: Event.PrimaryImage;
  }

  export namespace Event {
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

    export interface Participant {
      /**
       * A minimal reference to an account.
       */
      profile: Participant.Profile;

      role: 'attendee' | 'host';

      status: 'requested' | 'invited' | 'attending' | 'declined';
    }

    export namespace Participant {
      /**
       * A minimal reference to an account.
       */
      export interface Profile {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * The unique @ handle of an account.
         */
        handle: string;

        /**
         * The time the resource was created.
         */
        joined: string;

        /**
         * The account owners display name.
         */
        name: string;

        roles: Array<Profile.Role>;

        /**
         * The time the resource was created.
         */
        suspended?: string;
      }

      export namespace Profile {
        export interface Role {
          /**
           * A unique identifier for this resource.
           */
          id: string;

          /**
           * One role may be designated as a badge for the account. If ture, it should be
           * displayed prominently on the profile or in other contexts.
           */
          badge: boolean;

          colour: string;

          /**
           * The time the resource was created.
           */
          createdAt: string;

          /**
           * There are two built-in roles: everyone and admin, this boolean flag is set if
           * this role is one of the default built-in roles.
           */
          default: boolean;

          name: string;

          permissions: Array<
            | 'CREATE_POST'
            | 'READ_PUBLISHED_THREADS'
            | 'CREATE_REACTION'
            | 'MANAGE_POSTS'
            | 'MANAGE_CATEGORIES'
            | 'CREATE_INVITATION'
            | 'READ_PUBLISHED_LIBRARY'
            | 'MANAGE_LIBRARY'
            | 'SUBMIT_LIBRARY_NODE'
            | 'UPLOAD_ASSET'
            | 'MANAGE_EVENTS'
            | 'LIST_PROFILES'
            | 'READ_PROFILE'
            | 'CREATE_COLLECTION'
            | 'LIST_COLLECTIONS'
            | 'READ_COLLECTION'
            | 'MANAGE_COLLECTIONS'
            | 'COLLECTION_SUBMIT'
            | 'USE_PERSONAL_ACCESS_KEYS'
            | 'MANAGE_SETTINGS'
            | 'MANAGE_SUSPENSIONS'
            | 'MANAGE_ROLES'
            | 'ADMINISTRATOR'
          >;

          /**
           * The time the resource was updated.
           */
          updatedAt: string;

          /**
           * The time the resource was soft-deleted.
           */
          deletedAt?: string;

          /**
           * Arbitrary extra data stored with the resource.
           */
          misc?: unknown;
        }
      }
    }

    /**
     * A time range for an event, which may span multiple days or times of day.
     */
    export interface TimeRange {
      end: string;

      start: string;
    }

    export interface PrimaryImage {
      /**
       * A unique identifier for this resource.
       */
      id: string;

      filename: string;

      height: number;

      mime_type: string;

      /**
       * The API path of the asset, conforms to the schema's GET `/assets`.
       */
      path: string;

      width: number;

      parent?: unknown;
    }
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
  time_range: EventCreateParams.TimeRange;

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
  location?: EventCreateParams.EventLocationPhysical | EventCreateParams.EventLocationVirtual;

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

export namespace EventCreateParams {
  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  export interface TimeRange {
    end: string;

    start: string;
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
  location?: EventUpdateParams.EventLocationPhysical | EventUpdateParams.EventLocationVirtual;

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
  time_range?: EventUpdateParams.TimeRange;

  visibility?: 'draft' | 'unlisted' | 'review' | 'published';
}

export namespace EventUpdateParams {
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

  /**
   * A time range for an event, which may span multiple days or times of day.
   */
  export interface TimeRange {
    end: string;

    start: string;
  }
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
