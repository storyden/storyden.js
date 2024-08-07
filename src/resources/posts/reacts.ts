// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ReactsAPI from './reacts';

export class Reacts extends APIResource {
  /**
   * Add a reaction to a post.
   */
  update(
    postId: string,
    body?: ReactUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReactUpdateResponse>;
  update(postId: string, options?: Core.RequestOptions): Core.APIPromise<ReactUpdateResponse>;
  update(
    postId: string,
    body: ReactUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReactUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(postId, {}, body);
    }
    return this._client.put(`/v1/posts/${postId}/reacts`, { body, ...options });
  }
}

export interface ReactUpdateResponse {
  /**
   * A unique identifier for this resource.
   */
  id?: string;

  emoji?: string;
}

export interface ReactUpdateParams {
  emoji?: string;
}

export namespace Reacts {
  export import ReactUpdateResponse = ReactsAPI.ReactUpdateResponse;
  export import ReactUpdateParams = ReactsAPI.ReactUpdateParams;
}
