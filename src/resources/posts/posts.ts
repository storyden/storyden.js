// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ReactsAPI from './reacts';
import { ReactAddParams, Reacts } from './reacts';

export class Posts extends APIResource {
  reacts: ReactsAPI.Reacts = new ReactsAPI.Reacts(this._client);

  /**
   * Publish changes to a single post.
   */
  update(
    postId: string,
    body?: PostUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Post>;
  update(postId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Post>;
  update(
    postId: string,
    body: PostUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Post> {
    if (isRequestOptions(body)) {
      return this.update(postId, {}, body);
    }
    return this._client.patch(`/posts/${postId}`, { body, ...options });
  }

  /**
   * Archive a post using soft-delete.
   */
  delete(postId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/posts/${postId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PostUpdateParams {
  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  body?: string;

  /**
   * Arbitrary metadata for the resource.
   */
  meta?: { [key: string]: unknown };

  /**
   * A web address
   */
  url?: string;
}

Posts.Reacts = Reacts;

export declare namespace Posts {
  export { type PostUpdateParams as PostUpdateParams };

  export { Reacts as Reacts, type ReactAddParams as ReactAddParams };
}
