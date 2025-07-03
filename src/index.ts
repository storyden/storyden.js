// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { AssetUploadParams, Assets } from './resources/assets';
import {
  Categories,
  CategoryCreateParams,
  CategoryCreateResponse,
  CategoryListResponse,
  CategoryUpdateParams,
  CategoryUpdateResponse,
  CategoryUpdateSortOrderParams,
  CategoryUpdateSortOrderResponse,
} from './resources/categories';
import {
  Datagraph,
  DatagraphAskQuestionParams,
  DatagraphAskQuestionResponse,
  DatagraphQueryParams,
  DatagraphQueryResponse,
} from './resources/datagraph';
import { DocRetrieveResponse, Docs } from './resources/docs';
import {
  InvitationCreateParams,
  InvitationCreateResponse,
  InvitationListParams,
  InvitationListResponse,
  InvitationRetrieveResponse,
  Invitations,
} from './resources/invitations';
import {
  LinkCreateParams,
  LinkListParams,
  LinkListResponse,
  LinkRetrieveResponse,
  Links,
} from './resources/links';
import {
  NotificationListParams,
  NotificationListResponse,
  NotificationUpdateReadStatusParams,
  NotificationUpdateReadStatusResponse,
  Notifications,
} from './resources/notifications';
import { OpenAPIJson, OpenAPIJsonRetrieveResponse } from './resources/openapi-json';
import {
  RoleCreateParams,
  RoleCreateResponse,
  RoleListResponse,
  RoleRetrieveResponse,
  RoleUpdateParams,
  RoleUpdateResponse,
  Roles,
} from './resources/roles';
import { TagListParams, TagListResponse, TagRetrieveResponse, Tags } from './resources/tags';
import {
  ThreadCreateParams,
  ThreadCreateReplyParams,
  ThreadListParams,
  ThreadListResponse,
  ThreadRetrieveParams,
  ThreadUpdateParams,
  Threads,
} from './resources/threads';
import { Version, VersionRetrieveResponse } from './resources/version';
import {
  AccountListResponse,
  AccountPatchAllParams,
  AccountPatchAllResponse,
  Accounts,
} from './resources/accounts/accounts';
import { Admin, AdminUpdateSettingsParams, AdminUpdateSettingsResponse } from './resources/admin/admin';
import { Auth, AuthListProvidersResponse } from './resources/auth/auth';
import {
  CollectionCreateParams,
  CollectionCreateResponse,
  CollectionListParams,
  CollectionListResponse,
  CollectionRetrieveResponse,
  CollectionUpdateParams,
  CollectionUpdateResponse,
  Collections,
} from './resources/collections/collections';
import {
  EventCreateParams,
  EventCreateResponse,
  EventListParams,
  EventListResponse,
  EventLocationPhysical,
  EventLocationVirtual,
  EventParticipant,
  EventRetrieveResponse,
  EventTimeRange,
  EventUpdateParams,
  EventUpdateResponse,
  Events,
  Thread,
} from './resources/events/events';
import { Info, InfoRetrieveResponse } from './resources/info/info';
import { LikeRetrieveByProfileParams, LikeRetrieveByProfileResponse, Likes } from './resources/likes/likes';
import {
  NodeCreateParams,
  NodeDeleteParams,
  NodeDeleteResponse,
  NodeListParams,
  NodeListResponse,
  NodeProposeContentParams,
  NodeProposeContentResponse,
  NodeProposeTagsParams,
  NodeProposeTagsResponse,
  NodeProposeTitleParams,
  NodeProposeTitleResponse,
  NodeRetrieveParams,
  NodeRetrieveResponse,
  NodeUpdateParams,
  NodeUpdatePositionParams,
  NodeUpdatePositionResponse,
  NodeUpdatePropertiesParams,
  NodeUpdatePropertiesResponse,
  NodeUpdatePropertySchemaParams,
  NodeUpdatePropertySchemaResponse,
  NodeUpdateResponse,
  NodeUpdateVisibilityParams,
  NodeUpdateVisibilityResponse,
  Nodes,
} from './resources/nodes/nodes';
import { PostUpdateParams, Posts } from './resources/posts/posts';
import { ProfileListParams, ProfileListResponse, Profiles } from './resources/profiles/profiles';

export interface ClientOptions {
  /**
   * Defaults to process.env['STORYDEN_API_KEY'].
   */
  apiKey?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['STORYDEN_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Storyden API.
 */
export class Storyden extends Core.APIClient {
  apiKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Storyden API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['STORYDEN_API_KEY'] ?? null]
   * @param {string} [opts.baseURL=process.env['STORYDEN_BASE_URL'] ?? /api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('STORYDEN_BASE_URL'),
    apiKey = Core.readEnv('STORYDEN_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `/api`,
    };

    super({
      baseURL: options.baseURL!,
      baseURLOverridden: baseURL ? baseURL !== '/api' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  version: API.Version = new API.Version(this);
  openAPIJson: API.OpenAPIJson = new API.OpenAPIJson(this);
  docs: API.Docs = new API.Docs(this);
  info: API.Info = new API.Info(this);
  admin: API.Admin = new API.Admin(this);
  roles: API.Roles = new API.Roles(this);
  auth: API.Auth = new API.Auth(this);
  accounts: API.Accounts = new API.Accounts(this);
  invitations: API.Invitations = new API.Invitations(this);
  notifications: API.Notifications = new API.Notifications(this);
  profiles: API.Profiles = new API.Profiles(this);
  categories: API.Categories = new API.Categories(this);
  tags: API.Tags = new API.Tags(this);
  threads: API.Threads = new API.Threads(this);
  posts: API.Posts = new API.Posts(this);
  assets: API.Assets = new API.Assets(this);
  likes: API.Likes = new API.Likes(this);
  collections: API.Collections = new API.Collections(this);
  nodes: API.Nodes = new API.Nodes(this);
  links: API.Links = new API.Links(this);
  datagraph: API.Datagraph = new API.Datagraph(this);
  events: API.Events = new API.Events(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== '/api';
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.apiKey && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the apiKey to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiKey == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Storyden = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static StorydenError = Errors.StorydenError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Storyden.Version = Version;
Storyden.OpenAPIJson = OpenAPIJson;
Storyden.Docs = Docs;
Storyden.Info = Info;
Storyden.Admin = Admin;
Storyden.Roles = Roles;
Storyden.Auth = Auth;
Storyden.Accounts = Accounts;
Storyden.Invitations = Invitations;
Storyden.Notifications = Notifications;
Storyden.Profiles = Profiles;
Storyden.Categories = Categories;
Storyden.Tags = Tags;
Storyden.Threads = Threads;
Storyden.Posts = Posts;
Storyden.Assets = Assets;
Storyden.Likes = Likes;
Storyden.Collections = Collections;
Storyden.Nodes = Nodes;
Storyden.Links = Links;
Storyden.Datagraph = Datagraph;
Storyden.Events = Events;
export declare namespace Storyden {
  export type RequestOptions = Core.RequestOptions;

  export { Version as Version, type VersionRetrieveResponse as VersionRetrieveResponse };

  export { OpenAPIJson as OpenAPIJson, type OpenAPIJsonRetrieveResponse as OpenAPIJsonRetrieveResponse };

  export { Docs as Docs, type DocRetrieveResponse as DocRetrieveResponse };

  export { Info as Info, type InfoRetrieveResponse as InfoRetrieveResponse };

  export {
    Admin as Admin,
    type AdminUpdateSettingsResponse as AdminUpdateSettingsResponse,
    type AdminUpdateSettingsParams as AdminUpdateSettingsParams,
  };

  export {
    Roles as Roles,
    type RoleCreateResponse as RoleCreateResponse,
    type RoleRetrieveResponse as RoleRetrieveResponse,
    type RoleUpdateResponse as RoleUpdateResponse,
    type RoleListResponse as RoleListResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
  };

  export { Auth as Auth, type AuthListProvidersResponse as AuthListProvidersResponse };

  export {
    Accounts as Accounts,
    type AccountListResponse as AccountListResponse,
    type AccountPatchAllResponse as AccountPatchAllResponse,
    type AccountPatchAllParams as AccountPatchAllParams,
  };

  export {
    Invitations as Invitations,
    type InvitationCreateResponse as InvitationCreateResponse,
    type InvitationRetrieveResponse as InvitationRetrieveResponse,
    type InvitationListResponse as InvitationListResponse,
    type InvitationCreateParams as InvitationCreateParams,
    type InvitationListParams as InvitationListParams,
  };

  export {
    Notifications as Notifications,
    type NotificationListResponse as NotificationListResponse,
    type NotificationUpdateReadStatusResponse as NotificationUpdateReadStatusResponse,
    type NotificationListParams as NotificationListParams,
    type NotificationUpdateReadStatusParams as NotificationUpdateReadStatusParams,
  };

  export {
    Profiles as Profiles,
    type ProfileListResponse as ProfileListResponse,
    type ProfileListParams as ProfileListParams,
  };

  export {
    Categories as Categories,
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryUpdateResponse as CategoryUpdateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryUpdateSortOrderResponse as CategoryUpdateSortOrderResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryUpdateSortOrderParams as CategoryUpdateSortOrderParams,
  };

  export {
    Tags as Tags,
    type TagRetrieveResponse as TagRetrieveResponse,
    type TagListResponse as TagListResponse,
    type TagListParams as TagListParams,
  };

  export {
    Threads as Threads,
    type ThreadListResponse as ThreadListResponse,
    type ThreadCreateParams as ThreadCreateParams,
    type ThreadRetrieveParams as ThreadRetrieveParams,
    type ThreadUpdateParams as ThreadUpdateParams,
    type ThreadListParams as ThreadListParams,
    type ThreadCreateReplyParams as ThreadCreateReplyParams,
  };

  export { Posts as Posts, type PostUpdateParams as PostUpdateParams };

  export { Assets as Assets, type AssetUploadParams as AssetUploadParams };

  export {
    Likes as Likes,
    type LikeRetrieveByProfileResponse as LikeRetrieveByProfileResponse,
    type LikeRetrieveByProfileParams as LikeRetrieveByProfileParams,
  };

  export {
    Collections as Collections,
    type CollectionCreateResponse as CollectionCreateResponse,
    type CollectionRetrieveResponse as CollectionRetrieveResponse,
    type CollectionUpdateResponse as CollectionUpdateResponse,
    type CollectionListResponse as CollectionListResponse,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionUpdateParams as CollectionUpdateParams,
    type CollectionListParams as CollectionListParams,
  };

  export {
    Nodes as Nodes,
    type NodeRetrieveResponse as NodeRetrieveResponse,
    type NodeUpdateResponse as NodeUpdateResponse,
    type NodeListResponse as NodeListResponse,
    type NodeDeleteResponse as NodeDeleteResponse,
    type NodeProposeContentResponse as NodeProposeContentResponse,
    type NodeProposeTagsResponse as NodeProposeTagsResponse,
    type NodeProposeTitleResponse as NodeProposeTitleResponse,
    type NodeUpdatePositionResponse as NodeUpdatePositionResponse,
    type NodeUpdatePropertiesResponse as NodeUpdatePropertiesResponse,
    type NodeUpdatePropertySchemaResponse as NodeUpdatePropertySchemaResponse,
    type NodeUpdateVisibilityResponse as NodeUpdateVisibilityResponse,
    type NodeCreateParams as NodeCreateParams,
    type NodeRetrieveParams as NodeRetrieveParams,
    type NodeUpdateParams as NodeUpdateParams,
    type NodeListParams as NodeListParams,
    type NodeDeleteParams as NodeDeleteParams,
    type NodeProposeContentParams as NodeProposeContentParams,
    type NodeProposeTagsParams as NodeProposeTagsParams,
    type NodeProposeTitleParams as NodeProposeTitleParams,
    type NodeUpdatePositionParams as NodeUpdatePositionParams,
    type NodeUpdatePropertiesParams as NodeUpdatePropertiesParams,
    type NodeUpdatePropertySchemaParams as NodeUpdatePropertySchemaParams,
    type NodeUpdateVisibilityParams as NodeUpdateVisibilityParams,
  };

  export {
    Links as Links,
    type LinkRetrieveResponse as LinkRetrieveResponse,
    type LinkListResponse as LinkListResponse,
    type LinkCreateParams as LinkCreateParams,
    type LinkListParams as LinkListParams,
  };

  export {
    Datagraph as Datagraph,
    type DatagraphAskQuestionResponse as DatagraphAskQuestionResponse,
    type DatagraphQueryResponse as DatagraphQueryResponse,
    type DatagraphAskQuestionParams as DatagraphAskQuestionParams,
    type DatagraphQueryParams as DatagraphQueryParams,
  };

  export {
    Events as Events,
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

  export type AccountEmailAddress = API.AccountEmailAddress;
  export type AccountRole = API.AccountRole;
  export type Asset = API.Asset;
  export type AuthProvider = API.AuthProvider;
  export type CategoryReference = API.CategoryReference;
  export type CollectionStatus = API.CollectionStatus;
  export type CommonProperties = API.CommonProperties;
  export type DatagraphItemNode = API.DatagraphItemNode;
  export type DatagraphItemPost = API.DatagraphItemPost;
  export type DatagraphItemProfile = API.DatagraphItemProfile;
  export type DatagraphItemReply = API.DatagraphItemReply;
  export type LikeData = API.LikeData;
  export type LinkReference = API.LinkReference;
  export type PaginatedReplyList = API.PaginatedReplyList;
  export type Post = API.Post;
  export type ProfileExternalLink = API.ProfileExternalLink;
  export type ProfileReference = API.ProfileReference;
  export type PublicProfile = API.PublicProfile;
  export type React = API.React;
  export type Reply = API.Reply;
  export type ReplyStatus = API.ReplyStatus;
  export type TagReferenceProps = API.TagReferenceProps;
}

export { toFile, fileFromPath } from './uploads';
export {
  StorydenError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Storyden;
