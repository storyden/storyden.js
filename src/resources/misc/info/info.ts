// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as InfoAPI from './info';
import * as IconAPI from './icon';

export class Info extends APIResource {
  icon: IconAPI.Icon = new IconAPI.Icon(this._client);

  /**
   * Get the basic forum installation info such as title, description, etc.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<InfoRetrieveResponse> {
    return this._client.get('/v1/info', options);
  }
}

/**
 * Basic public information about the Storyden installation.
 */
export interface InfoRetrieveResponse {
  accent_colour: string;

  description: string;

  /**
   * Derived from data state, indicates what stage in the onboarding process the
   * Storyden installation is in for directing first-time setup steps.
   */
  onboarding_status:
    | 'requires_first_account'
    | 'requires_category'
    | 'requires_more_accounts'
    | 'requires_first_post'
    | 'complete';

  title: string;
}

export namespace Info {
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
  export import Icon = IconAPI.Icon;
  export import IconCreateParams = IconAPI.IconCreateParams;
}
