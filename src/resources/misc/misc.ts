// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OpenAPIAPI from './openapi';
import { OpenAPI, OpenAPIRetrieveResponse } from './openapi';
import * as VersionAPI from './version';
import { Version, VersionRetrieveResponse } from './version';
import * as InfoAPI from './info/info';
import { Info } from './info/info';

export class Misc extends APIResource {
  version: VersionAPI.Version = new VersionAPI.Version(this._client);
  openAPI: OpenAPIAPI.OpenAPI = new OpenAPIAPI.OpenAPI(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
}

Misc.Version = Version;
Misc.OpenAPI = OpenAPI;
Misc.Info = Info;

export declare namespace Misc {
  export { Version as Version, type VersionRetrieveResponse as VersionRetrieveResponse };

  export { OpenAPI as OpenAPI, type OpenAPIRetrieveResponse as OpenAPIRetrieveResponse };

  export { Info as Info };
}
