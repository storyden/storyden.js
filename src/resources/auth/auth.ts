// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OAuthCallbackAPI from './oauth-callback';
import * as PasswordAPI from './password';
import * as PhoneAPI from './phone';
import * as WebauthnAPI from './webauthn/webauthn';

export class Auth extends APIResource {
  password: PasswordAPI.Password = new PasswordAPI.Password(this._client);
  oauthCallback: OAuthCallbackAPI.OAuthCallback = new OAuthCallbackAPI.OAuthCallback(this._client);
  webauthn: WebauthnAPI.Webauthn = new WebauthnAPI.Webauthn(this._client);
  phone: PhoneAPI.Phone = new PhoneAPI.Phone(this._client);
}

export namespace Auth {
  export import Password = PasswordAPI.Password;
  export import PasswordCreateResponse = PasswordAPI.PasswordCreateResponse;
  export import PasswordUpdateResponse = PasswordAPI.PasswordUpdateResponse;
  export import PasswordSigninResponse = PasswordAPI.PasswordSigninResponse;
  export import PasswordCreateParams = PasswordAPI.PasswordCreateParams;
  export import PasswordUpdateParams = PasswordAPI.PasswordUpdateParams;
  export import PasswordSigninParams = PasswordAPI.PasswordSigninParams;
  export import OAuthCallback = OAuthCallbackAPI.OAuthCallback;
  export import OAuthCallbackCreateResponse = OAuthCallbackAPI.OAuthCallbackCreateResponse;
  export import OAuthCallbackCreateParams = OAuthCallbackAPI.OAuthCallbackCreateParams;
  export import Webauthn = WebauthnAPI.Webauthn;
  export import Phone = PhoneAPI.Phone;
  export import PhoneCreateResponse = PhoneAPI.PhoneCreateResponse;
  export import PhoneUpdateResponse = PhoneAPI.PhoneUpdateResponse;
  export import PhoneCreateParams = PhoneAPI.PhoneCreateParams;
  export import PhoneUpdateParams = PhoneAPI.PhoneUpdateParams;
}
