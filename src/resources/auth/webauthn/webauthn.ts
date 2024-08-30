// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AssertAPI from './assert';

export class Webauthn extends APIResource {
  assert: AssertAPI.Assert = new AssertAPI.Assert(this._client);
}

export namespace Webauthn {
  export import Assert = AssertAPI.Assert;
}
