// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Posts extends APIResource {
  /**
   * Add a post to a collection. The collection must be owned by the account making
   * the request. The post can be any published post of any kind.
   *
   * @example
   * ```ts
   * const response = await client.collections.posts.add(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  add(
    collectionMark: string,
    postId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostAddResponse> {
    return this._client.put(`/collections/${collectionMark}/posts/${postId}`, options);
  }

  /**
   * Remove a post from a collection. The collection must be owned by the account
   * making the request.
   *
   * @example
   * ```ts
   * const post = await client.collections.posts.remove(
   *   'cc5lnd2s1s4652adtu50-top-10-movies-thread',
   *   'cc5lnd2s1s4652adtu50',
   * );
   * ```
   */
  remove(
    collectionMark: string,
    postId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostRemoveResponse> {
    return this._client.delete(`/collections/${collectionMark}/posts/${postId}`, options);
  }
}

export interface PostAddResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  items: Array<PostAddResponse.Item>;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: PostAddResponse.Owner;

  /**
   * A polymorphic identifier which is either a raw ID, a slug or both values
   * combined and separated by a hyphen. This allows endpoints to respond to varying
   * forms of a resource's ID which may be present in different app contexts. For
   * example, a slug may be used in a URL but raw IDs are often exposed as part of
   * API responses or in certain endpoint parameters. This type allows flexibility in
   * user experience as well as the API surface while ensuring performance during
   * database queries and other operations.
   *
   * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
   * `top-10-movies-thread`, Storyden will understand both the forms:
   * `cc5lnd2s1s4652adtu50-top-10-movies-thread` or `cc5lnd2s1s4652adtu50` or
   * `top-10-movies-thread` as the identifier for that thread.
   *
   * Marks are only ever used on the read path as they are a derivative data type and
   * are not stored in the database as-is, while IDs and slugs are. The write path
   * typically exposes slugs as writable and IDs as immutable.
   */
  slug: string;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  description?: string;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace PostAddResponse {
  export interface Item {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time that the item was added to the collection.
     */
    added_at: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    item:
      | Item.DatagraphItemPost
      | unknown
      | Item.DatagraphItemReply
      | Item.DatagraphItemNode
      | Item.DatagraphItemProfile;

    membership_type: 'normal' | 'submission_review' | 'submission_accepted';

    /**
     * A minimal reference to an account.
     */
    owner: Item.Owner;

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

    /**
     * For recommendations and other uses, only available when a Semdex is configured
     * for content indexing and contextual relativity scoring.
     */
    relevance_score?: number;
  }

  export namespace Item {
    export interface DatagraphItemPost {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      /**
       * A post represents a temporal piece of content, it can be a thread, or a reply to
       * a thread or something else such as a blog, announcement, etc. Post is used in
       * generic use-cases where it may not matter whether you want a thread or a reply,
       * such as search results or recommendations.
       */
      ref: DatagraphItemPost.Ref;
    }

    export namespace DatagraphItemPost {
      /**
       * A post represents a temporal piece of content, it can be a thread, or a reply to
       * a thread or something else such as a blog, announcement, etc. Post is used in
       * generic use-cases where it may not matter whether you want a thread or a reply,
       * such as search results or recommendations.
       */
      export interface Ref {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        assets: Array<Ref.Asset>;

        /**
         * A minimal reference to an account.
         */
        author: Ref.Author;

        /**
         * The body text of a post within a thread. The type is either a string or an
         * object, depending on what was used during creation. Strings can be used for
         * basic plain text or markdown content and objects are used for more complex types
         * such as Slate.js editor documents.
         */
        body: string;

        body_links: Array<Ref.BodyLink>;

        collections: Ref.Collections;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        likes: Ref.Likes;

        /**
         * A list of reactions this post has had from people.
         */
        reacts: Array<Ref.React>;

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
      }

      export namespace Ref {
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

    export interface DatagraphItemReply {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      /**
       * A new post within a thread of posts. A post may reply to another post in the
       * thread by specifying the `reply_to` property. The identifier in the `reply_to`
       * value must be post within the same thread.
       */
      ref: DatagraphItemReply.Ref;
    }

    export namespace DatagraphItemReply {
      /**
       * A new post within a thread of posts. A post may reply to another post in the
       * thread by specifying the `reply_to` property. The identifier in the `reply_to`
       * value must be post within the same thread.
       */
      export interface Ref {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        assets: Array<Ref.Asset>;

        /**
         * A minimal reference to an account.
         */
        author: Ref.Author;

        /**
         * The body text of a post within a thread. The type is either a string or an
         * object, depending on what was used during creation. Strings can be used for
         * basic plain text or markdown content and objects are used for more complex types
         * such as Slate.js editor documents.
         */
        body: string;

        body_links: Array<Ref.BodyLink>;

        collections: Ref.Collections;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        likes: Ref.Likes;

        /**
         * A list of reactions this post has had from people.
         */
        reacts: Array<Ref.React>;

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

      export namespace Ref {
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

    export interface DatagraphItemNode {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      /**
       * A node is a text document with children and assets. It serves as an abstraction
       * for grouping structured data objects. It can represent things such as brands,
       * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
       * and they also have their own content.
       */
      ref: DatagraphItemNode.Ref;
    }

    export namespace DatagraphItemNode {
      /**
       * A node is a text document with children and assets. It serves as an abstraction
       * for grouping structured data objects. It can represent things such as brands,
       * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
       * and they also have their own content.
       */
      export interface Ref {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

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

    export interface DatagraphItemProfile {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      ref: DatagraphItemProfile.Ref;
    }

    export namespace DatagraphItemProfile {
      export interface Ref {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * The rich-text bio for an account's public profile.
         */
        bio: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        followers: number;

        following: number;

        /**
         * The unique @ handle of an account.
         */
        handle: string;

        /**
         * A list of tags.
         */
        interests: Array<Ref.Interest>;

        /**
         * The time the resource was created.
         */
        joined: string;

        /**
         * The total number of likes received by a member.
         */
        like_score: number;

        links: Array<Ref.Link>;

        /**
         * Arbitrary metadata for the resource.
         */
        meta: { [key: string]: unknown };

        /**
         * The account owners display name.
         */
        name: string;

        roles: Array<Ref.Role>;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        image?: string;

        /**
         * A minimal reference to an account.
         */
        invited_by?: Ref.InvitedBy;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;

        /**
         * The time the resource was created.
         */
        suspended?: string;
      }

      export namespace Ref {
        /**
         * A minimal representation of a tag for use in most contexts where you don't need
         * the full list of items associated with the tag.
         */
        export interface Interest {
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

        export interface Link {
          text: string;

          url: string;
        }

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

        /**
         * A minimal reference to an account.
         */
        export interface InvitedBy {
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

          roles: Array<InvitedBy.Role>;

          /**
           * The time the resource was created.
           */
          suspended?: string;
        }

        export namespace InvitedBy {
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

    /**
     * A minimal reference to an account.
     */
    export interface Owner {
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

      roles: Array<Owner.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace Owner {
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
   * A minimal reference to an account.
   */
  export interface Owner {
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

    roles: Array<Owner.Role>;

    /**
     * The time the resource was created.
     */
    suspended?: string;
  }

  export namespace Owner {
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

export interface PostRemoveResponse {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * The time the resource was created.
   */
  createdAt: string;

  items: Array<PostRemoveResponse.Item>;

  name: string;

  /**
   * A minimal reference to an account.
   */
  owner: PostRemoveResponse.Owner;

  /**
   * A polymorphic identifier which is either a raw ID, a slug or both values
   * combined and separated by a hyphen. This allows endpoints to respond to varying
   * forms of a resource's ID which may be present in different app contexts. For
   * example, a slug may be used in a URL but raw IDs are often exposed as part of
   * API responses or in certain endpoint parameters. This type allows flexibility in
   * user experience as well as the API surface while ensuring performance during
   * database queries and other operations.
   *
   * For example, given a thread with the ID `cc5lnd2s1s4652adtu50` and the slug
   * `top-10-movies-thread`, Storyden will understand both the forms:
   * `cc5lnd2s1s4652adtu50-top-10-movies-thread` or `cc5lnd2s1s4652adtu50` or
   * `top-10-movies-thread` as the identifier for that thread.
   *
   * Marks are only ever used on the read path as they are a derivative data type and
   * are not stored in the database as-is, while IDs and slugs are. The write path
   * typically exposes slugs as writable and IDs as immutable.
   */
  slug: string;

  /**
   * The time the resource was updated.
   */
  updatedAt: string;

  /**
   * The time the resource was soft-deleted.
   */
  deletedAt?: string;

  description?: string;

  /**
   * Arbitrary extra data stored with the resource.
   */
  misc?: unknown;
}

export namespace PostRemoveResponse {
  export interface Item {
    /**
     * A unique identifier for this resource.
     */
    id: string;

    /**
     * The time that the item was added to the collection.
     */
    added_at: string;

    /**
     * The time the resource was created.
     */
    createdAt: string;

    item:
      | Item.DatagraphItemPost
      | unknown
      | Item.DatagraphItemReply
      | Item.DatagraphItemNode
      | Item.DatagraphItemProfile;

    membership_type: 'normal' | 'submission_review' | 'submission_accepted';

    /**
     * A minimal reference to an account.
     */
    owner: Item.Owner;

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

    /**
     * For recommendations and other uses, only available when a Semdex is configured
     * for content indexing and contextual relativity scoring.
     */
    relevance_score?: number;
  }

  export namespace Item {
    export interface DatagraphItemPost {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      /**
       * A post represents a temporal piece of content, it can be a thread, or a reply to
       * a thread or something else such as a blog, announcement, etc. Post is used in
       * generic use-cases where it may not matter whether you want a thread or a reply,
       * such as search results or recommendations.
       */
      ref: DatagraphItemPost.Ref;
    }

    export namespace DatagraphItemPost {
      /**
       * A post represents a temporal piece of content, it can be a thread, or a reply to
       * a thread or something else such as a blog, announcement, etc. Post is used in
       * generic use-cases where it may not matter whether you want a thread or a reply,
       * such as search results or recommendations.
       */
      export interface Ref {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        assets: Array<Ref.Asset>;

        /**
         * A minimal reference to an account.
         */
        author: Ref.Author;

        /**
         * The body text of a post within a thread. The type is either a string or an
         * object, depending on what was used during creation. Strings can be used for
         * basic plain text or markdown content and objects are used for more complex types
         * such as Slate.js editor documents.
         */
        body: string;

        body_links: Array<Ref.BodyLink>;

        collections: Ref.Collections;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        likes: Ref.Likes;

        /**
         * A list of reactions this post has had from people.
         */
        reacts: Array<Ref.React>;

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
      }

      export namespace Ref {
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

    export interface DatagraphItemReply {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      /**
       * A new post within a thread of posts. A post may reply to another post in the
       * thread by specifying the `reply_to` property. The identifier in the `reply_to`
       * value must be post within the same thread.
       */
      ref: DatagraphItemReply.Ref;
    }

    export namespace DatagraphItemReply {
      /**
       * A new post within a thread of posts. A post may reply to another post in the
       * thread by specifying the `reply_to` property. The identifier in the `reply_to`
       * value must be post within the same thread.
       */
      export interface Ref {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        assets: Array<Ref.Asset>;

        /**
         * A minimal reference to an account.
         */
        author: Ref.Author;

        /**
         * The body text of a post within a thread. The type is either a string or an
         * object, depending on what was used during creation. Strings can be used for
         * basic plain text or markdown content and objects are used for more complex types
         * such as Slate.js editor documents.
         */
        body: string;

        body_links: Array<Ref.BodyLink>;

        collections: Ref.Collections;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        likes: Ref.Likes;

        /**
         * A list of reactions this post has had from people.
         */
        reacts: Array<Ref.React>;

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

      export namespace Ref {
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

    export interface DatagraphItemNode {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      /**
       * A node is a text document with children and assets. It serves as an abstraction
       * for grouping structured data objects. It can represent things such as brands,
       * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
       * and they also have their own content.
       */
      ref: DatagraphItemNode.Ref;
    }

    export namespace DatagraphItemNode {
      /**
       * A node is a text document with children and assets. It serves as an abstraction
       * for grouping structured data objects. It can represent things such as brands,
       * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
       * and they also have their own content.
       */
      export interface Ref {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

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

    export interface DatagraphItemProfile {
      kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

      ref: DatagraphItemProfile.Ref;
    }

    export namespace DatagraphItemProfile {
      export interface Ref {
        /**
         * A unique identifier for this resource.
         */
        id: string;

        /**
         * The rich-text bio for an account's public profile.
         */
        bio: string;

        /**
         * The time the resource was created.
         */
        createdAt: string;

        followers: number;

        following: number;

        /**
         * The unique @ handle of an account.
         */
        handle: string;

        /**
         * A list of tags.
         */
        interests: Array<Ref.Interest>;

        /**
         * The time the resource was created.
         */
        joined: string;

        /**
         * The total number of likes received by a member.
         */
        like_score: number;

        links: Array<Ref.Link>;

        /**
         * Arbitrary metadata for the resource.
         */
        meta: { [key: string]: unknown };

        /**
         * The account owners display name.
         */
        name: string;

        roles: Array<Ref.Role>;

        /**
         * The time the resource was updated.
         */
        updatedAt: string;

        /**
         * The time the resource was soft-deleted.
         */
        deletedAt?: string;

        image?: string;

        /**
         * A minimal reference to an account.
         */
        invited_by?: Ref.InvitedBy;

        /**
         * Arbitrary extra data stored with the resource.
         */
        misc?: unknown;

        /**
         * The time the resource was created.
         */
        suspended?: string;
      }

      export namespace Ref {
        /**
         * A minimal representation of a tag for use in most contexts where you don't need
         * the full list of items associated with the tag.
         */
        export interface Interest {
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

        export interface Link {
          text: string;

          url: string;
        }

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

        /**
         * A minimal reference to an account.
         */
        export interface InvitedBy {
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

          roles: Array<InvitedBy.Role>;

          /**
           * The time the resource was created.
           */
          suspended?: string;
        }

        export namespace InvitedBy {
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

    /**
     * A minimal reference to an account.
     */
    export interface Owner {
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

      roles: Array<Owner.Role>;

      /**
       * The time the resource was created.
       */
      suspended?: string;
    }

    export namespace Owner {
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
   * A minimal reference to an account.
   */
  export interface Owner {
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

    roles: Array<Owner.Role>;

    /**
     * The time the resource was created.
     */
    suspended?: string;
  }

  export namespace Owner {
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

export declare namespace Posts {
  export { type PostAddResponse as PostAddResponse, type PostRemoveResponse as PostRemoveResponse };
}
