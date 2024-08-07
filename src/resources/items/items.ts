// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AssetsAPI from './assets';

export class Items extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

export namespace Items {
  export import Assets = AssetsAPI.Assets;
}
