// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Assets } from './resources/assets';
import { Categories } from './resources/categories';
import { Datagraph } from './resources/datagraph';
import { Links } from './resources/links';
import { Profiles } from './resources/profiles';
import { Accounts } from './resources/accounts/accounts';
import { Admin } from './resources/admin/admin';
import { Auth } from './resources/auth/auth';
import { Collections } from './resources/collections/collections';
import { Misc } from './resources/misc/misc';
import { Nodes } from './resources/nodes/nodes';
import { Posts } from './resources/posts/posts';
import { Threads } from './resources/threads/threads';

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

Storyden.Misc = Misc;
Storyden.Admin = Admin;
Storyden.Auth = Auth;
Storyden.Accounts = Accounts;
Storyden.Profiles = Profiles;
Storyden.Categories = Categories;
Storyden.Threads = Threads;
Storyden.Posts = Posts;
Storyden.Assets = Assets;
Storyden.Collections = Collections;
Storyden.Nodes = Nodes;
Storyden.Links = Links;
Storyden.Datagraph = Datagraph;
export declare namespace Storyden {
  export type RequestOptions = Core.RequestOptions;

  export { Misc as Misc };

  export { Admin as Admin };

  export { Auth as Auth };

  export { Accounts as Accounts };

  export { Profiles as Profiles };

  export { Categories as Categories };

  export { Threads as Threads };

  export { Posts as Posts };

  export { Assets as Assets };

  export { Collections as Collections };

  export { Nodes as Nodes };

  export { Links as Links };

  export { Datagraph as Datagraph };
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
