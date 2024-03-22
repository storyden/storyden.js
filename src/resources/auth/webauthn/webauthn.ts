// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'Storyden/resource';
import * as AssertAPI from 'Storyden/resources/auth/webauthn/assert';
import * as MakeAPI from 'Storyden/resources/auth/webauthn/make';

export class Webauthn extends APIResource {
  make: MakeAPI.Make = new MakeAPI.Make(this._client);
  assert: AssertAPI.Assert = new AssertAPI.Assert(this._client);
}

export namespace Webauthn {
  export import Make = MakeAPI.Make;
  export import MakeCreateResponse = MakeAPI.MakeCreateResponse;
  export import MakeRetrieveResponse = MakeAPI.MakeRetrieveResponse;
  export import MakeCreateParams = MakeAPI.MakeCreateParams;
  export import Assert = AssertAPI.Assert;
  export import AssertCreateResponse = AssertAPI.AssertCreateResponse;
  export import AssertRetrieveResponse = AssertAPI.AssertRetrieveResponse;
  export import AssertCreateParams = AssertAPI.AssertCreateParams;
}
