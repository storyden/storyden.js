// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import * as OpenapiJsonAPI from 'Storyden/resources/openapi-json';

export class OpenapiJson extends APIResource {
  /**
   * Note: the generator creates a `map[string]interface{}` if this is set to
   * `application/json`... so I'm just using plain text for now.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/openapi.json', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type OpenapiJsonRetrieveResponse = string;

export namespace OpenapiJson {
  export import OpenapiJsonRetrieveResponse = OpenapiJsonAPI.OpenapiJsonRetrieveResponse;
}
