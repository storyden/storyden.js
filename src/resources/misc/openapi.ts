// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OpenAPIAPI from './openapi';

export class OpenAPI extends APIResource {
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

export type OpenAPIRetrieveResponse = string;

export namespace OpenAPI {
  export type OpenAPIRetrieveResponse = OpenAPIAPI.OpenAPIRetrieveResponse;
}
