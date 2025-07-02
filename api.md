# Version

Types:

- <code><a href="./src/resources/version.ts">VersionRetrieveResponse</a></code>

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">retrieve</a>() -> string</code>

# OpenAPIJson

Types:

- <code><a href="./src/resources/openapi-json.ts">OpenAPIJsonRetrieveResponse</a></code>

Methods:

- <code title="get /openapi.json">client.openAPIJson.<a href="./src/resources/openapi-json.ts">retrieve</a>() -> unknown</code>

# Docs

Types:

- <code><a href="./src/resources/docs.ts">DocRetrieveResponse</a></code>

Methods:

- <code title="get /docs">client.docs.<a href="./src/resources/docs.ts">retrieve</a>() -> string</code>

# Info

Types:

- <code><a href="./src/resources/info/info.ts">InfoRetrieveResponse</a></code>

Methods:

- <code title="get /info">client.info.<a href="./src/resources/info/info.ts">retrieve</a>() -> InfoRetrieveResponse</code>

## Icon

Methods:

- <code title="get /info/icon/{icon_size}">client.info.icon.<a href="./src/resources/info/icon.ts">retrieve</a>(iconSize) -> Response</code>
- <code title="post /info/icon">client.info.icon.<a href="./src/resources/info/icon.ts">upload</a>({ ...params }) -> void</code>

## Banner

Methods:

- <code title="get /info/banner">client.info.banner.<a href="./src/resources/info/banner.ts">retrieve</a>() -> Response</code>
- <code title="post /info/banner">client.info.banner.<a href="./src/resources/info/banner.ts">upload</a>({ ...params }) -> void</code>

# Admin

Types:

- <code><a href="./src/resources/admin/admin.ts">AdminUpdateSettingsResponse</a></code>

Methods:

- <code title="patch /admin">client.admin.<a href="./src/resources/admin/admin.ts">updateSettings</a>({ ...params }) -> AdminUpdateSettingsResponse</code>

## Bans

Types:

- <code><a href="./src/resources/admin/bans.ts">BanRemoveSuspensionResponse</a></code>
- <code><a href="./src/resources/admin/bans.ts">BanSuspendAccountResponse</a></code>

Methods:

- <code title="delete /admin/bans/{account_handle}">client.admin.bans.<a href="./src/resources/admin/bans.ts">removeSuspension</a>(accountHandle) -> BanRemoveSuspensionResponse</code>
- <code title="post /admin/bans/{account_handle}">client.admin.bans.<a href="./src/resources/admin/bans.ts">suspendAccount</a>(accountHandle) -> BanSuspendAccountResponse</code>

## AccessKeys

Types:

- <code><a href="./src/resources/admin/access-keys.ts">AccessKeyListResponse</a></code>

Methods:

- <code title="get /admin/access-keys">client.admin.accessKeys.<a href="./src/resources/admin/access-keys.ts">list</a>() -> AccessKeyListResponse</code>
- <code title="delete /admin/access-keys/{access_key_id}">client.admin.accessKeys.<a href="./src/resources/admin/access-keys.ts">revoke</a>(accessKeyId) -> void</code>

# Roles

Types:

- <code><a href="./src/resources/roles.ts">RoleCreateResponse</a></code>
- <code><a href="./src/resources/roles.ts">RoleRetrieveResponse</a></code>
- <code><a href="./src/resources/roles.ts">RoleUpdateResponse</a></code>
- <code><a href="./src/resources/roles.ts">RoleListResponse</a></code>

Methods:

- <code title="post /roles">client.roles.<a href="./src/resources/roles.ts">create</a>({ ...params }) -> RoleCreateResponse</code>
- <code title="get /roles/{role_id}">client.roles.<a href="./src/resources/roles.ts">retrieve</a>(roleId) -> RoleRetrieveResponse</code>
- <code title="patch /roles/{role_id}">client.roles.<a href="./src/resources/roles.ts">update</a>(roleId, { ...params }) -> RoleUpdateResponse</code>
- <code title="get /roles">client.roles.<a href="./src/resources/roles.ts">list</a>() -> RoleListResponse</code>
- <code title="delete /roles/{role_id}">client.roles.<a href="./src/resources/roles.ts">delete</a>(roleId) -> void</code>

# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">AuthListProvidersResponse</a></code>

Methods:

- <code title="get /auth">client.auth.<a href="./src/resources/auth/auth.ts">listProviders</a>() -> AuthListProvidersResponse</code>
- <code title="get /auth/logout">client.auth.<a href="./src/resources/auth/auth.ts">logout</a>() -> void</code>

## Password

Types:

- <code><a href="./src/resources/auth/password.ts">PasswordUpdateResponse</a></code>
- <code><a href="./src/resources/auth/password.ts">PasswordAddResponse</a></code>
- <code><a href="./src/resources/auth/password.ts">PasswordResetResponse</a></code>
- <code><a href="./src/resources/auth/password.ts">PasswordSigninResponse</a></code>
- <code><a href="./src/resources/auth/password.ts">PasswordSignupResponse</a></code>

Methods:

- <code title="patch /auth/password">client.auth.password.<a href="./src/resources/auth/password.ts">update</a>({ ...params }) -> PasswordUpdateResponse</code>
- <code title="post /auth/password">client.auth.password.<a href="./src/resources/auth/password.ts">add</a>({ ...params }) -> PasswordAddResponse</code>
- <code title="post /auth/password/reset">client.auth.password.<a href="./src/resources/auth/password.ts">reset</a>({ ...params }) -> PasswordResetResponse</code>
- <code title="post /auth/password/signin">client.auth.password.<a href="./src/resources/auth/password.ts">signin</a>({ ...params }) -> PasswordSigninResponse</code>
- <code title="post /auth/password/signup">client.auth.password.<a href="./src/resources/auth/password.ts">signup</a>({ ...params }) -> PasswordSignupResponse</code>

## EmailPassword

Types:

- <code><a href="./src/resources/auth/email-password.ts">EmailPasswordSigninResponse</a></code>
- <code><a href="./src/resources/auth/email-password.ts">EmailPasswordSignupResponse</a></code>

Methods:

- <code title="post /auth/email-password/reset">client.auth.emailPassword.<a href="./src/resources/auth/email-password.ts">requestReset</a>({ ...params }) -> void</code>
- <code title="post /auth/email-password/signin">client.auth.emailPassword.<a href="./src/resources/auth/email-password.ts">signin</a>({ ...params }) -> EmailPasswordSigninResponse</code>
- <code title="post /auth/email-password/signup">client.auth.emailPassword.<a href="./src/resources/auth/email-password.ts">signup</a>({ ...params }) -> EmailPasswordSignupResponse</code>

## Email

Types:

- <code><a href="./src/resources/auth/email.ts">EmailSigninResponse</a></code>
- <code><a href="./src/resources/auth/email.ts">EmailSignupResponse</a></code>
- <code><a href="./src/resources/auth/email.ts">EmailVerifyResponse</a></code>

Methods:

- <code title="post /auth/email/signin">client.auth.email.<a href="./src/resources/auth/email.ts">signin</a>({ ...params }) -> EmailSigninResponse</code>
- <code title="post /auth/email/signup">client.auth.email.<a href="./src/resources/auth/email.ts">signup</a>({ ...params }) -> EmailSignupResponse</code>
- <code title="post /auth/email/verify">client.auth.email.<a href="./src/resources/auth/email.ts">verify</a>({ ...params }) -> EmailVerifyResponse</code>

## OAuth

Types:

- <code><a href="./src/resources/auth/oauth.ts">OAuthCallbackResponse</a></code>

Methods:

- <code title="post /auth/oauth/{oauth_provider}/callback">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">callback</a>(oauthProvider, { ...params }) -> OAuthCallbackResponse</code>

## Webauthn

### Make

Types:

- <code><a href="./src/resources/auth/webauthn/make.ts">MakeCompleteResponse</a></code>
- <code><a href="./src/resources/auth/webauthn/make.ts">MakeStartResponse</a></code>

Methods:

- <code title="post /auth/webauthn/make">client.auth.webauthn.make.<a href="./src/resources/auth/webauthn/make.ts">complete</a>({ ...params }) -> MakeCompleteResponse</code>
- <code title="get /auth/webauthn/make/{account_handle}">client.auth.webauthn.make.<a href="./src/resources/auth/webauthn/make.ts">start</a>(accountHandle) -> MakeStartResponse</code>

### Assert

Types:

- <code><a href="./src/resources/auth/webauthn/assert.ts">AssertCompleteResponse</a></code>
- <code><a href="./src/resources/auth/webauthn/assert.ts">AssertStartResponse</a></code>

Methods:

- <code title="post /auth/webauthn/assert">client.auth.webauthn.assert.<a href="./src/resources/auth/webauthn/assert.ts">complete</a>({ ...params }) -> AssertCompleteResponse</code>
- <code title="get /auth/webauthn/assert/{account_handle}">client.auth.webauthn.assert.<a href="./src/resources/auth/webauthn/assert.ts">start</a>(accountHandle) -> AssertStartResponse</code>

## Phone

Types:

- <code><a href="./src/resources/auth/phone.ts">PhoneStartResponse</a></code>
- <code><a href="./src/resources/auth/phone.ts">PhoneVerifyResponse</a></code>

Methods:

- <code title="post /auth/phone">client.auth.phone.<a href="./src/resources/auth/phone.ts">start</a>({ ...params }) -> PhoneStartResponse</code>
- <code title="put /auth/phone/{account_handle}">client.auth.phone.<a href="./src/resources/auth/phone.ts">verify</a>(accountHandle, { ...params }) -> PhoneVerifyResponse</code>

## AccessKeys

Types:

- <code><a href="./src/resources/auth/access-keys.ts">AccessKeyCreateResponse</a></code>
- <code><a href="./src/resources/auth/access-keys.ts">AccessKeyListResponse</a></code>

Methods:

- <code title="post /auth/access-keys">client.auth.accessKeys.<a href="./src/resources/auth/access-keys.ts">create</a>({ ...params }) -> AccessKeyCreateResponse</code>
- <code title="get /auth/access-keys">client.auth.accessKeys.<a href="./src/resources/auth/access-keys.ts">list</a>() -> AccessKeyListResponse</code>
- <code title="delete /auth/access-keys/{access_key_id}">client.auth.accessKeys.<a href="./src/resources/auth/access-keys.ts">revoke</a>(accessKeyId) -> void</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountPatchAllResponse</a></code>

Methods:

- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>() -> AccountListResponse</code>
- <code title="patch /accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">patchAll</a>({ ...params }) -> AccountPatchAllResponse</code>
- <code title="get /accounts/{account_handle}/avatar">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieveAvatar</a>(accountHandle) -> Response</code>

## Self

Methods:

- <code title="post /accounts/self/avatar">client.accounts.self.<a href="./src/resources/accounts/self/self.ts">avatar</a>({ ...params }) -> void</code>

### AuthMethods

Types:

- <code><a href="./src/resources/accounts/self/auth-methods.ts">AuthMethodDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/self/auth-methods.ts">AuthMethodRetrieveAuthMethodsResponse</a></code>

Methods:

- <code title="delete /accounts/self/auth-methods/{auth_method_id}">client.accounts.self.authMethods.<a href="./src/resources/accounts/self/auth-methods.ts">delete</a>(authMethodId) -> AuthMethodDeleteResponse</code>
- <code title="get /accounts/self/auth-methods">client.accounts.self.authMethods.<a href="./src/resources/accounts/self/auth-methods.ts">retrieveAuthMethods</a>() -> AuthMethodRetrieveAuthMethodsResponse</code>

### Emails

Types:

- <code><a href="./src/resources/accounts/self/emails.ts">EmailCreateResponse</a></code>

Methods:

- <code title="post /accounts/self/emails">client.accounts.self.emails.<a href="./src/resources/accounts/self/emails.ts">create</a>({ ...params }) -> EmailCreateResponse</code>
- <code title="delete /accounts/self/emails/{email_address_id}">client.accounts.self.emails.<a href="./src/resources/accounts/self/emails.ts">delete</a>(emailAddressId) -> void</code>

## Roles

Types:

- <code><a href="./src/resources/accounts/roles/roles.ts">RoleUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/roles/roles.ts">RoleDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_handle}/roles/{role_id}">client.accounts.roles.<a href="./src/resources/accounts/roles/roles.ts">update</a>(accountHandle, roleId) -> RoleUpdateResponse</code>
- <code title="delete /accounts/{account_handle}/roles/{role_id}">client.accounts.roles.<a href="./src/resources/accounts/roles/roles.ts">delete</a>(accountHandle, roleId) -> RoleDeleteResponse</code>

### Badge

Types:

- <code><a href="./src/resources/accounts/roles/badge.ts">BadgeCreateResponse</a></code>
- <code><a href="./src/resources/accounts/roles/badge.ts">BadgeDeleteAllResponse</a></code>

Methods:

- <code title="put /accounts/{account_handle}/roles/{role_id}/badge">client.accounts.roles.badge.<a href="./src/resources/accounts/roles/badge.ts">create</a>(accountHandle, roleId) -> BadgeCreateResponse</code>
- <code title="delete /accounts/{account_handle}/roles/{role_id}/badge">client.accounts.roles.badge.<a href="./src/resources/accounts/roles/badge.ts">deleteAll</a>(accountHandle, roleId) -> BadgeDeleteAllResponse</code>

# Invitations

Types:

- <code><a href="./src/resources/invitations.ts">InvitationCreateResponse</a></code>
- <code><a href="./src/resources/invitations.ts">InvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/invitations.ts">InvitationListResponse</a></code>

Methods:

- <code title="post /invitations">client.invitations.<a href="./src/resources/invitations.ts">create</a>({ ...params }) -> InvitationCreateResponse</code>
- <code title="get /invitations/{invitation_id}">client.invitations.<a href="./src/resources/invitations.ts">retrieve</a>(invitationId) -> InvitationRetrieveResponse</code>
- <code title="get /invitations">client.invitations.<a href="./src/resources/invitations.ts">list</a>({ ...params }) -> InvitationListResponse</code>
- <code title="delete /invitations/{invitation_id}">client.invitations.<a href="./src/resources/invitations.ts">delete</a>(invitationId) -> void</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications.ts">NotificationListResponse</a></code>
- <code><a href="./src/resources/notifications.ts">NotificationUpdateReadStatusResponse</a></code>

Methods:

- <code title="get /notifications">client.notifications.<a href="./src/resources/notifications.ts">list</a>({ ...params }) -> NotificationListResponse</code>
- <code title="patch /notifications/{notification_id}">client.notifications.<a href="./src/resources/notifications.ts">updateReadStatus</a>(notificationId, { ...params }) -> NotificationUpdateReadStatusResponse</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles/profiles.ts">ProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/profiles/profiles.ts">ProfileListResponse</a></code>

Methods:

- <code title="get /profiles/{account_handle}">client.profiles.<a href="./src/resources/profiles/profiles.ts">retrieve</a>(accountHandle) -> ProfileRetrieveResponse</code>
- <code title="get /profiles">client.profiles.<a href="./src/resources/profiles/profiles.ts">list</a>({ ...params }) -> ProfileListResponse</code>

## Following

Types:

- <code><a href="./src/resources/profiles/following.ts">FollowingRetrieveResponse</a></code>

Methods:

- <code title="get /profiles/{account_handle}/following">client.profiles.following.<a href="./src/resources/profiles/following.ts">retrieve</a>(accountHandle, { ...params }) -> FollowingRetrieveResponse</code>

## Followers

Types:

- <code><a href="./src/resources/profiles/followers.ts">FollowerRetrieveResponse</a></code>

Methods:

- <code title="put /profiles/{account_handle}/followers">client.profiles.followers.<a href="./src/resources/profiles/followers.ts">create</a>(accountHandle) -> void</code>
- <code title="get /profiles/{account_handle}/followers">client.profiles.followers.<a href="./src/resources/profiles/followers.ts">retrieve</a>(accountHandle, { ...params }) -> FollowerRetrieveResponse</code>
- <code title="delete /profiles/{account_handle}/followers">client.profiles.followers.<a href="./src/resources/profiles/followers.ts">delete</a>(accountHandle) -> void</code>

# Categories

Types:

- <code><a href="./src/resources/categories.ts">CategoryCreateResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryUpdateResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryUpdateSortOrderResponse</a></code>

Methods:

- <code title="post /categories">client.categories.<a href="./src/resources/categories.ts">create</a>({ ...params }) -> CategoryCreateResponse</code>
- <code title="patch /categories/{category_id}">client.categories.<a href="./src/resources/categories.ts">update</a>(categoryId, { ...params }) -> CategoryUpdateResponse</code>
- <code title="get /categories">client.categories.<a href="./src/resources/categories.ts">list</a>() -> CategoryListResponse</code>
- <code title="patch /categories">client.categories.<a href="./src/resources/categories.ts">updateSortOrder</a>([ ...body ]) -> CategoryUpdateSortOrderResponse</code>

# Tags

Types:

- <code><a href="./src/resources/tags.ts">TagRetrieveResponse</a></code>
- <code><a href="./src/resources/tags.ts">TagListResponse</a></code>

Methods:

- <code title="get /tags/{tag_name}">client.tags.<a href="./src/resources/tags.ts">retrieve</a>(tagName) -> TagRetrieveResponse</code>
- <code title="get /tags">client.tags.<a href="./src/resources/tags.ts">list</a>({ ...params }) -> TagListResponse</code>

# Threads

Types:

- <code><a href="./src/resources/threads.ts">ThreadCreateResponse</a></code>
- <code><a href="./src/resources/threads.ts">ThreadRetrieveResponse</a></code>
- <code><a href="./src/resources/threads.ts">ThreadUpdateResponse</a></code>
- <code><a href="./src/resources/threads.ts">ThreadListResponse</a></code>
- <code><a href="./src/resources/threads.ts">ThreadCreateReplyResponse</a></code>

Methods:

- <code title="post /threads">client.threads.<a href="./src/resources/threads.ts">create</a>({ ...params }) -> ThreadCreateResponse</code>
- <code title="get /threads/{thread_mark}">client.threads.<a href="./src/resources/threads.ts">retrieve</a>(threadMark, { ...params }) -> ThreadRetrieveResponse</code>
- <code title="patch /threads/{thread_mark}">client.threads.<a href="./src/resources/threads.ts">update</a>(threadMark, { ...params }) -> ThreadUpdateResponse</code>
- <code title="get /threads">client.threads.<a href="./src/resources/threads.ts">list</a>({ ...params }) -> ThreadListResponse</code>
- <code title="delete /threads/{thread_mark}">client.threads.<a href="./src/resources/threads.ts">delete</a>(threadMark) -> void</code>
- <code title="post /threads/{thread_mark}/replies">client.threads.<a href="./src/resources/threads.ts">createReply</a>(threadMark, { ...params }) -> ThreadCreateReplyResponse</code>

# Posts

Types:

- <code><a href="./src/resources/posts/posts.ts">PostUpdateResponse</a></code>

Methods:

- <code title="patch /posts/{post_id}">client.posts.<a href="./src/resources/posts/posts.ts">update</a>(postId, { ...params }) -> PostUpdateResponse</code>
- <code title="delete /posts/{post_id}">client.posts.<a href="./src/resources/posts/posts.ts">delete</a>(postId) -> void</code>

## Reacts

Types:

- <code><a href="./src/resources/posts/reacts.ts">ReactAddResponse</a></code>

Methods:

- <code title="put /posts/{post_id}/reacts">client.posts.reacts.<a href="./src/resources/posts/reacts.ts">add</a>(postId, { ...params }) -> ReactAddResponse</code>
- <code title="delete /posts/{post_id}/reacts/{react_id}">client.posts.reacts.<a href="./src/resources/posts/reacts.ts">remove</a>(postId, reactId) -> void</code>

# Assets

Types:

- <code><a href="./src/resources/assets.ts">AssetUploadResponse</a></code>

Methods:

- <code title="get /assets/{asset_filename}">client.assets.<a href="./src/resources/assets.ts">download</a>(assetFilename) -> Response</code>
- <code title="post /assets">client.assets.<a href="./src/resources/assets.ts">upload</a>({ ...params }) -> AssetUploadResponse</code>

# Likes

Types:

- <code><a href="./src/resources/likes/likes.ts">LikeRetrieveByProfileResponse</a></code>

Methods:

- <code title="get /likes/profiles/{account_handle}">client.likes.<a href="./src/resources/likes/likes.ts">retrieveByProfile</a>(accountHandle, { ...params }) -> LikeRetrieveByProfileResponse</code>

## Posts

Types:

- <code><a href="./src/resources/likes/posts.ts">PostRetrieveResponse</a></code>

Methods:

- <code title="get /likes/posts/{post_id}">client.likes.posts.<a href="./src/resources/likes/posts.ts">retrieve</a>(postId) -> PostRetrieveResponse</code>
- <code title="put /likes/posts/{post_id}">client.likes.posts.<a href="./src/resources/likes/posts.ts">add</a>(postId) -> void</code>
- <code title="delete /likes/posts/{post_id}">client.likes.posts.<a href="./src/resources/likes/posts.ts">remove</a>(postId) -> void</code>

# Collections

Types:

- <code><a href="./src/resources/collections/collections.ts">CollectionCreateResponse</a></code>
- <code><a href="./src/resources/collections/collections.ts">CollectionRetrieveResponse</a></code>
- <code><a href="./src/resources/collections/collections.ts">CollectionUpdateResponse</a></code>
- <code><a href="./src/resources/collections/collections.ts">CollectionListResponse</a></code>

Methods:

- <code title="post /collections">client.collections.<a href="./src/resources/collections/collections.ts">create</a>({ ...params }) -> CollectionCreateResponse</code>
- <code title="get /collections/{collection_mark}">client.collections.<a href="./src/resources/collections/collections.ts">retrieve</a>(collectionMark) -> CollectionRetrieveResponse</code>
- <code title="patch /collections/{collection_mark}">client.collections.<a href="./src/resources/collections/collections.ts">update</a>(collectionMark, { ...params }) -> CollectionUpdateResponse</code>
- <code title="get /collections">client.collections.<a href="./src/resources/collections/collections.ts">list</a>({ ...params }) -> CollectionListResponse</code>
- <code title="delete /collections/{collection_mark}">client.collections.<a href="./src/resources/collections/collections.ts">delete</a>(collectionMark) -> void</code>

## Posts

Types:

- <code><a href="./src/resources/collections/posts.ts">PostAddResponse</a></code>
- <code><a href="./src/resources/collections/posts.ts">PostRemoveResponse</a></code>

Methods:

- <code title="put /collections/{collection_mark}/posts/{post_id}">client.collections.posts.<a href="./src/resources/collections/posts.ts">add</a>(collectionMark, postId) -> PostAddResponse</code>
- <code title="delete /collections/{collection_mark}/posts/{post_id}">client.collections.posts.<a href="./src/resources/collections/posts.ts">remove</a>(collectionMark, postId) -> PostRemoveResponse</code>

## Nodes

Types:

- <code><a href="./src/resources/collections/nodes.ts">NodeAddResponse</a></code>
- <code><a href="./src/resources/collections/nodes.ts">NodeRemoveResponse</a></code>

Methods:

- <code title="put /collections/{collection_mark}/nodes/{node_id}">client.collections.nodes.<a href="./src/resources/collections/nodes.ts">add</a>(collectionMark, nodeId) -> NodeAddResponse</code>
- <code title="delete /collections/{collection_mark}/nodes/{node_id}">client.collections.nodes.<a href="./src/resources/collections/nodes.ts">remove</a>(collectionMark, nodeId) -> NodeRemoveResponse</code>

# Nodes

Types:

- <code><a href="./src/resources/nodes/nodes.ts">NodeCreateResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeRetrieveResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeUpdateResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeListResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeDeleteResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeProposeContentResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeProposeTagsResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeProposeTitleResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeUpdatePositionResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeUpdatePropertiesResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeUpdatePropertySchemaResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeUpdateVisibilityResponse</a></code>

Methods:

- <code title="post /nodes">client.nodes.<a href="./src/resources/nodes/nodes.ts">create</a>({ ...params }) -> NodeCreateResponse</code>
- <code title="get /nodes/{node_slug}">client.nodes.<a href="./src/resources/nodes/nodes.ts">retrieve</a>(nodeSlug, { ...params }) -> NodeRetrieveResponse</code>
- <code title="patch /nodes/{node_slug}">client.nodes.<a href="./src/resources/nodes/nodes.ts">update</a>(nodeSlug, { ...params }) -> NodeUpdateResponse</code>
- <code title="get /nodes">client.nodes.<a href="./src/resources/nodes/nodes.ts">list</a>({ ...params }) -> NodeListResponse</code>
- <code title="delete /nodes/{node_slug}">client.nodes.<a href="./src/resources/nodes/nodes.ts">delete</a>(nodeSlug, { ...params }) -> NodeDeleteResponse</code>
- <code title="post /nodes/{node_slug}/content">client.nodes.<a href="./src/resources/nodes/nodes.ts">proposeContent</a>(nodeSlug, { ...params }) -> NodeProposeContentResponse</code>
- <code title="post /nodes/{node_slug}/tags">client.nodes.<a href="./src/resources/nodes/nodes.ts">proposeTags</a>(nodeSlug, { ...params }) -> NodeProposeTagsResponse</code>
- <code title="post /nodes/{node_slug}/title">client.nodes.<a href="./src/resources/nodes/nodes.ts">proposeTitle</a>(nodeSlug, { ...params }) -> NodeProposeTitleResponse</code>
- <code title="patch /nodes/{node_slug}/position">client.nodes.<a href="./src/resources/nodes/nodes.ts">updatePosition</a>(nodeSlug, { ...params }) -> NodeUpdatePositionResponse</code>
- <code title="patch /nodes/{node_slug}/properties">client.nodes.<a href="./src/resources/nodes/nodes.ts">updateProperties</a>(nodeSlug, { ...params }) -> NodeUpdatePropertiesResponse</code>
- <code title="patch /nodes/{node_slug}/property-schema">client.nodes.<a href="./src/resources/nodes/nodes.ts">updatePropertySchema</a>(nodeSlug, [ ...body ]) -> NodeUpdatePropertySchemaResponse</code>
- <code title="patch /nodes/{node_slug}/visibility">client.nodes.<a href="./src/resources/nodes/nodes.ts">updateVisibility</a>(nodeSlug, { ...params }) -> NodeUpdateVisibilityResponse</code>

## Children

Types:

- <code><a href="./src/resources/nodes/children.ts">ChildListResponse</a></code>
- <code><a href="./src/resources/nodes/children.ts">ChildUpdatePropertySchemaResponse</a></code>

Methods:

- <code title="get /nodes/{node_slug}/children">client.nodes.children.<a href="./src/resources/nodes/children.ts">list</a>(nodeSlug, { ...params }) -> ChildListResponse</code>
- <code title="patch /nodes/{node_slug}/children/property-schema">client.nodes.children.<a href="./src/resources/nodes/children.ts">updatePropertySchema</a>(nodeSlug, [ ...body ]) -> ChildUpdatePropertySchemaResponse</code>

## Assets

Types:

- <code><a href="./src/resources/nodes/assets.ts">AssetAddResponse</a></code>
- <code><a href="./src/resources/nodes/assets.ts">AssetRemoveResponse</a></code>

Methods:

- <code title="put /nodes/{node_slug}/assets/{asset_id}">client.nodes.assets.<a href="./src/resources/nodes/assets.ts">add</a>(nodeSlug, assetId) -> AssetAddResponse</code>
- <code title="delete /nodes/{node_slug}/assets/{asset_id}">client.nodes.assets.<a href="./src/resources/nodes/assets.ts">remove</a>(nodeSlug, assetId) -> AssetRemoveResponse</code>

## Nodes

Types:

- <code><a href="./src/resources/nodes/nodes_.ts">NodeRemoveChildResponse</a></code>
- <code><a href="./src/resources/nodes/nodes_.ts">NodeSetParentResponse</a></code>

Methods:

- <code title="delete /nodes/{node_slug}/nodes/{node_slug_child}">client.nodes.nodes.<a href="./src/resources/nodes/nodes_.ts">removeChild</a>(nodeSlug, nodeSlugChild) -> NodeRemoveChildResponse</code>
- <code title="put /nodes/{node_slug}/nodes/{node_slug_child}">client.nodes.nodes.<a href="./src/resources/nodes/nodes_.ts">setParent</a>(nodeSlug, nodeSlugChild) -> NodeSetParentResponse</code>

# Links

Types:

- <code><a href="./src/resources/links.ts">LinkCreateResponse</a></code>
- <code><a href="./src/resources/links.ts">LinkRetrieveResponse</a></code>
- <code><a href="./src/resources/links.ts">LinkListResponse</a></code>

Methods:

- <code title="post /links">client.links.<a href="./src/resources/links.ts">create</a>({ ...params }) -> LinkCreateResponse</code>
- <code title="get /links/{link_slug}">client.links.<a href="./src/resources/links.ts">retrieve</a>(linkSlug) -> LinkRetrieveResponse</code>
- <code title="get /links">client.links.<a href="./src/resources/links.ts">list</a>({ ...params }) -> LinkListResponse</code>

# Datagraph

Types:

- <code><a href="./src/resources/datagraph.ts">DatagraphAskQuestionResponse</a></code>
- <code><a href="./src/resources/datagraph.ts">DatagraphQueryResponse</a></code>

Methods:

- <code title="get /datagraph/ask">client.datagraph.<a href="./src/resources/datagraph.ts">askQuestion</a>({ ...params }) -> string</code>
- <code title="get /datagraph">client.datagraph.<a href="./src/resources/datagraph.ts">query</a>({ ...params }) -> DatagraphQueryResponse</code>

# Events

Types:

- <code><a href="./src/resources/events/events.ts">EventCreateResponse</a></code>
- <code><a href="./src/resources/events/events.ts">EventRetrieveResponse</a></code>
- <code><a href="./src/resources/events/events.ts">EventUpdateResponse</a></code>
- <code><a href="./src/resources/events/events.ts">EventListResponse</a></code>

Methods:

- <code title="post /events">client.events.<a href="./src/resources/events/events.ts">create</a>({ ...params }) -> EventCreateResponse</code>
- <code title="get /events/{event_mark}">client.events.<a href="./src/resources/events/events.ts">retrieve</a>(eventMark) -> EventRetrieveResponse</code>
- <code title="patch /events/{event_mark}">client.events.<a href="./src/resources/events/events.ts">update</a>(eventMark, { ...params }) -> EventUpdateResponse</code>
- <code title="get /events">client.events.<a href="./src/resources/events/events.ts">list</a>({ ...params }) -> EventListResponse</code>
- <code title="delete /events/{event_mark}">client.events.<a href="./src/resources/events/events.ts">delete</a>(eventMark) -> void</code>

## Participants

Methods:

- <code title="put /events/{event_mark}/participants/{account_id}">client.events.participants.<a href="./src/resources/events/participants.ts">update</a>(eventMark, accountId, { ...params }) -> void</code>
- <code title="delete /events/{event_mark}/participants/{account_id}">client.events.participants.<a href="./src/resources/events/participants.ts">delete</a>(eventMark, accountId) -> void</code>
