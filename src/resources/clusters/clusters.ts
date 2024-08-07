// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { Clusters } from './clusters';
import * as ClustersAPI from './clusters';
import * as AssetsAPI from './assets';
import * as ItemsAPI from './items';

export class Clusters extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  clusters: Clusters = new Clusters(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

export namespace Clusters {
  export import Assets = AssetsAPI.Assets;
  export import Clusters = ClustersAPI.Clusters;
  export import Items = ItemsAPI.Items;
}
