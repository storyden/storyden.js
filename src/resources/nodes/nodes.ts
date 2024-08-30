// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AssetsAPI from './assets';
import * as ChildrenAPI from './children';
import * as VisibilityAPI from './visibility';

export class Nodes extends APIResource {
  visibility: VisibilityAPI.Visibility = new VisibilityAPI.Visibility(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  children: ChildrenAPI.Children = new ChildrenAPI.Children(this._client);
}

export namespace Nodes {
  export import Visibility = VisibilityAPI.Visibility;
  export import Assets = AssetsAPI.Assets;
  export import Children = ChildrenAPI.Children;
}
