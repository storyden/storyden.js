// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BannerAPI from './banner';
import { Banner, BannerUploadParams } from './banner';
import * as IconAPI from './icon';
import { Icon, IconUploadParams } from './icon';

export class Info extends APIResource {
  icon: IconAPI.Icon = new IconAPI.Icon(this._client);
  banner: BannerAPI.Banner = new BannerAPI.Banner(this._client);

  /**
   * Get the basic forum installation info such as title, description, etc.
   *
   * @example
   * ```ts
   * const info = await client.info.retrieve();
   * ```
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<InfoRetrieveResponse> {
    return this._client.get('/info', options);
  }
}

/**
 * Basic public information about the Storyden installation.
 */
export interface InfoRetrieveResponse {
  accent_colour: string;

  authentication_mode: 'handle' | 'email' | 'phone';

  capabilities: Array<'gen_ai' | 'semdex' | 'email_client' | 'sms_client'>;

  /**
   * The body text of a post within a thread. The type is either a string or an
   * object, depending on what was used during creation. Strings can be used for
   * basic plain text or markdown content and objects are used for more complex types
   * such as Slate.js editor documents.
   */
  content: string;

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

  /**
   * Arbitrary metadata for the resource.
   */
  metadata?: { [key: string]: unknown };
}

Info.Icon = Icon;
Info.Banner = Banner;

export declare namespace Info {
  export { type InfoRetrieveResponse as InfoRetrieveResponse };

  export { Icon as Icon, type IconUploadParams as IconUploadParams };

  export { Banner as Banner, type BannerUploadParams as BannerUploadParams };
}
