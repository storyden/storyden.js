// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AuthAPI from './auth';
import * as CategoriesAPI from './categories';
import * as ProfilesAPI from './profiles';
import * as AccountsAPI from './accounts/accounts';
import * as AdminAPI from './admin/admin';
import * as InfoAPI from './info/info';

export class V1 extends APIResource {
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  admin: AdminAPI.Admin = new AdminAPI.Admin(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
}

export namespace V1 {
  export import Info = InfoAPI.Info;
  export import InfoListResponse = InfoAPI.InfoListResponse;
  export import Admin = AdminAPI.Admin;
  export import AdminUpdateResponse = AdminAPI.AdminUpdateResponse;
  export import AdminUpdateParams = AdminAPI.AdminUpdateParams;
  export import Auth = AuthAPI.Auth;
  export import AuthListResponse = AuthAPI.AuthListResponse;
  export import AuthPasswordSignupResponse = AuthAPI.AuthPasswordSignupResponse;
  export import AuthPasswordSignupParams = AuthAPI.AuthPasswordSignupParams;
  export import Accounts = AccountsAPI.Accounts;
  export import AccountRetrieveResponse = AccountsAPI.AccountRetrieveResponse;
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountUpdateParams = AccountsAPI.AccountUpdateParams;
  export import Profiles = ProfilesAPI.Profiles;
  export import ProfileRetrieveResponse = ProfilesAPI.ProfileRetrieveResponse;
  export import ProfileListResponse = ProfilesAPI.ProfileListResponse;
  export import ProfileListParams = ProfilesAPI.ProfileListParams;
  export import Categories = CategoriesAPI.Categories;
  export import CategoryCreateResponse = CategoriesAPI.CategoryCreateResponse;
  export import CategoryCreateParams = CategoriesAPI.CategoryCreateParams;
}
