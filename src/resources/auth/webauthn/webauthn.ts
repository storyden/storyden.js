// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AssertAPI from './assert';
import { Assert, AssertCompleteParams, AssertCompleteResponse, AssertStartResponse } from './assert';
import * as MakeAPI from './make';
import { Make, MakeCompleteParams, MakeCompleteResponse, MakeStartResponse } from './make';

export class Webauthn extends APIResource {
  make: MakeAPI.Make = new MakeAPI.Make(this._client);
  assert: AssertAPI.Assert = new AssertAPI.Assert(this._client);
}

Webauthn.Make = Make;
Webauthn.Assert = Assert;

export declare namespace Webauthn {
  export {
    Make as Make,
    type MakeCompleteResponse as MakeCompleteResponse,
    type MakeStartResponse as MakeStartResponse,
    type MakeCompleteParams as MakeCompleteParams,
  };

  export {
    Assert as Assert,
    type AssertCompleteResponse as AssertCompleteResponse,
    type AssertStartResponse as AssertStartResponse,
    type AssertCompleteParams as AssertCompleteParams,
  };
}
