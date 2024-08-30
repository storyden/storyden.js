// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
}

export namespace Auth {
  export import Password = PasswordAPI.Password;
  export import EmailPassword = EmailPasswordAPI.EmailPassword;
  export import Email = EmailAPI.Email;
  export import OAuth = OAuthAPI.OAuth;
  export import Webauthn = WebauthnAPI.Webauthn;
  export import Phone = PhoneAPI.Phone;
}
