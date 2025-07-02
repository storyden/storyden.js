// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class OpenAPIJson extends APIResource {
  /**
   * This endpoint returns the OpenAPI specification for the Storyden API in JSON
   * format. This is useful for clients that want to dynamically load the API
   * specification for documentation or code generation.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/openapi.json', {
      ...options,
      headers: { Accept: 'application/vnd.oai.openapi+json;version=3.1.0', ...options?.headers },
    });
  }
}

export type OpenAPIJsonRetrieveResponse = unknown;

export declare namespace OpenAPIJson {
  export { type OpenAPIJsonRetrieveResponse as OpenAPIJsonRetrieveResponse };
}
