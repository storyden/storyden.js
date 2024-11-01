// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EmailAPI from './email';
import { Email } from './email';
import * as EmailPasswordAPI from './email-password';
import { EmailPassword } from './email-password';
import * as OAuthAPI from './oauth';
import { OAuth } from './oauth';
import * as PasswordAPI from './password';
import { Password } from './password';
import * as PhoneAPI from './phone';
import { Phone } from './phone';
import * as WebauthnAPI from './webauthn/webauthn';
import { Webauthn } from './webauthn/webauthn';

export class Auth extends APIResource {
  password: PasswordAPI.Password = new PasswordAPI.Password(this._client);
  emailPassword: EmailPasswordAPI.EmailPassword = new EmailPasswordAPI.EmailPassword(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
  webauthn: WebauthnAPI.Webauthn = new WebauthnAPI.Webauthn(this._client);
  phone: PhoneAPI.Phone = new PhoneAPI.Phone(this._client);
}

Auth.Password = Password;
Auth.EmailPassword = EmailPassword;
Auth.Email = Email;
Auth.OAuth = OAuth;
Auth.Webauthn = Webauthn;
Auth.Phone = Phone;

export declare namespace Auth {
  export { Password as Password };

  export { EmailPassword as EmailPassword };

  export { Email as Email };

  export { OAuth as OAuth };

  export { Webauthn as Webauthn };

  export { Phone as Phone };
}
