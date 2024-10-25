// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OpenAPIAPI from './openapi';
import * as VersionAPI from './version';
import * as InfoAPI from './info/info';

export class Misc extends APIResource {
  version: VersionAPI.Version = new VersionAPI.Version(this._client);
  openAPI: OpenAPIAPI.OpenAPI = new OpenAPIAPI.OpenAPI(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
}

export namespace Misc {
  export import Version = VersionAPI.Version;
  export type VersionRetrieveResponse = VersionAPI.VersionRetrieveResponse;
  export import OpenAPI = OpenAPIAPI.OpenAPI;
  export type OpenAPIRetrieveResponse = OpenAPIAPI.OpenAPIRetrieveResponse;
  export import Info = InfoAPI.Info;
}
