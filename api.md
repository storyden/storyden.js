# Misc

## Version

Types:

- <code><a href="./src/resources/misc/version.ts">VersionRetrieveResponse</a></code>

Methods:

- <code title="get /version">client.misc.version.<a href="./src/resources/misc/version.ts">retrieve</a>() -> string</code>

## OpenAPI

Types:

- <code><a href="./src/resources/misc/openapi.ts">OpenAPIRetrieveResponse</a></code>

Methods:

- <code title="get /openapi.json">client.misc.openAPI.<a href="./src/resources/misc/openapi.ts">retrieve</a>() -> string</code>

## Info

Types:

- <code><a href="./src/resources/misc/info/info.ts">InfoRetrieveResponse</a></code>

Methods:

- <code title="get /v1/info">client.misc.info.<a href="./src/resources/misc/info/info.ts">retrieve</a>() -> InfoRetrieveResponse</code>

### Icon

Methods:

- <code title="post /v1/info/icon">client.misc.info.icon.<a href="./src/resources/misc/info/icon.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v1/info/icon/{icon_size}">client.misc.info.icon.<a href="./src/resources/misc/info/icon.ts">retrieve</a>(iconSize) -> Response</code>

# Admin

Types:

- <code><a href="./src/resources/admin/admin.ts">AdminUpdateResponse</a></code>

Methods:

- <code title="patch /v1/admin">client.admin.<a href="./src/resources/admin/admin.ts">update</a>({ ...params }) -> AdminUpdateResponse</code>

## Bans

Types:

- <code><a href="./src/resources/admin/bans.ts">BanDeleteSuspendedResponse</a></code>
- <code><a href="./src/resources/admin/bans.ts">BanSuspendResponse</a></code>

Methods:

- <code title="delete /v1/admin/bans/{account_handle}">client.admin.bans.<a href="./src/resources/admin/bans.ts">deleteSuspended</a>(accountHandle) -> BanDeleteSuspendedResponse</code>
- <code title="post /v1/admin/bans/{account_handle}">client.admin.bans.<a href="./src/resources/admin/bans.ts">suspend</a>(accountHandle) -> BanSuspendResponse</code>

# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">AuthListResponse</a></code>

Methods:

- <code title="get /v1/auth">client.auth.<a href="./src/resources/auth/auth.ts">list</a>() -> AuthListResponse</code>
- <code title="get /v1/auth/logout">client.auth.<a href="./src/resources/auth/auth.ts">logout</a>() -> void</code>

## Password

Types:

- <code><a href="./src/resources/auth/password.ts">PasswordCreateResponse</a></code>
- <code><a href="./src/resources/auth/password.ts">PasswordUpdateResponse</a></code>
- <code><a href="./src/resources/auth/password.ts">PasswordSigninResponse</a></code>
- <code><a href="./src/resources/auth/password.ts">PasswordSignupResponse</a></code>

Methods:

- <code title="post /v1/auth/password">client.auth.password.<a href="./src/resources/auth/password.ts">create</a>({ ...params }) -> PasswordCreateResponse</code>
- <code title="patch /v1/auth/password">client.auth.password.<a href="./src/resources/auth/password.ts">update</a>({ ...params }) -> PasswordUpdateResponse</code>
- <code title="post /v1/auth/password/signin">client.auth.password.<a href="./src/resources/auth/password.ts">signin</a>({ ...params }) -> PasswordSigninResponse</code>
- <code title="post /v1/auth/password/signup">client.auth.password.<a href="./src/resources/auth/password.ts">signup</a>({ ...params }) -> PasswordSignupResponse</code>

## EmailPassword

Types:

- <code><a href="./src/resources/auth/email-password.ts">EmailPasswordSigninResponse</a></code>
- <code><a href="./src/resources/auth/email-password.ts">EmailPasswordSignupResponse</a></code>

Methods:

- <code title="post /v1/auth/email-password/signin">client.auth.emailPassword.<a href="./src/resources/auth/email-password.ts">signin</a>({ ...params }) -> EmailPasswordSigninResponse</code>
- <code title="post /v1/auth/email-password/signup">client.auth.emailPassword.<a href="./src/resources/auth/email-password.ts">signup</a>({ ...params }) -> EmailPasswordSignupResponse</code>

## Email

Types:

- <code><a href="./src/resources/auth/email.ts">EmailSigninResponse</a></code>
- <code><a href="./src/resources/auth/email.ts">EmailSignupResponse</a></code>
- <code><a href="./src/resources/auth/email.ts">EmailVerifyResponse</a></code>

Methods:

- <code title="post /v1/auth/email/signin">client.auth.email.<a href="./src/resources/auth/email.ts">signin</a>({ ...params }) -> EmailSigninResponse</code>
- <code title="post /v1/auth/email/signup">client.auth.email.<a href="./src/resources/auth/email.ts">signup</a>({ ...params }) -> EmailSignupResponse</code>
- <code title="post /v1/auth/email/verify">client.auth.email.<a href="./src/resources/auth/email.ts">verify</a>({ ...params }) -> EmailVerifyResponse</code>

## OAuth

Types:

- <code><a href="./src/resources/auth/oauth.ts">OAuthCallbackResponse</a></code>

Methods:

- <code title="post /v1/auth/oauth/{oauth_provider}/callback">client.auth.oauth.<a href="./src/resources/auth/oauth.ts">callback</a>(oauthProvider, { ...params }) -> OAuthCallbackResponse</code>

## Webauthn

Types:

- <code><a href="./src/resources/auth/webauthn/webauthn.ts">WebauthnMakeResponse</a></code>

Methods:

- <code title="post /v1/auth/webauthn/make">client.auth.webauthn.<a href="./src/resources/auth/webauthn/webauthn.ts">make</a>({ ...params }) -> WebauthnMakeResponse</code>

### Assert

Types:

- <code><a href="./src/resources/auth/webauthn/assert.ts">AssertStartResponse</a></code>

Methods:

- <code title="get /v1/auth/webauthn/assert/{account_handle}">client.auth.webauthn.assert.<a href="./src/resources/auth/webauthn/assert.ts">start</a>(accountHandle) -> AssertStartResponse</code>

## Phone

Types:

- <code><a href="./src/resources/auth/phone.ts">PhoneCompleteResponse</a></code>
- <code><a href="./src/resources/auth/phone.ts">PhoneStartResponse</a></code>

Methods:

- <code title="put /v1/auth/phone/{account_handle}">client.auth.phone.<a href="./src/resources/auth/phone.ts">complete</a>(accountHandle, { ...params }) -> PhoneCompleteResponse</code>
- <code title="post /v1/auth/phone">client.auth.phone.<a href="./src/resources/auth/phone.ts">start</a>({ ...params }) -> PhoneStartResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="patch /v1/accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">update</a>({ ...params }) -> AccountUpdateResponse</code>
- <code title="get /v1/accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>() -> AccountListResponse</code>

## Self

### AuthMethods

Types:

- <code><a href="./src/resources/accounts/self/auth-methods.ts">AuthMethodListResponse</a></code>
- <code><a href="./src/resources/accounts/self/auth-methods.ts">AuthMethodDeleteResponse</a></code>

Methods:

- <code title="get /v1/accounts/self/auth-methods">client.accounts.self.authMethods.<a href="./src/resources/accounts/self/auth-methods.ts">list</a>() -> AuthMethodListResponse</code>
- <code title="delete /v1/accounts/self/auth-methods/{auth_method_id}">client.accounts.self.authMethods.<a href="./src/resources/accounts/self/auth-methods.ts">delete</a>(authMethodId) -> AuthMethodDeleteResponse</code>

### Avatar

Methods:

- <code title="post /v1/accounts/self/avatar">client.accounts.self.avatar.<a href="./src/resources/accounts/self/avatar.ts">create</a>({ ...params }) -> void</code>

## Avatar

Methods:

- <code title="get /v1/accounts/{account_handle}/avatar">client.accounts.avatar.<a href="./src/resources/accounts/avatar.ts">retrieve</a>(accountHandle) -> Response</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles.ts">ProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileListResponse</a></code>

Methods:

- <code title="get /v1/profiles/{account_handle}">client.profiles.<a href="./src/resources/profiles.ts">retrieve</a>(accountHandle) -> ProfileRetrieveResponse</code>
- <code title="get /v1/profiles">client.profiles.<a href="./src/resources/profiles.ts">list</a>({ ...params }) -> ProfileListResponse</code>

# Categories

Types:

- <code><a href="./src/resources/categories.ts">CategoryCreateResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryUpdateResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="post /v1/categories">client.categories.<a href="./src/resources/categories.ts">create</a>({ ...params }) -> CategoryCreateResponse</code>
- <code title="patch /v1/categories/{category_id}">client.categories.<a href="./src/resources/categories.ts">update</a>(categoryId, { ...params }) -> CategoryUpdateResponse</code>
- <code title="get /v1/categories">client.categories.<a href="./src/resources/categories.ts">list</a>() -> CategoryListResponse</code>

# Threads

Types:

- <code><a href="./src/resources/threads/threads.ts">ThreadCreateResponse</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadRetrieveResponse</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadUpdateResponse</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadListResponse</a></code>

Methods:

- <code title="post /v1/threads">client.threads.<a href="./src/resources/threads/threads.ts">create</a>({ ...params }) -> ThreadCreateResponse</code>
- <code title="get /v1/threads/{thread_mark}">client.threads.<a href="./src/resources/threads/threads.ts">retrieve</a>(threadMark) -> ThreadRetrieveResponse</code>
- <code title="patch /v1/threads/{thread_mark}">client.threads.<a href="./src/resources/threads/threads.ts">update</a>(threadMark, { ...params }) -> ThreadUpdateResponse</code>
- <code title="get /v1/threads">client.threads.<a href="./src/resources/threads/threads.ts">list</a>({ ...params }) -> ThreadListResponse</code>
- <code title="delete /v1/threads/{thread_mark}">client.threads.<a href="./src/resources/threads/threads.ts">delete</a>(threadMark) -> void</code>

## Posts

Types:

- <code><a href="./src/resources/threads/posts.ts">PostCreateResponse</a></code>

Methods:

- <code title="post /v1/threads/{thread_mark}/posts">client.threads.posts.<a href="./src/resources/threads/posts.ts">create</a>(threadMark, { ...params }) -> PostCreateResponse</code>

# Posts

Types:

- <code><a href="./src/resources/posts/posts.ts">PostUpdateResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostSearchResponse</a></code>

Methods:

- <code title="patch /v1/posts/{post_id}">client.posts.<a href="./src/resources/posts/posts.ts">update</a>(postId, { ...params }) -> PostUpdateResponse</code>
- <code title="delete /v1/posts/{post_id}">client.posts.<a href="./src/resources/posts/posts.ts">delete</a>(postId) -> void</code>
- <code title="get /v1/posts/search">client.posts.<a href="./src/resources/posts/posts.ts">search</a>({ ...params }) -> PostSearchResponse</code>

## Reacts

Types:

- <code><a href="./src/resources/posts/reacts.ts">ReactUpdateResponse</a></code>

Methods:

- <code title="put /v1/posts/{post_id}/reacts">client.posts.reacts.<a href="./src/resources/posts/reacts.ts">update</a>(postId, { ...params }) -> ReactUpdateResponse</code>

# Assets

Types:

- <code><a href="./src/resources/assets.ts">AssetCreateResponse</a></code>

Methods:

- <code title="post /v1/assets">client.assets.<a href="./src/resources/assets.ts">create</a>({ ...params }) -> AssetCreateResponse</code>
- <code title="get /v1/assets/{asset_filename}">client.assets.<a href="./src/resources/assets.ts">retrieve</a>(assetFilename) -> Response</code>

# Collections

Types:

- <code><a href="./src/resources/collections/collections.ts">CollectionCreateResponse</a></code>
- <code><a href="./src/resources/collections/collections.ts">CollectionRetrieveResponse</a></code>
- <code><a href="./src/resources/collections/collections.ts">CollectionUpdateResponse</a></code>
- <code><a href="./src/resources/collections/collections.ts">CollectionListResponse</a></code>

Methods:

- <code title="post /v1/collections">client.collections.<a href="./src/resources/collections/collections.ts">create</a>({ ...params }) -> CollectionCreateResponse</code>
- <code title="get /v1/collections/{collection_id}">client.collections.<a href="./src/resources/collections/collections.ts">retrieve</a>(collectionId) -> CollectionRetrieveResponse</code>
- <code title="patch /v1/collections/{collection_id}">client.collections.<a href="./src/resources/collections/collections.ts">update</a>(collectionId, { ...params }) -> CollectionUpdateResponse</code>
- <code title="get /v1/collections">client.collections.<a href="./src/resources/collections/collections.ts">list</a>({ ...params }) -> CollectionListResponse</code>
- <code title="delete /v1/collections/{collection_id}">client.collections.<a href="./src/resources/collections/collections.ts">delete</a>(collectionId) -> void</code>

## Posts

Types:

- <code><a href="./src/resources/collections/posts.ts">PostAddResponse</a></code>
- <code><a href="./src/resources/collections/posts.ts">PostRemoveResponse</a></code>

Methods:

- <code title="put /v1/collections/{collection_id}/posts/{post_id}">client.collections.posts.<a href="./src/resources/collections/posts.ts">add</a>(collectionId, postId) -> PostAddResponse</code>
- <code title="delete /v1/collections/{collection_id}/posts/{post_id}">client.collections.posts.<a href="./src/resources/collections/posts.ts">remove</a>(collectionId, postId) -> PostRemoveResponse</code>

## Nodes

Types:

- <code><a href="./src/resources/collections/nodes.ts">NodeAddResponse</a></code>
- <code><a href="./src/resources/collections/nodes.ts">NodeRemoveResponse</a></code>

Methods:

- <code title="put /v1/collections/{collection_id}/nodes/{node_id}">client.collections.nodes.<a href="./src/resources/collections/nodes.ts">add</a>(collectionId, nodeId) -> NodeAddResponse</code>
- <code title="delete /v1/collections/{collection_id}/nodes/{node_id}">client.collections.nodes.<a href="./src/resources/collections/nodes.ts">remove</a>(collectionId, nodeId) -> NodeRemoveResponse</code>

# Nodes

Types:

- <code><a href="./src/resources/nodes/nodes.ts">NodeCreateResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeRetrieveResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeUpdateResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeListResponse</a></code>
- <code><a href="./src/resources/nodes/nodes.ts">NodeDeleteResponse</a></code>

Methods:

- <code title="post /v1/nodes">client.nodes.<a href="./src/resources/nodes/nodes.ts">create</a>({ ...params }) -> NodeCreateResponse</code>
- <code title="get /v1/nodes/{node_slug}">client.nodes.<a href="./src/resources/nodes/nodes.ts">retrieve</a>(nodeSlug) -> NodeRetrieveResponse</code>
- <code title="patch /v1/nodes/{node_slug}">client.nodes.<a href="./src/resources/nodes/nodes.ts">update</a>(nodeSlug, { ...params }) -> NodeUpdateResponse</code>
- <code title="get /v1/nodes">client.nodes.<a href="./src/resources/nodes/nodes.ts">list</a>({ ...params }) -> NodeListResponse</code>
- <code title="delete /v1/nodes/{node_slug}">client.nodes.<a href="./src/resources/nodes/nodes.ts">delete</a>(nodeSlug, { ...params }) -> NodeDeleteResponse</code>

## Visibility

Types:

- <code><a href="./src/resources/nodes/visibility.ts">VisibilityUpdateResponse</a></code>

Methods:

- <code title="patch /v1/nodes/{node_slug}/visibility">client.nodes.visibility.<a href="./src/resources/nodes/visibility.ts">update</a>(nodeSlug, { ...params }) -> VisibilityUpdateResponse</code>

## Assets

Types:

- <code><a href="./src/resources/nodes/assets.ts">AssetAddResponse</a></code>
- <code><a href="./src/resources/nodes/assets.ts">AssetRemoveResponse</a></code>

Methods:

- <code title="put /v1/nodes/{node_slug}/assets/{asset_id}">client.nodes.assets.<a href="./src/resources/nodes/assets.ts">add</a>(nodeSlug, assetId, { ...params }) -> AssetAddResponse</code>
- <code title="delete /v1/nodes/{node_slug}/assets/{asset_id}">client.nodes.assets.<a href="./src/resources/nodes/assets.ts">remove</a>(nodeSlug, assetId) -> AssetRemoveResponse</code>

## Children

Types:

- <code><a href="./src/resources/nodes/children.ts">ChildRemoveParentResponse</a></code>
- <code><a href="./src/resources/nodes/children.ts">ChildSetParentResponse</a></code>

Methods:

- <code title="delete /v1/nodes/{node_slug}/nodes/{node_slug_child}">client.nodes.children.<a href="./src/resources/nodes/children.ts">removeParent</a>(nodeSlug, nodeSlugChild) -> ChildRemoveParentResponse</code>
- <code title="put /v1/nodes/{node_slug}/nodes/{node_slug_child}">client.nodes.children.<a href="./src/resources/nodes/children.ts">setParent</a>(nodeSlug, nodeSlugChild) -> ChildSetParentResponse</code>

# Links

Types:

- <code><a href="./src/resources/links.ts">LinkCreateResponse</a></code>
- <code><a href="./src/resources/links.ts">LinkRetrieveResponse</a></code>
- <code><a href="./src/resources/links.ts">LinkListResponse</a></code>

Methods:

- <code title="post /v1/links">client.links.<a href="./src/resources/links.ts">create</a>({ ...params }) -> LinkCreateResponse</code>
- <code title="get /v1/links/{link_slug}">client.links.<a href="./src/resources/links.ts">retrieve</a>(linkSlug) -> LinkRetrieveResponse</code>
- <code title="get /v1/links">client.links.<a href="./src/resources/links.ts">list</a>({ ...params }) -> LinkListResponse</code>

# Datagraph

Types:

- <code><a href="./src/resources/datagraph.ts">DatagraphListResponse</a></code>

Methods:

- <code title="get /v1/datagraph">client.datagraph.<a href="./src/resources/datagraph.ts">list</a>({ ...params }) -> DatagraphListResponse</code>
