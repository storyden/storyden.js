// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AccessKeysAPI from './access-keys';
import {
  AccessKeyCreateParams,
  AccessKeyCreateResponse,
  AccessKeyListResponse,
  AccessKeys,
} from './access-keys';
import * as EmailAPI from './email';
import {
  Email,
  EmailSigninParams,
  EmailSigninResponse,
  EmailSignupParams,
  EmailSignupResponse,
  EmailVerifyParams,
  EmailVerifyResponse,
} from './email';
import * as EmailPasswordAPI from './email-password';
import {
  EmailPassword,
  EmailPasswordRequestResetParams,
  EmailPasswordSigninParams,
  EmailPasswordSigninResponse,
  EmailPasswordSignupParams,
  EmailPasswordSignupResponse,
} from './email-password';
import * as OAuthAPI from './oauth';
import { OAuth, OAuthCallbackParams, OAuthCallbackResponse } from './oauth';
import * as PasswordAPI from './password';
import {
  Password,
  PasswordAddParams,
  PasswordAddResponse,
  PasswordResetParams,
  PasswordResetResponse,
  PasswordSigninParams,
  PasswordSigninResponse,
  PasswordSignupParams,
  PasswordSignupResponse,
  PasswordUpdateParams,
  PasswordUpdateResponse,
} from './password';
import * as PhoneAPI from './phone';
import { Phone, PhoneStartParams, PhoneStartResponse, PhoneVerifyParams, PhoneVerifyResponse } from './phone';
import * as WebauthnAPI from './webauthn/webauthn';
import { Webauthn } from './webauthn/webauthn';

export class Auth extends APIResource {
  password: PasswordAPI.Password = new PasswordAPI.Password(this._client);
  emailPassword: EmailPasswordAPI.EmailPassword = new EmailPasswordAPI.EmailPassword(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
  webauthn: WebauthnAPI.Webauthn = new WebauthnAPI.Webauthn(this._client);
  phone: PhoneAPI.Phone = new PhoneAPI.Phone(this._client);
  accessKeys: AccessKeysAPI.AccessKeys = new AccessKeysAPI.AccessKeys(this._client);

  /**
   * Retrieve a list of authentication providers. Storyden supports a few ways to
   * authenticate, from simple passwords to OAuth and WebAuthn. This endpoint tells a
   * client which auth capabilities are enabled.
   *
   * @example
   * ```ts
   * const response = await client.auth.listProviders();
   * ```
   */
  listProviders(options?: Core.RequestOptions): Core.APIPromise<AuthListProvidersResponse> {
    return this._client.get('/auth', options);
  }

  /**
   * Remove cookies from requesting client.
   *
   * @example
   * ```ts
   * await client.auth.logout();
   * ```
   */
  logout(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/auth/logout', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export interface AuthListProvidersResponse {
  mode: 'handle' | 'email' | 'phone';

  providers: Array<AuthListProvidersResponse.Provider>;
}

export namespace AuthListProvidersResponse {
  export interface Provider {
    /**
     * The human-readable name of the provider.
     */
    name: string;

    /**
     * The slug name of the provider.
     */
    provider: string;

    /**
     * The hyperlink to render for the user.
     */
    link?: string;
  }
}

Auth.Password = Password;
Auth.EmailPassword = EmailPassword;
Auth.Email = Email;
Auth.OAuth = OAuth;
Auth.Webauthn = Webauthn;
Auth.Phone = Phone;
Auth.AccessKeys = AccessKeys;

export declare namespace Auth {
  export { type AuthListProvidersResponse as AuthListProvidersResponse };

  export {
    Password as Password,
    type PasswordUpdateResponse as PasswordUpdateResponse,
    type PasswordAddResponse as PasswordAddResponse,
    type PasswordResetResponse as PasswordResetResponse,
    type PasswordSigninResponse as PasswordSigninResponse,
    type PasswordSignupResponse as PasswordSignupResponse,
    type PasswordUpdateParams as PasswordUpdateParams,
    type PasswordAddParams as PasswordAddParams,
    type PasswordResetParams as PasswordResetParams,
    type PasswordSigninParams as PasswordSigninParams,
    type PasswordSignupParams as PasswordSignupParams,
  };

  export {
    EmailPassword as EmailPassword,
    type EmailPasswordSigninResponse as EmailPasswordSigninResponse,
    type EmailPasswordSignupResponse as EmailPasswordSignupResponse,
    type EmailPasswordRequestResetParams as EmailPasswordRequestResetParams,
    type EmailPasswordSigninParams as EmailPasswordSigninParams,
    type EmailPasswordSignupParams as EmailPasswordSignupParams,
  };

  export {
    Email as Email,
    type EmailSigninResponse as EmailSigninResponse,
    type EmailSignupResponse as EmailSignupResponse,
    type EmailVerifyResponse as EmailVerifyResponse,
    type EmailSigninParams as EmailSigninParams,
    type EmailSignupParams as EmailSignupParams,
    type EmailVerifyParams as EmailVerifyParams,
  };

  export {
    OAuth as OAuth,
    type OAuthCallbackResponse as OAuthCallbackResponse,
    type OAuthCallbackParams as OAuthCallbackParams,
  };

  export { Webauthn as Webauthn };

  export {
    Phone as Phone,
    type PhoneStartResponse as PhoneStartResponse,
    type PhoneVerifyResponse as PhoneVerifyResponse,
    type PhoneStartParams as PhoneStartParams,
    type PhoneVerifyParams as PhoneVerifyParams,
  };

  export {
    AccessKeys as AccessKeys,
    type AccessKeyCreateResponse as AccessKeyCreateResponse,
    type AccessKeyListResponse as AccessKeyListResponse,
    type AccessKeyCreateParams as AccessKeyCreateParams,
  };
}
