// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Reacts extends APIResource {
  /**
   * Add a reaction to a post.
   */
  add(postId: string, body: ReactAddParams, options?: Core.RequestOptions): Core.APIPromise<Shared.React> {
    return this._client.put(`/posts/${postId}/reacts`, { body, ...options });
  }

  /**
   * Remove a reaction from a post.
   */
  remove(postId: string, reactId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/posts/${postId}/reacts/${reactId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ReactAddParams {
  /**
   * A single emoji character representing a reaction. In future, this will be
   * augmented with a more fully fledged custom emoji system.
   */
  emoji: string;
}

export declare namespace Reacts {
  export { type ReactAddParams as ReactAddParams };
}
