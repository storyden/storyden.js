// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Storyden } from './index';

export abstract class APIResource {
  protected _client: Storyden;

  constructor(client: Storyden) {
    this._client = client;
  }
}
