// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AssertAPI from './assert';
import { Assert } from './assert';

export class Webauthn extends APIResource {
  assert: AssertAPI.Assert = new AssertAPI.Assert(this._client);
}

Webauthn.Assert = Assert;

export declare namespace Webauthn {
  export { Assert as Assert };
}
