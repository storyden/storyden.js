// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface AccountEmailAddress {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * A valid email address.
   */
  email_address: string;

  /**
   * Is the email address verified to be owned by the account?
   */
  verified: boolean;
}

export interface AccountRole extends CommonProperties {
  /**
   * One role may be designated as a badge for the account. If ture, it should be
   * displayed prominently on the profile or in other contexts.
   */
  badge: boolean;

  colour: string;

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
}

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

  parent?: Asset;
}

export interface AuthProvider {
  /**
   * The human-readable name of the provider.
   */
  name: string;

  /**
   * The slug name of the provider.
   */
  provider: string;

  /**
   * The hyperlink to render for the user.
   */
  link?: string;
}

export interface CategoryReference extends CommonProperties {
  admin: boolean;

  colour: string;

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
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };
}

export interface CollectionStatus {
  /**
   * A boolean indicating if the account in context has collected this item.
   */
  has_collected: boolean;

  /**
   * How many collections has this item been added to?
   */
  in_collections: number;
}

export interface CommonProperties {
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

export interface DatagraphItemNode {
  kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

  /**
   * A node is a text document with children and assets. It serves as an abstraction
   * for grouping structured data objects. It can represent things such as brands,
   * manufacturers, authors, directors, etc. Nodes can be referenced in content posts
   * and they also have their own content.
   */
  ref: CommonProperties;
}

export interface DatagraphItemPost {
  kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

  /**
   * A post represents a temporal piece of content, it can be a thread, or a reply to
   * a thread or something else such as a blog, announcement, etc. Post is used in
   * generic use-cases where it may not matter whether you want a thread or a reply,
   * such as search results or recommendations.
   */
  ref: Post;
}

export interface DatagraphItemProfile {
  kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

  ref: PublicProfile;
}

export interface DatagraphItemReply {
  kind: 'post' | 'thread' | 'reply' | 'node' | 'collection' | 'profile' | 'event';

  /**
   * A new post within a thread of posts. A post may reply to another post in the
   * thread by specifying the `reply_to` property. The identifier in the `reply_to`
   * value must be post within the same thread.
   */
  ref: Reply;
}

export interface LikeData {
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

/**
 * A minimal object used to refer to a link without sending too much data.
 */
export interface LinkReference extends CommonProperties {
  domain: string;

  slug: string;

  /**
   * A web address
   */
  url: string;

  description?: string;

  favicon_image?: Asset;

  primary_image?: Asset;

  title?: string;
}

export interface PaginatedReplyList {
  current_page: number;

  page_size: number;

  replies: Array<Reply>;

  results: number;

  total_pages: number;

  next_page?: number;
}

/**
 * A post represents a temporal piece of content, it can be a thread, or a reply to
 * a thread or something else such as a blog, announcement, etc. Post is used in
 * generic use-cases where it may not matter whether you want a thread or a reply,
 * such as search results or recommendations.
 */
export interface Post extends CommonProperties {
  assets: Array<Asset>;

  /**
   * A minimal reference to an account.
   */
  author: ProfileReference;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  body_links: Array<LinkReference>;

  collections: CollectionStatus;

  likes: LikeData;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<React>;

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
   * A short version of the post's body text for use in previews.
   */
  description?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };
}

export interface ProfileExternalLink {
  text: string;

  url: string;
}

/**
 * A minimal reference to an account.
 */
export interface ProfileReference {
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

  roles: Array<AccountRole>;

  /**
   * The time the resource was created.
   */
  suspended?: string;
}

export interface PublicProfile extends CommonProperties {
  /**
   * The rich-text bio for an account's public profile.
   */
  bio: string;

  /**
   * @deprecated
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
  interests: Array<TagReferenceProps>;

  /**
   * The time the resource was created.
   */
  joined: string;

  /**
   * The total number of likes received by a member.
   */
  like_score: number;

  links: Array<ProfileExternalLink>;

  /**
   * Arbitrary metadata for the resource.
   */
  meta: { [key: string]: unknown };

  /**
   * The account owners display name.
   */
  name: string;

  roles: Array<AccountRole>;

  image?: string;

  /**
   * A minimal reference to an account.
   */
  invited_by?: ProfileReference;

  /**
   * The time the resource was created.
   */
  suspended?: string;
}

export interface React {
  /**
   * A unique identifier for this resource.
   */
  id: string;

  /**
   * A minimal reference to an account.
   */
  author: ProfileReference;

  /**
   * A single emoji character representing a reaction. In future, this will be
   * augmented with a more fully fledged custom emoji system.
   */
  emoji: string;
}

/**
 * A new post within a thread of posts. A post may reply to another post in the
 * thread by specifying the `reply_to` property. The identifier in the `reply_to`
 * value must be post within the same thread.
 */
export interface Reply extends CommonProperties {
  assets: Array<Asset>;

  /**
   * A minimal reference to an account.
   */
  author: ProfileReference;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body: string;

  body_links: Array<LinkReference>;

  collections: CollectionStatus;

  likes: LikeData;

  /**
   * A list of reactions this post has had from people.
   */
  reacts: Array<React>;

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
   * A short version of the post's body text for use in previews.
   */
  description?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * A unique identifier for this resource.
   */
  reply_to?: string;
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

export interface TagReferenceProps {
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
