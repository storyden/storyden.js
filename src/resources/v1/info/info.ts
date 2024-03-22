// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'Storyden/core';
import { APIResource } from 'Storyden/resource';
import * as InfoAPI from 'Storyden/resources/v1/info/info';
import * as IconAPI from 'Storyden/resources/v1/info/icon';

export class Info extends APIResource {
  icon: IconAPI.Icon = new IconAPI.Icon(this._client);

  /**
   * Get the basic forum installation info such as title, description, etc.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<InfoListResponse> {
    return this._client.get('/v1/info', options);
  }
}

/**
 * Basic public information about the Storyden installation.
 */
export interface InfoListResponse {
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
  export import InfoListResponse = InfoAPI.InfoListResponse;
  export import Icon = IconAPI.Icon;
  export import IconCreateParams = IconAPI.IconCreateParams;
}
