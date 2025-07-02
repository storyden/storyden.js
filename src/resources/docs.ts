// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Docs extends APIResource {
  /**
   * This endpoint returns the OpenAPI documentation for the Storyden API in an
   * interactive HTML format. This is useful for developers who want to explore the
   * API and test endpoints without writing code.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/docs', { ...options, headers: { Accept: 'text/html', ...options?.headers } });
  }
}

export type DocRetrieveResponse = string;

export declare namespace Docs {
  export { type DocRetrieveResponse as DocRetrieveResponse };
}
