// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AssetsAPI from './assets';
import { Assets } from './assets';
import * as ChildrenAPI from './children';
import { Children } from './children';
import * as VisibilityAPI from './visibility';
import { Visibility } from './visibility';

export class Nodes extends APIResource {
  visibility: VisibilityAPI.Visibility = new VisibilityAPI.Visibility(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  children: ChildrenAPI.Children = new ChildrenAPI.Children(this._client);
}

Nodes.Visibility = Visibility;
Nodes.Assets = Assets;
Nodes.Children = Children;

export declare namespace Nodes {
  export { Visibility as Visibility };

  export { Assets as Assets };

  export { Children as Children };
}
