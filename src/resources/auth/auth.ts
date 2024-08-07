// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AuthAPI from './auth';
import * as EmailAPI from './email';
import * as EmailPasswordAPI from './email-password';
import * as OAuthAPI from './oauth';
import * as PasswordAPI from './password';
import * as PhoneAPI from './phone';
import * as WebauthnAPI from './webauthn/webauthn';

export class Auth extends APIResource {
  password: PasswordAPI.Password = new PasswordAPI.Password(this._client);
  emailPassword: EmailPasswordAPI.EmailPassword = new EmailPasswordAPI.EmailPassword(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
  webauthn: WebauthnAPI.Webauthn = new WebauthnAPI.Webauthn(this._client);
  phone: PhoneAPI.Phone = new PhoneAPI.Phone(this._client);

  /**
   * Retrieve a list of authentication providers. Storyden supports a few ways to
   * authenticate, from simple passwords to OAuth and WebAuthn. This endpoint tells a
   * client which auth capabilities are enabled.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AuthListResponse> {
    return this._client.get('/v1/auth', options);
  }

  /**
   * Remove cookies from requesting client.
   */
  logout(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/auth/logout', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AuthListResponse {
  providers: Array<AuthListResponse.Provider>;
}

export namespace AuthListResponse {
  export interface Provider {
    /**
     * The hyperlink to render for the user.
     */
    link: string;

    /**
     * The human-readable name of the provider.
     */
    name: string;

    /**
     * The slug name of the provider.
     */
    provider: string;
  }
}

export namespace Auth {
  export import AuthListResponse = AuthAPI.AuthListResponse;
  export import Password = PasswordAPI.Password;
  export import PasswordCreateResponse = PasswordAPI.PasswordCreateResponse;
  export import PasswordUpdateResponse = PasswordAPI.PasswordUpdateResponse;
  export import PasswordSigninResponse = PasswordAPI.PasswordSigninResponse;
  export import PasswordSignupResponse = PasswordAPI.PasswordSignupResponse;
  export import PasswordCreateParams = PasswordAPI.PasswordCreateParams;
  export import PasswordUpdateParams = PasswordAPI.PasswordUpdateParams;
  export import PasswordSigninParams = PasswordAPI.PasswordSigninParams;
  export import PasswordSignupParams = PasswordAPI.PasswordSignupParams;
  export import EmailPassword = EmailPasswordAPI.EmailPassword;
  export import EmailPasswordSigninResponse = EmailPasswordAPI.EmailPasswordSigninResponse;
  export import EmailPasswordSignupResponse = EmailPasswordAPI.EmailPasswordSignupResponse;
  export import EmailPasswordSigninParams = EmailPasswordAPI.EmailPasswordSigninParams;
  export import EmailPasswordSignupParams = EmailPasswordAPI.EmailPasswordSignupParams;
  export import Email = EmailAPI.Email;
  export import EmailSigninResponse = EmailAPI.EmailSigninResponse;
  export import EmailSignupResponse = EmailAPI.EmailSignupResponse;
  export import EmailVerifyResponse = EmailAPI.EmailVerifyResponse;
  export import EmailSigninParams = EmailAPI.EmailSigninParams;
  export import EmailSignupParams = EmailAPI.EmailSignupParams;
  export import EmailVerifyParams = EmailAPI.EmailVerifyParams;
  export import OAuth = OAuthAPI.OAuth;
  export import OAuthCallbackResponse = OAuthAPI.OAuthCallbackResponse;
  export import OAuthCallbackParams = OAuthAPI.OAuthCallbackParams;
  export import Webauthn = WebauthnAPI.Webauthn;
  export import WebauthnMakeResponse = WebauthnAPI.WebauthnMakeResponse;
  export import WebauthnMakeParams = WebauthnAPI.WebauthnMakeParams;
  export import Phone = PhoneAPI.Phone;
  export import PhoneCompleteResponse = PhoneAPI.PhoneCompleteResponse;
  export import PhoneStartResponse = PhoneAPI.PhoneStartResponse;
  export import PhoneCompleteParams = PhoneAPI.PhoneCompleteParams;
  export import PhoneStartParams = PhoneAPI.PhoneStartParams;
}
