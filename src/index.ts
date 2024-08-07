// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from 'qs';
import * as Core from './core';
import * as API from './resources/index';

export interface ClientOptions {
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
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

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
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Storyden API.
 */
export class Storyden extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Storyden API.
   *
   * @param {string} [opts.baseURL=process.env['STORYDEN_BASE_URL'] ?? /api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('STORYDEN_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || `/api`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  misc: API.Misc = new API.Misc(this);
  admin: API.Admin = new API.Admin(this);
  auth: API.Auth = new API.Auth(this);
  accounts: API.Accounts = new API.Accounts(this);
  profiles: API.Profiles = new API.Profiles(this);
  categories: API.Categories = new API.Categories(this);
  threads: API.Threads = new API.Threads(this);
  posts: API.Posts = new API.Posts(this);
  assets: API.Assets = new API.Assets(this);
  collections: API.Collections = new API.Collections(this);
  nodes: API.Nodes = new API.Nodes(this);
  links: API.Links = new API.Links(this);
  datagraph: API.Datagraph = new API.Datagraph(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Storyden {
  export import RequestOptions = Core.RequestOptions;

  export import Misc = API.Misc;

  export import Admin = API.Admin;
  export import AdminUpdateResponse = API.AdminUpdateResponse;
  export import AdminUpdateParams = API.AdminUpdateParams;

  export import Auth = API.Auth;
  export import AuthListResponse = API.AuthListResponse;

  export import Accounts = API.Accounts;
  export import AccountUpdateResponse = API.AccountUpdateResponse;
  export import AccountListResponse = API.AccountListResponse;
  export import AccountUpdateParams = API.AccountUpdateParams;

  export import Profiles = API.Profiles;
  export import ProfileRetrieveResponse = API.ProfileRetrieveResponse;
  export import ProfileListResponse = API.ProfileListResponse;
  export import ProfileListParams = API.ProfileListParams;

  export import Categories = API.Categories;
  export import CategoryCreateResponse = API.CategoryCreateResponse;
  export import CategoryUpdateResponse = API.CategoryUpdateResponse;
  export import CategoryListResponse = API.CategoryListResponse;
  export import CategoryCreateParams = API.CategoryCreateParams;
  export import CategoryUpdateParams = API.CategoryUpdateParams;

  export import Threads = API.Threads;
  export import ThreadCreateResponse = API.ThreadCreateResponse;
  export import ThreadRetrieveResponse = API.ThreadRetrieveResponse;
  export import ThreadUpdateResponse = API.ThreadUpdateResponse;
  export import ThreadListResponse = API.ThreadListResponse;
  export import ThreadCreateParams = API.ThreadCreateParams;
  export import ThreadUpdateParams = API.ThreadUpdateParams;
  export import ThreadListParams = API.ThreadListParams;

  export import Posts = API.Posts;
  export import PostUpdateResponse = API.PostUpdateResponse;
  export import PostSearchResponse = API.PostSearchResponse;
  export import PostUpdateParams = API.PostUpdateParams;
  export import PostSearchParams = API.PostSearchParams;

  export import Assets = API.Assets;
  export import AssetCreateResponse = API.AssetCreateResponse;
  export import AssetCreateParams = API.AssetCreateParams;

  export import Collections = API.Collections;
  export import CollectionCreateResponse = API.CollectionCreateResponse;
  export import CollectionRetrieveResponse = API.CollectionRetrieveResponse;
  export import CollectionUpdateResponse = API.CollectionUpdateResponse;
  export import CollectionListResponse = API.CollectionListResponse;
  export import CollectionCreateParams = API.CollectionCreateParams;
  export import CollectionUpdateParams = API.CollectionUpdateParams;
  export import CollectionListParams = API.CollectionListParams;

  export import Nodes = API.Nodes;
  export import NodeCreateResponse = API.NodeCreateResponse;
  export import NodeRetrieveResponse = API.NodeRetrieveResponse;
  export import NodeUpdateResponse = API.NodeUpdateResponse;
  export import NodeListResponse = API.NodeListResponse;
  export import NodeDeleteResponse = API.NodeDeleteResponse;
  export import NodeCreateParams = API.NodeCreateParams;
  export import NodeUpdateParams = API.NodeUpdateParams;
  export import NodeListParams = API.NodeListParams;
  export import NodeDeleteParams = API.NodeDeleteParams;

  export import Links = API.Links;
  export import LinkCreateResponse = API.LinkCreateResponse;
  export import LinkRetrieveResponse = API.LinkRetrieveResponse;
  export import LinkListResponse = API.LinkListResponse;
  export import LinkCreateParams = API.LinkCreateParams;
  export import LinkListParams = API.LinkListParams;

  export import Datagraph = API.Datagraph;
  export import DatagraphListResponse = API.DatagraphListResponse;
  export import DatagraphListParams = API.DatagraphListParams;
}

export default Storyden;
