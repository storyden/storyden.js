# Version

Types:

- <code><a href="./src/resources/version.ts">VersionRetrieveResponse</a></code>

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">retrieve</a>() -> string</code>

# OpenapiJson

Types:

- <code><a href="./src/resources/openapi-json.ts">OpenapiJsonRetrieveResponse</a></code>

Methods:

- <code title="get /openapi.json">client.openapiJson.<a href="./src/resources/openapi-json.ts">retrieve</a>() -> string</code>

# V1

## Info

Types:

- <code><a href="./src/resources/v1/info/info.ts">InfoListResponse</a></code>

Methods:

- <code title="get /v1/info">client.v1.info.<a href="./src/resources/v1/info/info.ts">list</a>() -> InfoListResponse</code>

### Icon

Methods:

- <code title="post /v1/info/icon">client.v1.info.icon.<a href="./src/resources/v1/info/icon.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v1/info/icon/{icon_size}">client.v1.info.icon.<a href="./src/resources/v1/info/icon.ts">retrieve</a>(iconSize) -> Response</code>

## Admin

Types:

- <code><a href="./src/resources/v1/admin/admin.ts">AdminUpdateResponse</a></code>

Methods:

- <code title="patch /v1/admin">client.v1.admin.<a href="./src/resources/v1/admin/admin.ts">update</a>({ ...params }) -> AdminUpdateResponse</code>

### Bans

Types:

- <code><a href="./src/resources/v1/admin/bans.ts">BanCreateResponse</a></code>
- <code><a href="./src/resources/v1/admin/bans.ts">BanDeleteResponse</a></code>

Methods:

- <code title="post /v1/admin/bans/{account_handle}">client.v1.admin.bans.<a href="./src/resources/v1/admin/bans.ts">create</a>(accountHandle) -> BanCreateResponse</code>
- <code title="delete /v1/admin/bans/{account_handle}">client.v1.admin.bans.<a href="./src/resources/v1/admin/bans.ts">delete</a>(accountHandle) -> BanDeleteResponse</code>

## Auth

Types:

- <code><a href="./src/resources/v1/auth.ts">AuthListResponse</a></code>
- <code><a href="./src/resources/v1/auth.ts">AuthPasswordSignupResponse</a></code>

Methods:

- <code title="get /v1/auth">client.v1.auth.<a href="./src/resources/v1/auth.ts">list</a>() -> AuthListResponse</code>
- <code title="get /v1/auth/logout">client.v1.auth.<a href="./src/resources/v1/auth.ts">logout</a>() -> void</code>
- <code title="post /v1/auth/password/signup">client.v1.auth.<a href="./src/resources/v1/auth.ts">passwordSignup</a>({ ...params }) -> AuthPasswordSignupResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/v1/accounts/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/accounts/accounts.ts">AccountUpdateResponse</a></code>

Methods:

- <code title="get /v1/accounts">client.v1.accounts.<a href="./src/resources/v1/accounts/accounts.ts">retrieve</a>() -> AccountRetrieveResponse</code>
- <code title="patch /v1/accounts">client.v1.accounts.<a href="./src/resources/v1/accounts/accounts.ts">update</a>({ ...params }) -> AccountUpdateResponse</code>

### AuthMethods

Types:

- <code><a href="./src/resources/v1/accounts/auth-methods.ts">AuthMethodListResponse</a></code>
- <code><a href="./src/resources/v1/accounts/auth-methods.ts">AuthMethodDeleteResponse</a></code>

Methods:

- <code title="get /v1/accounts/self/auth-methods">client.v1.accounts.authMethods.<a href="./src/resources/v1/accounts/auth-methods.ts">list</a>() -> AuthMethodListResponse</code>
- <code title="delete /v1/accounts/self/auth-methods/{auth_method_id}">client.v1.accounts.authMethods.<a href="./src/resources/v1/accounts/auth-methods.ts">delete</a>(authMethodId) -> AuthMethodDeleteResponse</code>

### Avatar

Methods:

- <code title="post /v1/accounts/self/avatar">client.v1.accounts.avatar.<a href="./src/resources/v1/accounts/avatar.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v1/accounts/{account_handle}/avatar">client.v1.accounts.avatar.<a href="./src/resources/v1/accounts/avatar.ts">retrieve</a>(accountHandle) -> Response</code>

## Profiles

Types:

- <code><a href="./src/resources/v1/profiles.ts">ProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/profiles.ts">ProfileListResponse</a></code>

Methods:

- <code title="get /v1/profiles/{account_handle}">client.v1.profiles.<a href="./src/resources/v1/profiles.ts">retrieve</a>(accountHandle) -> ProfileRetrieveResponse</code>
- <code title="get /v1/profiles">client.v1.profiles.<a href="./src/resources/v1/profiles.ts">list</a>({ ...params }) -> ProfileListResponse</code>

## Categories

Types:

- <code><a href="./src/resources/v1/categories.ts">CategoryCreateResponse</a></code>

Methods:

- <code title="post /v1/categories">client.v1.categories.<a href="./src/resources/v1/categories.ts">create</a>({ ...params }) -> CategoryCreateResponse</code>

# Auth

## Password

Types:

- <code><a href="./src/resources/auth/password.ts">PasswordCreateResponse</a></code>
- <code><a href="./src/resources/auth/password.ts">PasswordUpdateResponse</a></code>
- <code><a href="./src/resources/auth/password.ts">PasswordSigninResponse</a></code>

Methods:

- <code title="post /v1/auth/password">client.auth.password.<a href="./src/resources/auth/password.ts">create</a>({ ...params }) -> PasswordCreateResponse</code>
- <code title="patch /v1/auth/password">client.auth.password.<a href="./src/resources/auth/password.ts">update</a>({ ...params }) -> PasswordUpdateResponse</code>
- <code title="post /v1/auth/password/signin">client.auth.password.<a href="./src/resources/auth/password.ts">signin</a>({ ...params }) -> PasswordSigninResponse</code>

## OAuthCallback

Types:

- <code><a href="./src/resources/auth/oauth-callback.ts">OAuthCallbackCreateResponse</a></code>

Methods:

- <code title="post /v1/auth/oauth/{oauth_provider}/callback">client.auth.oauthCallback.<a href="./src/resources/auth/oauth-callback.ts">create</a>(oauthProvider, { ...params }) -> OAuthCallbackCreateResponse</code>

## Webauthn

### Make

Types:

- <code><a href="./src/resources/auth/webauthn/make.ts">MakeCreateResponse</a></code>
- <code><a href="./src/resources/auth/webauthn/make.ts">MakeRetrieveResponse</a></code>

Methods:

- <code title="post /v1/auth/webauthn/make">client.auth.webauthn.make.<a href="./src/resources/auth/webauthn/make.ts">create</a>({ ...params }) -> MakeCreateResponse</code>
- <code title="get /v1/auth/webauthn/make/{account_handle}">client.auth.webauthn.make.<a href="./src/resources/auth/webauthn/make.ts">retrieve</a>(accountHandle) -> MakeRetrieveResponse</code>

### Assert

Types:

- <code><a href="./src/resources/auth/webauthn/assert.ts">AssertCreateResponse</a></code>
- <code><a href="./src/resources/auth/webauthn/assert.ts">AssertRetrieveResponse</a></code>

Methods:

- <code title="post /v1/auth/webauthn/assert">client.auth.webauthn.assert.<a href="./src/resources/auth/webauthn/assert.ts">create</a>({ ...params }) -> AssertCreateResponse</code>
- <code title="get /v1/auth/webauthn/assert/{account_handle}">client.auth.webauthn.assert.<a href="./src/resources/auth/webauthn/assert.ts">retrieve</a>(accountHandle) -> AssertRetrieveResponse</code>

## Phone

Types:

- <code><a href="./src/resources/auth/phone.ts">PhoneCreateResponse</a></code>
- <code><a href="./src/resources/auth/phone.ts">PhoneUpdateResponse</a></code>

Methods:

- <code title="post /v1/auth/phone">client.auth.phone.<a href="./src/resources/auth/phone.ts">create</a>({ ...params }) -> PhoneCreateResponse</code>
- <code title="put /v1/auth/phone/{account_handle}">client.auth.phone.<a href="./src/resources/auth/phone.ts">update</a>(accountHandle, { ...params }) -> PhoneUpdateResponse</code>

# Categories

Types:

- <code><a href="./src/resources/categories.ts">CategoryUpdateResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/categories.ts">CategoryUpdateOrderResponse</a></code>

Methods:

- <code title="patch /v1/categories/{category_id}">client.categories.<a href="./src/resources/categories.ts">update</a>(categoryId, { ...params }) -> CategoryUpdateResponse</code>
- <code title="get /v1/categories">client.categories.<a href="./src/resources/categories.ts">list</a>() -> CategoryListResponse</code>
- <code title="patch /v1/categories">client.categories.<a href="./src/resources/categories.ts">updateOrder</a>([ ...body ]) -> CategoryUpdateOrderResponse</code>

# Threads

Types:

- <code><a href="./src/resources/threads/threads.ts">ThreadCreateResponse</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadListResponse</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadPublishChangesResponse</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadRetrieveInformationResponse</a></code>

Methods:

- <code title="post /v1/threads">client.threads.<a href="./src/resources/threads/threads.ts">create</a>({ ...params }) -> ThreadCreateResponse</code>
- <code title="get /v1/threads">client.threads.<a href="./src/resources/threads/threads.ts">list</a>({ ...params }) -> ThreadListResponse</code>
- <code title="delete /v1/threads/{thread_mark}">client.threads.<a href="./src/resources/threads/threads.ts">archive</a>(threadMark) -> void</code>
- <code title="patch /v1/threads/{thread_mark}">client.threads.<a href="./src/resources/threads/threads.ts">publishChanges</a>(threadMark, { ...params }) -> ThreadPublishChangesResponse</code>
- <code title="get /v1/threads/{thread_mark}">client.threads.<a href="./src/resources/threads/threads.ts">retrieveInformation</a>(threadMark) -> ThreadRetrieveInformationResponse</code>

## Posts

Types:

- <code><a href="./src/resources/threads/posts.ts">PostCreateResponse</a></code>

Methods:

- <code title="post /v1/threads/{thread_mark}/posts">client.threads.posts.<a href="./src/resources/threads/posts.ts">create</a>(threadMark, { ...params }) -> PostCreateResponse</code>

# Posts

Types:

- <code><a href="./src/resources/posts.ts">PostUpdateResponse</a></code>
- <code><a href="./src/resources/posts.ts">PostReactsResponse</a></code>
- <code><a href="./src/resources/posts.ts">PostSearchResponse</a></code>

Methods:

- <code title="patch /v1/posts/{post_id}">client.posts.<a href="./src/resources/posts.ts">update</a>(postId, { ...params }) -> PostUpdateResponse</code>
- <code title="delete /v1/posts/{post_id}">client.posts.<a href="./src/resources/posts.ts">archive</a>(postId) -> void</code>
- <code title="put /v1/posts/{post_id}/reacts">client.posts.<a href="./src/resources/posts.ts">reacts</a>(postId, { ...params }) -> PostReactsResponse</code>
- <code title="get /v1/posts/search">client.posts.<a href="./src/resources/posts.ts">search</a>({ ...params }) -> PostSearchResponse</code>

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
- <code title="get /v1/collections">client.collections.<a href="./src/resources/collections/collections.ts">list</a>() -> CollectionListResponse</code>

## Items

Types:

- <code><a href="./src/resources/collections/items.ts">ItemRemoveResponse</a></code>

Methods:

- <code title="delete /v1/collections/{collection_id}/items/{post_id}">client.collections.items.<a href="./src/resources/collections/items.ts">remove</a>(collectionId, postId) -> ItemRemoveResponse</code>

# Clusters

Types:

- <code><a href="./src/resources/clusters/clusters.ts">ClusterCreateResponse</a></code>
- <code><a href="./src/resources/clusters/clusters.ts">ClusterRetrieveResponse</a></code>
- <code><a href="./src/resources/clusters/clusters.ts">ClusterUpdateResponse</a></code>
- <code><a href="./src/resources/clusters/clusters.ts">ClusterListResponse</a></code>
- <code><a href="./src/resources/clusters/clusters.ts">ClusterRemoveResponse</a></code>
- <code><a href="./src/resources/clusters/clusters.ts">ClusterVisibilityUpdateResponse</a></code>

Methods:

- <code title="post /v1/clusters">client.clusters.<a href="./src/resources/clusters/clusters.ts">create</a>({ ...params }) -> ClusterCreateResponse</code>
- <code title="get /v1/clusters/{cluster_slug}">client.clusters.<a href="./src/resources/clusters/clusters.ts">retrieve</a>(clusterSlug) -> ClusterRetrieveResponse</code>
- <code title="patch /v1/clusters/{cluster_slug}">client.clusters.<a href="./src/resources/clusters/clusters.ts">update</a>(clusterSlug, { ...params }) -> ClusterUpdateResponse</code>
- <code title="get /v1/clusters">client.clusters.<a href="./src/resources/clusters/clusters.ts">list</a>({ ...params }) -> ClusterListResponse</code>
- <code title="delete /v1/clusters/{cluster_slug}">client.clusters.<a href="./src/resources/clusters/clusters.ts">remove</a>(clusterSlug, { ...params }) -> ClusterRemoveResponse</code>
- <code title="patch /v1/clusters/{cluster_slug}/visibility">client.clusters.<a href="./src/resources/clusters/clusters.ts">visibilityUpdate</a>(clusterSlug, { ...params }) -> ClusterVisibilityUpdateResponse</code>

## Assets

Types:

- <code><a href="./src/resources/clusters/assets.ts">AssetAddResponse</a></code>
- <code><a href="./src/resources/clusters/assets.ts">AssetRemoveResponse</a></code>

Methods:

- <code title="put /v1/clusters/{cluster_slug}/assets/{asset_id}">client.clusters.assets.<a href="./src/resources/clusters/assets.ts">add</a>(clusterSlug, assetId) -> AssetAddResponse</code>
- <code title="delete /v1/clusters/{cluster_slug}/assets/{asset_id}">client.clusters.assets.<a href="./src/resources/clusters/assets.ts">remove</a>(clusterSlug, assetId) -> AssetRemoveResponse</code>

## Clusters

Types:

- <code><a href="./src/resources/clusters/clusters.ts">ClusterRemoveResponse</a></code>
- <code><a href="./src/resources/clusters/clusters.ts">ClusterSetParentResponse</a></code>

Methods:

- <code title="delete /v1/clusters/{cluster_slug}/clusters/{cluster_slug_child}">client.clusters.clusters.<a href="./src/resources/clusters/clusters.ts">remove</a>(clusterSlug, clusterSlugChild) -> ClusterRemoveResponse</code>
- <code title="put /v1/clusters/{cluster_slug}/clusters/{cluster_slug_child}">client.clusters.clusters.<a href="./src/resources/clusters/clusters.ts">setParent</a>(clusterSlug, clusterSlugChild) -> ClusterSetParentResponse</code>

## Items

Types:

- <code><a href="./src/resources/clusters/items.ts">ItemAddResponse</a></code>
- <code><a href="./src/resources/clusters/items.ts">ItemRemoveResponse</a></code>

Methods:

- <code title="put /v1/clusters/{cluster_slug}/items/{item_slug}">client.clusters.items.<a href="./src/resources/clusters/items.ts">add</a>(clusterSlug, itemSlug) -> ItemAddResponse</code>
- <code title="delete /v1/clusters/{cluster_slug}/items/{item_slug}">client.clusters.items.<a href="./src/resources/clusters/items.ts">remove</a>(clusterSlug, itemSlug) -> ItemRemoveResponse</code>

# Items

Types:

- <code><a href="./src/resources/items/items.ts">ItemCreateResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemRetrieveResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemUpdateResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemListResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemVisibilityResponse</a></code>

Methods:

- <code title="post /v1/items">client.items.<a href="./src/resources/items/items.ts">create</a>({ ...params }) -> ItemCreateResponse</code>
- <code title="get /v1/items/{item_slug}">client.items.<a href="./src/resources/items/items.ts">retrieve</a>(itemSlug) -> ItemRetrieveResponse</code>
- <code title="patch /v1/items/{item_slug}">client.items.<a href="./src/resources/items/items.ts">update</a>(itemSlug, { ...params }) -> ItemUpdateResponse</code>
- <code title="get /v1/items">client.items.<a href="./src/resources/items/items.ts">list</a>({ ...params }) -> ItemListResponse</code>
- <code title="delete /v1/items/{item_slug}">client.items.<a href="./src/resources/items/items.ts">delete</a>(itemSlug) -> void</code>
- <code title="patch /v1/items/{item_slug}/visibility">client.items.<a href="./src/resources/items/items.ts">visibility</a>(itemSlug, { ...params }) -> ItemVisibilityResponse</code>

## Assets

Types:

- <code><a href="./src/resources/items/assets.ts">AssetAddResponse</a></code>
- <code><a href="./src/resources/items/assets.ts">AssetRemoveResponse</a></code>

Methods:

- <code title="put /v1/items/{item_slug}/assets/{asset_id}">client.items.assets.<a href="./src/resources/items/assets.ts">add</a>(itemSlug, assetId) -> AssetAddResponse</code>
- <code title="delete /v1/items/{item_slug}/assets/{asset_id}">client.items.assets.<a href="./src/resources/items/assets.ts">remove</a>(itemSlug, assetId) -> AssetRemoveResponse</code>

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
