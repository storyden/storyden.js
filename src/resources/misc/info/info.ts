// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IconAPI from './icon';

export class Info extends APIResource {
  icon: IconAPI.Icon = new IconAPI.Icon(this._client);
}

export namespace Info {
  export import Icon = IconAPI.Icon;
}
