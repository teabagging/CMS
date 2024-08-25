# Admin API

It’s possible to create and manage your content using the Ghost Admin API. Our content management interface, Ghost Admin, uses the admin API - which means that everything Ghost Admin can do is also possible with the API, and a whole lot more!

Secure authentication is available either as a User with role-based permissions, or as an integration with a single standard set of permissions designed to support common publishing workflows.

The API is RESTful with predictable resource URLs, standard HTTP verbs, response codes and authentication used throughout. Requests and responses are JSON-encoded with consistent patterns and inline relations and responses are customisable using powerful query parameters.

## API Clients

### JavaScript Client Library

We’ve developed an [API client for JavaScript](https://ghost.org/docs/admin-api/javascript/), that simplifies authenticating with the admin API, and makes reading and writing data a breeze. The client is designed for use with integrations, supporting token authentication and the endpoints available to integrations.

## Structure

### Base URL

`https://{admin_domain}/ghost/api/admin/`

All admin API requests start with this base URL. Your admin domain can be different to your main domain, and may include a subdirectory. Using the correct domain and protocol are critical to getting consistent behaviour, particularly when dealing with CORS in the browser. All Ghost(Pro) blogs have a `*.ghost.io` domain as their admin domain and require https.

### Accept-Version Header

`Accept-Version: v{major}.{minor}`

Use the `Accept-Version` header to indicate the minimum version of Ghost’s API to operate with. See [API Versioning](https://ghost.org/docs/faq/api-versioning/) for more details.

### JSON Format

The API uses a consistent JSON structure for all requests and responses:

```json
{
    "resource_type": [{
        ...
    }],
    "meta": {}
}
```

* `resource_type`: will always match the resource name in the URL. All resources are returned wrapped in an array, with the exception of `/site/` and `/settings/`.
* `meta`: contains [pagination](https://ghost.org/docs/content-api/#pagination) information for browse requests.

#### Composing requests

When composing JSON payloads to send to the API as POST or PUT requests, you must always use this same format, unless the documentation for an endpoint says otherwise.

Requests with JSON payloads require the `Content-Type: application/json` header. Most request libraries have JSON-specific handling that will do this for you.

### Pagination

All browse endpoints are paginated, returning 15 records by default. You can use the [page](https://ghost.org/docs/admin-api/#page) and [limit](https://ghost.org/docs/admin-api/#limit) parameters to move through the pages of records. The response object contains a `meta.pagination` key with information on the current location within the records:

```json
"meta": {
    "pagination": {
      "page": 1,
      "limit": 2,
      "pages": 1,
      "total": 1,
      "next": null,
      "prev": null
    }
  }
```

### Parameters

Query parameters provide fine-grained control over responses. All endpoints accept `include` and `fields`. Browse endpoints additionally accept `filter`, `limit`, `page` and `order`. Some endpoints have their own specific parameters.

The values provided as query parameters MUST be url encoded when used directly. The [client library](https://ghost.org/docs/admin-api/javascript/) will handle this for you.

### Filtering

See the [Content API](https://ghost.org/docs/content-api/#filter).

## Authentication

There are three methods for authenticating with the Admin API: [token authentication](https://ghost.org/docs/admin-api/#token-authentication), [user authentication](https://ghost.org/docs/admin-api/#user-authentication) and [staff access token authentication](https://ghost.org/docs/admin-api/#staff-access-token-authentication). Most applications integrating with the Ghost Admin API should use token authentication.

The JavaScript Admin API Client supports token authentication and staff access token authentication.

### Choosing an authentication method

**Token authentication** is intended for integrations that handle common workflows, such as publishing new content, or sharing content to other platforms.

Using tokens, you authenticate as an integration. Each integration can have associated API keys & webhooks and are able to perform API requests independently of users. Admin API keys are used to generate short-lived single-use JSON Web Tokens (JWTs), which are then used to authenticate a request. The API Key is secret, and therefore this authentication method is only suitable for secure server side environments.

**User authentication** is intended for fully-fledged clients where different users login and manage various resources as themselves.

Using an email address and password, you authenticate as a specific user, with their role-based permissions. Via the session API, credentials are swapped for a cookie-based session, which is then used to authenticate further API requests. Provided that passwords are entered securely, user-authentication is safe for use in the browser.

**Staff access token authentication** is intended for clients where different users login and manage various resources as themselves, without having to share their password.

Using a token found in a user’s settings page you authenticate as a specific user, with their role-based permissions. You can use this token the same way you would use an integration token.

### Permissions

Integrations have a restricted set of fixed permissions allowing access to certain endpoints e.g. `GET /users/` or `POST /posts/`. The full set of endpoints that integrations can access are those listed as [endpoints](https://ghost.org/docs/admin-api/#endpoints) on this page.

User permissions are dependent entirely on their role. You can find more details in the [team management guide](https://ghost.org/help/managing-your-team/). Authenticating as a user with the Owner or Admin role will give access to the full set of API endpoints. Many endpoints can be discovered by inspecting the requests made by Ghost Admin, the [endpoints](https://ghost.org/docs/admin-api/#endpoints) listed on this page are those stable enough to document.

### Token Authentication

Token authentication is a simple, secure authentication mechanism using JSON Web Tokens (JWTs) to authenticate as an integration. Each integration is issued with an admin API key, which is used to generate a JWT token and then provided to the API via the standard HTTP Authorization header.

The admin API key must be kept private, therefore token authentication is not suitable for browsers or other insecure environments, unlike the Content API key.

#### Key

Admin API keys can be obtained by creating a new `Custom Integration` under the Integrations screen in Ghost Admin. Keys for individual users can be found on their respective settings page.

![Get a Ghost Admin API key](https://ghost.org/images/docs/apikey_huc23d3a1fbe859434094a9db94f574d9a_265920_2920x0_resize_q100_h2_box_3.webp)Admin API keys are made up of an id and secret, separated by a colon. These values are used separately to get a signed JWT token, which is used in the Authorization header of the request:

```bash
curl -H "Authorization: Ghost $token" -H "Accept-Version: $version" https://{admin_domain}/ghost/api/admin/{resource}/
```

The Admin API JavaScript client handles all the technical details of generating a JWT from an admin API key, meaning you only have to provide your url, version and key to start making requests.

#### Token Generation

If you’re using a language other than JavaScript, or are not using our client library, you’ll need to generate the tokens yourself. It is not safe to swap keys for tokens in the browser, or in any other insecure environment.

There are a myriad of [libraries](https://jwt.io/#libraries) available for generating JWTs in different environments.

JSON Web Tokens are made up of a header, a payload and a secret. The values needed for the header and payload are:

```json
// Header
{
    "alg": "HS256",
    "kid": {id}, // ID from your API key
    "typ": "JWT"
}
```

```json
// Payload
{
    // Timestamps are seconds sine the unix epoch, not milliseconds
    "exp": {timestamp}, // Max 5 minutes after 'now'
    "iat": {timestamp}, // 'now' (max 5 minutes after 'exp')
    "aud": "/admin/"
}
```

The libraries on [https://jwt.io](https://jwt.io/) all work slightly differently, but all of them allow you to specify the above required values, including setting the signing algorithm to the required HS-256. Where possible, the API will provide specific error messages when required values are missing or incorrect.

Regardless of language, you’ll need to:

1. Split the API key by the `:` into an `id` and a `secret`
2. Decode the hexadecimal secret into the original binary byte array
3. Pass these values to your JWT library of choice, ensuring that the header and payload are correct.

#### Token Generation Examples

These examples show how to generate a valid JWT in various languages & JWT libraries. The bash example shows step-by-step how to create a token without using a library.

[X] Bash (cURL)|

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
```

|

```bash
#!/usr/bin/env bash

# Admin API key goes here
KEY="YOUR_ADMIN_API_KEY"

# Split the key into ID and SECRET
TMPIFS=$IFS
IFS=':' read ID SECRET <<< "$KEY"
IFS=$TMPIFS

# Prepare header and payload
NOW=$(date +'%s')
FIVE_MINS=$(($NOW + 300))
HEADER="{\"alg\": \"HS256\",\"typ\": \"JWT\", \"kid\": \"$ID\"}"
PAYLOAD="{\"iat\":$NOW,\"exp\":$FIVE_MINS,\"aud\": \"/admin/\"}"

# Helper function for performing base64 URL encoding
base64_url_encode() {
    declare input=${1:-$(</dev/stdin)}
    # Use `tr` to URL encode the output from base64.
    printf '%s' "${input}" | base64 | tr -d '=' | tr '+' '-' | tr '/' '_'
}

# Prepare the token body
header_base64=$(base64_url_encode "$HEADER")
payload_base64=$(base64_url_encode "$PAYLOAD")

header_payload="${header_base64}.${payload_base64}"

# Create the signature
signature=$(printf '%s' "${header_payload}" | openssl dgst -binary -sha256 -mac HMAC -macopt hexkey:$SECRET | base64_url_encode)

# Concat payload and signature into a valid JWT token

TOKEN="${header_payload}.${signature}"

# Make an authenticated request to create a post
curl -H "Authorization: Ghost $TOKEN" \
-H "Content-Type: application/json" \
-H "Accept-Version: v3.0" \
-d '{"posts":[{"title":"Hello world"}]}' \
"http://localhost:2368/ghost/api/admin/posts/"
```


|  |  |
| - | - |

[ ] JavaScript (Client)[ ] JavaScript[ ] Ruby[ ] Python

### User Authentication

User Authentication is an advanced, session-based authentication method that provides access to all API endpoints and actions according to the role of the user being authenticated.

Authenticating as a user requires an application to collect a user’s email and password, and swap the credentials for a cookie. The cookie is then used to maintain a session.

#### Creating a Session

The session and authentication endpoints have custom payloads, different to the standard JSON resource format.

```js
POST /admin/session/
```

##### Request

To create a new session, send a username and password to the sessions endpoint, in this format:

```json
// POST /admin/session/
{
    "username": "{email address}",
    "password": "{password}"
}
```

This request should also have an Origin header. See [CSRF protection](https://ghost.org/docs/admin-api/#csrf-protection) for details.

###### Response

`201 Created`: A successful session creation will return HTTP `201` response with an empty body and a `set-cookie` header, in the following format:

```text
set-cookie: ghost-admin-api-session={session token}; Path=/ghost; Expires=Mon, 26 Aug 2019 19:14:07 GMT; HttpOnly; SameSite=Lax
```

#### Making authenticated API requests

The provided session cookie should be provided with every subsequent API request:

* When making the request from a browser using the `fetch` API, pass `credentials: 'include'` to ensure cookies are sent.
* When using XHR you should set the `withCredentials` property of the xhr to `true`
* When using cURL you can use the `--cookie` and `--cookie-jar` options to store and send cookies from a text file.

##### CSRF Protection

Session-based requests must also include either an Origin (preferred) or a Referer header. The value of these headers is checked against the original session creation requests, in order to prevent Cross-Site Request Forgery (CSRF) in a browser environment. In a browser environment, these headers are handled automatically. For server-side or native apps, the Origin header should be sent with an identifying URL as the value.

#### Session-based Examples

```bash
# cURL

# Create a session, and store the cookie in ghost-cookie.txt
curl -c ghost-cookie.txt -d username=me@site.com -d password=secretpassword \
   -H "Origin: https://myappsite.com" \
   -H "Accept-Version: v3.0" \
   https://demo.ghost.io/ghost/api/admin/session/

# Use the session cookie to create a post
curl -b ghost-cookie.txt \
   -d '{"posts": [{"title": "Hello World"}]}' \
   -H "Content-Type: application/json" \
   -H "Accept-Version: v3.0" \
   -H "Origin: https://myappsite.com" \
   https://demo.ghost.io/ghost/api/admin/posts/
```

### Staff access token authentication

Staff access token authentication is a simple, secure authentication mechanism using JSON Web Tokens (JWTs) to authenticate as a user. Each user can create and refresh their own token, which is used to generate a JWT token and then provided to the API via the standard HTTP Authorization header. For more information on usage, please refer to the [token authentication section](https://ghost.org/docs/admin-api/#token-authentication).

The staff access token must be kept private, therefore staff access token authentication is not suitable for browsers or other insecure environments.

## Endpoints

These are the endpoints & methods currently available to integrations. More endpoints are available through user authentication. Each endpoint has a stability index, see [versioning](https://ghost.org/docs/faq/api-versioning) for more information.


| Resource                                                 | Methods                               | Stability    |
| -------------------------------------------------------- | ------------------------------------- | ------------ |
| [/posts/](https://ghost.org/docs/admin-api/#posts)       | Browse, Read, Edit, Add, Copy, Delete | Stable       |
| [/pages/](https://ghost.org/docs/admin-api/#pages)       | Browse, Read, Edit, Add, Copy, Delete | Stable       |
| /tags/                                                   | Browse, Read, Edit, Add, Delete       | Experimental |
| [/tiers/](https://ghost.org/docs/admin-api/#tiers)       | Browse, Read, Edit, Add               | Stable       |
| [/offers/](https://ghost.org/docs/admin-api/#offers)     | Browse, Read, Edit, Add               | Stable       |
| [/members/](https://ghost.org/docs/admin-api/#members)   | Browse, Read, Edit, Add               | Stable       |
| [/users/](https://ghost.org/docs/admin-api/#users)       | Browse, Read                          | Stable       |
| [/images/](https://ghost.org/docs/admin-api/#images)     | Upload                                | Stable       |
| [/themes/](https://ghost.org/docs/admin-api/#themes)     | Upload, Activate                      | Stable       |
| [/site/](https://ghost.org/docs/admin-api/#site)         | Read                                  | Stable       |
| [/webhooks/](https://ghost.org/docs/admin-api/#webhooks) | Edit, Add, Delete                     | Stable       |

## Posts

Posts are the [primary resource](https://ghost.org/docs/posts/) in a Ghost site, providing means for publishing, managing and displaying content.

At the heart of every post is a Lexical field, containing a standardised JSON-based representation of your content, which can be rendered in multiple formats.

```js
GET /admin/posts/
GET /admin/posts/{id}/
GET /admin/posts/slug/{slug}/
POST /admin/posts/
PUT /admin/posts/{id}/
DELETE /admin/posts/{id}/
```

### The post object

Whenever you fetch, create, or edit a post, the API will respond with an array of one or more post objects. These objects will include all related tags, authors, and author roles.

By default, the API expects and returns content in the **Lexical** format only. To include **HTML** in the response use the `formats` parameter:

```json
// GET /admin/posts/?formats=html,lexical
{
    "posts": [
        {
            "slug": "welcome-short",
            "id": "5ddc9141c35e7700383b2937",
            "uuid": "a5aa9bd8-ea31-415c-b452-3040dae1e730",
            "title": "Welcome",
            "lexical": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Hello, beautiful world! 👋\",\"type\":\"extended-text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
            "html": "<p>Hello, beautiful world! 👋</p>",
            "comment_id": "5ddc9141c35e7700383b2937",
            "feature_image": "https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png",
            "feature_image_alt": null,
            "feature_image_caption": null,
            "featured": false,
            "status": "published",
            "visibility": "public",
            "created_at": "2019-11-26T02:43:13.000Z",
            "updated_at": "2019-11-26T02:44:17.000Z",
            "published_at": "2019-11-26T02:44:17.000Z",
            "custom_excerpt": null,
            "codeinjection_head": null,
            "codeinjection_foot": null,
            "custom_template": null,
            "canonical_url": null,
            "tags": [
                {
                    "created_at": "2019-11-26T02:39:31.000Z",
                    "description": null,
                    "feature_image": null,
                    "id": "5ddc9063c35e7700383b27e0",
                    "meta_description": null,
                    "meta_title": null,
                    "name": "Getting Started",
                    "slug": "getting-started",
                    "updated_at": "2019-11-26T02:39:31.000Z",
                    "url": "https://docs.ghost.io/tag/getting-started/",
                    "visibility": "public"
                }
            ],
            "authors": [
                {
                    "id": "5951f5fca366002ebd5dbef7",
                    "name": "Ghost",
                    "slug": "ghost-user",
                    "email": "info@ghost.org",
                    "profile_image": "//www.gravatar.com/avatar/2fab21a4c4ed88e76add10650c73bae1?s=250&d=mm&r=x",
                    "cover_image": null,
                    "bio": null,
                    "website": "https://ghost.org",
                    "location": "The Internet",
                    "facebook": "ghost",
                    "twitter": "@ghost",
                    "accessibility": null,
                    "status": "locked",
                    "meta_title": null,
                    "meta_description": null,
                    "tour": null,
                    "last_seen": null,
                    "created_at": "2019-11-26T02:39:32.000Z",
                    "updated_at": "2019-11-26T04:30:57.000Z",
                    "roles": [
                        {
                            "id": "5ddc9063c35e7700383b27e3",
                            "name": "Author",
                            "description": "Authors",
                            "created_at": "2019-11-26T02:39:31.000Z",
                            "updated_at": "2019-11-26T02:39:31.000Z"
                        }
                    ],
                    "url": "https://docs.ghost.io/author/ghost-user/"
                }
            ],
            "primary_author": {
                "id": "5951f5fca366002ebd5dbef7",
                "name": "Ghost",
                "slug": "ghost-user",
                "email": "info@ghost.org",
                "profile_image": "//www.gravatar.com/avatar/2fab21a4c4ed88e76add10650c73bae1?s=250&d=mm&r=x",
                "cover_image": null,
                "bio": null,
                "website": "https://ghost.org",
                "location": "The Internet",
                "facebook": "ghost",
                "twitter": "@ghost",
                "accessibility": null,
                "status": "locked",
                "meta_title": null,
                "meta_description": null,
                "tour": null,
                "last_seen": null,
                "created_at": "2019-11-26T02:39:32.000Z",
                "updated_at": "2019-11-26T04:30:57.000Z",
                "roles": [
                    {
                        "id": "5ddc9063c35e7700383b27e3",
                        "name": "Author",
                        "description": "Authors",
                        "created_at": "2019-11-26T02:39:31.000Z",
                        "updated_at": "2019-11-26T02:39:31.000Z"
                    }
                ],
                "url": "https://docs.ghost.io/author/ghost-user/"
            },
            "primary_tag": {
                "id": "5ddc9063c35e7700383b27e0",
                "name": "Getting Started",
                "slug": "getting-started",
                "description": null,
                "feature_image": null,
                "visibility": "public",
                "meta_title": null,
                "meta_description": null,
                "created_at": "2019-11-26T02:39:31.000Z",
                "updated_at": "2019-11-26T02:39:31.000Z",
                "og_image": null,
                "og_title": null,
                "og_description": null,
                "twitter_image": null,
                "twitter_title": null,
                "twitter_description": null,
                "codeinjection_head": null,
                "codeinjection_foot": null,
                "canonical_url": null,
                "accent_color": null,
                "parent": null,
                "url": "https://docs.ghost.io/tag/getting-started/"
            },
            "url": "https://docs.ghost.io/welcome-short/",
            "excerpt": "👋 Welcome, it's great to have you here.",
            "og_image": null,
            "og_title": null,
            "og_description": null,
            "twitter_image": null,
            "twitter_title": null,
            "twitter_description": null,
            "meta_title": null,
            "meta_description": null,
            "email_only": false,
            "newsletter": {
                "id": "62750bff2b868a34f814af08",
                "name": "Weekly newsletter",
                "description": null,
                "slug": "default-newsletter",
                "sender_name": "Weekly newsletter",
                "sender_email": null,
                "sender_reply_to": "newsletter",
                "status": "active",
                "visibility": "members",
                "subscribe_on_signup": true,
                "sort_order": 0,
                "header_image": null,
                "show_header_icon": true,
                "show_header_title": true,
                "title_font_category": "sans_serif",
                "title_alignment": "center",
                "show_feature_image": true,
                "body_font_category": "sans_serif",
                "footer_content": null,
                "show_badge": true,
                "created_at": "2022-06-06T11:52:31.000Z",
                "updated_at": "2022-06-20T07:43:43.000Z",
                "show_header_name": true,
                "uuid": "59fbce16-c0bf-4583-9bb3-5cd52db43159"
            },
            "email": {
                "id": "628f3b462de0a130909d4a6a",
                "uuid": "955305de-d89e-4468-927f-2d2b8fec88e5",
                "status": "submitted",
                "recipient_filter": "status:-free",
                "error": null,
                "error_data": "[]",
                "email_count": 256,
                "delivered_count": 256,
                "opened_count": 59,
                "failed_count": 0,
                "subject": "Welcome",
                "from": "\"Weekly newsletter\"<noreply@example.com>",
                "reply_to": "noreply@example.com",
                "html": "...",
                "plaintext": "...",
                "track_opens": true,
                "submitted_at": "2022-05-26T08:33:10.000Z",
                "created_at": "2022-06-26T08:33:10.000Z",
                "updated_at": "2022-06-26T08:33:16.000Z"
            }
        }
    ]
}
```

#### Parameters

When retrieving posts from the admin API, it is possible to use the `include`, `formats`, `filter`, `limit`, `page` and `order` parameters as documented for the [Content API](https://ghost.org/docs/content-api/#parameters). Some defaults are different between the two APIs, however the behaviour and availability of the parameters remains the same.

### Creating a Post

```js
POST /admin/posts/
```

Required fields: `title`

Create draft and published posts with the add posts endpoint. All fields except `title` can be empty or have a default that is applied automatically. Below is a minimal example for creating a published post with content:

```json
// POST /admin/posts/
{
    "posts": [
        {
            "title": "My test post",
            "lexical": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Hello, beautiful world! 👋\",\"type\":\"extended-text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
            "status": "published"
        }
    ]
}
```

A post must always have [at least one author](https://ghost.org/docs/admin-api/#tags-and-authors), and this will default to the staff user with the owner role when [token authentication](https://ghost.org/docs/admin-api/#token-authentication) is used.

#### Source HTML

The post creation endpoint is also able to convert HTML into Lexical. The conversion generates the best available Lexical representation, meaning this operation is lossy and the HTML rendered by Ghost may be different from the source HTML. For the best results ensure your HTML is well-formed, e.g. uses block and inline elements correctly.

To use HTML as the source for your content instead of Lexical, use the `source` parameter:

```json
// POST /admin/posts/?source=html
{
    "posts": [
        {
            "title": "My test post",
            "html": "<p>My post content. Work in progress...</p>",
            "status": "published"
        }
    ]
}
```

For lossless HTML conversion, you can wrap your HTML in a single Lexical card:

```html
<!--kg-card-begin: html-->
<p>HTML goes here</p>
<!--kg-card-end: html-->
```

#### Tags and Authors

You can link tags and authors to any post you create in the same request body, using either short or long form to identify linked resources.

Short form uses a single string to identify a tag or author resource. Tags are identified by name and authors are identified by email address:

```json
// POST /admin/posts/
{
    "posts": [
        {
            "title": "My test post",
            "tags": ["Getting Started", "Tag Example"],
            "authors": ["example@ghost.org", "test@ghost.org"],
            "lexical": "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Hello, beautiful world! 👋\",\"type\":\"extended-text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
            "status": "published"
        }
    ]
}
```

Long form requires an object with at least one identifying key-value pair:

```json
// POST /admin/posts/
{
    "posts": [
        {
            "title": "My test post",
            "tags": [
                { "name": "my tag", "description": "a very useful tag" },
                { "name": "#hidden" }
            ],
            "authors": [
                { "id": "5c739b7c8a59a6c8ddc164a1" },
                { "id": "5c739b7c8a59a6c8ddc162c5" },
                { "id": "5c739b7c8a59a6c8ddc167d9" }
            ]
        }
    ]
}
```

Tags that cannot be matched are automatically created. If no author can be matched, Ghost will fallback to using the staff user with the owner role.

### Copying a Post

```js
POST /admin/posts/{id}/copy
```

Required fields: `id`

Duplicates an existing post, appending “Copy” to the title and slug. The API returns the duplicated post, which is created as a draft:

```js
{
    "posts": [
        {
            "id": "6464d266ada9197e4d34db76",
            "title": "My test post (Copy)",
            "slug": "my-test-post-copy"
            ...
        }
    ]
}
```

### Updating a Post

```js
PUT /admin/posts/{id}/
```

Required fields: `updated_at`

All writable fields of a post can be updated via the edit endpoint. The `updated_at` field is required as it is used to handle collision detection and ensure you’re not overwriting more recent updates. It is recommended to perform a GET request to fetch the latest data before updating a post. Below is a minimal example for updating the title of a post:

```json
// PUT admin/posts/5b7ada404f87d200b5b1f9c8/
{
    "posts": [
        {
            "title": "My new title",
            "updated_at": "2022-06-05T20:52:37.000Z"
        }
    ]
}
```

#### Tags and Authors

Tag and author relations will be replaced, not merged. Again, the recommendation is to always fetch the latest version of a post, make any amends to this such as adding another tag to the tags array, and then send the amended data via the edit endpoint.

### Publishing and scheduling posts

Posts can be published or scheduled by updating the `status`.

#### Publishing a Post

Publish a draft post by updating its status to `published`:

```json
// PUT admin/posts/5b7ada404f87d200b5b1f9c8/
{
    "posts": [
        {
            "updated_at": "2022-06-05T20:52:37.000Z",
            "status": "published"
        }
    ]
}
```

#### Scheduling a Post

A post can be scheduled by updating or setting the `status` to `scheduled` and setting `published_at` to a datetime in the future:

```json
// PUT admin/posts/5b7ada404f87d200b5b1f9c8/
{
    "posts": [
        {
            "updated_at": "2022-06-05T20:52:37.000Z",
            "status": "scheduled",
            "published_at": "2023-06-10T11:00:00.000Z"
        }
    ]
}
```

At the time specified in `published_at`, the post will be published, email newsletters will be sent (if applicable), and the status of the post will change to `published`. For email-only posts, the status will change to `sent`.

#### Sending a Post via email

To send a post by email, the `newsletter` query parameter must be passed when publishing or scheduling the post, containing the newsletter’s `slug`.

Optionally, a filter can be provided to send the email to a subset of members subscribed to the newsletter by passing the `email_segment` query parameter containing a valid NQL filter for members. Commonly used values are `status:free` (all free members), `status:-free` (all paid members) and `all`. If `email_segment` is not specified, the default is `all` (no additional filtering applied).

Posts are sent by email if and only if an active newsletter is provided.

```json
// PUT admin/posts/5b7ada404f87d200b5b1f9c8/?newsletter=weekly-newsletter&email_segment=status%3Afree
{
    "posts": [
        {
            "updated_at": "2022-06-05T20:52:37.000Z",
            "status": "published"
        }
    ]
}
```

When a post has been sent by email, the post object will contain the related `newsletter` and `email` objects. If the related email object has a `status` of `failed`, sending can be retried by reverting the post’s status to `draft` and then republishing the post.

```json
{
    "posts": [
        {
            "id": "5ddc9141c35e7700383b2937",
            ...
            "email": {
                "id": "628f3b462de0a130909d4a6a",
                "uuid": "955305de-d89e-4468-927f-2d2b8fec88e5",
                "status": "failed",
                "recipient_filter": "all",
                "error": "Email service is currently unavailable - please try again",
                "error_data": "[{...}]",
                "email_count": 2,
                "delivered_count": 0,
                "opened_count": 0,
                "failed_count": 0,
                "subject": "Welcome",
                "from": "\"Weekly newsletter\"<noreply@example.com>",
                "reply_to": "noreply@example.com",
                "html": "...",
                "plaintext": "...",
                "track_opens": true,
                "submitted_at": "2022-05-26T08:33:10.000Z",
                "created_at": "2022-06-26T08:33:10.000Z",
                "updated_at": "2022-06-26T08:33:16.000Z"
            },
            ...
        }
    ]
}
```

#### Email only posts

To send a post as an email without publishing it on the site, the `email_only` property must be set to `true` when publishing or scheduling the post in combination with the `newsletter` parameter:

```json
// PUT admin/posts/5b7ada404f87d200b5b1f9c8/?newsletter=weekly-newsletter
{
    "posts": [
        {
            "updated_at": "2022-06-05T20:52:37.000Z",
            "status": "published",
            "email_only": true
        }
    ]
}
```

When an email-only post has been sent, the post will have a `status` of `sent`.

### Deleting a Post

```js
DELETE /admin/posts/{id}/
```

Delete requests have no payload in the request or response. Successful deletes will return an empty 204 response.

## Pages

Pages are [static resources](https://ghost.org/docs/pages/) that are not included in channels or collections on the Ghost front-end. They are identical to posts in terms of request and response structure when working with the APIs.

```js
GET /admin/pages/
GET /admin/pages/{id}/
GET /admin/pages/slug/{slug}/
POST /admin/pages/
POST /admin/pages/{id}/copy
PUT /admin/pages/{id}/
DELETE /admin/pages/{id}/
```

## Tiers

Tiers allow publishers to create multiple options for an audience to become paid subscribers. Each tier can have its own price points, benefits, and content access levels. Ghost connects tiers directly to the publication’s Stripe account.

### The tier object

Whenever you fetch, create, or edit a tier, the API responds with an array of one or more tier objects.

By default, the API doesn’t return monthly/yearly prices or benefits. To include them in the response, use the `include` parameter with any or all of the following values: `monthly_price`, `yearly_price`, `benefits`.

```json
// GET admin/tiers/?include=monthly_price,yearly_price,benefits
{
    "tiers": [
        {
            "id": "622727ad96a190e914ab6664",
            "name": "Free",
            "description": null,
            "slug": "free",
            "active": true,
            "type": "free",
            "welcome_page_url": null,
            "created_at": "2022-03-08T09:53:49.000Z",
            "updated_at": "2022-03-08T10:43:15.000Z",
            "stripe_prices": null,
            "monthly_price": null,
            "yearly_price": null,
            "benefits": [],
            "visibility": "public"
        },
        {
            "id": "622727ad96a190e914ab6665",
            "name": "Bronze",
            "description": "Access to basic features",
            "slug": "default-product",
            "active": true,
            "type": "paid",
            "welcome_page_url": null,
            "created_at": "2022-03-08T09:53:49.000Z",
            "updated_at": "2022-03-14T19:22:46.000Z",
            "stripe_prices": null,
            "monthly_price": 500,
            "yearly_price": 5000,
            "currency": "usd",
            "benefits": [
                "Free daily newsletter",
                "3 posts a week"
            ],
            "visibility": "public"
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "limit": 15,
            "pages": 1,
            "total": 2,
            "next": null,
            "prev": null
        }
    }
}
```

### Parameters

When retrieving tiers from the Admin API, it’s possible to use the `include` and `filter` parameters.

Available **include** values:

* `monthly_price` - include monthly price data
* `yearly_price` - include yearly price data
* `benefits` - include benefits data

Available **filter** values:

* `type:free|paid` - for filtering paid or free tiers
* `visibility:public|none` - for filtering tiers based on their visibility
* `active:true|false` - for filtering active or archived tiers

For browse requests, it’s also possible to use `limit`, `page`, and `order` parameters as documented in the [Content API](https://ghost.org/docs/content-api/#parameters).

By default, tiers are ordered by ascending monthly price amounts.

### Creating a Tier

```js
POST /admin/tiers/
```

Required fields: `name`

Create public and hidden tiers by using this endpoint. New tiers are always set as `active` when created.

The example below creates a paid Tier with all properties including custom monthly/yearly prices, description, benefits, and welcome page.

```json
// POST /admin/tiers/
{
    "tiers": [
        {
            "name": "Platinum",
            "description": "Access to everything",
            "welcome_page_url": "/welcome-to-platinum",
            "visibility": "public",
            "monthly_price": 1000,
            "yearly_price": 10000,
            "currency": "usd",
            "benefits": [
                "Benefit 1",
                "Benefit 2"
            ]
        }
    ]
}
```

### Updating a Tier

```js
PUT /admin/tiers/{id}/
```

Required fields: `name`

Update all writable fields of a tier by using the edit endpoint. For example, rename a tier or set it as archived with this endpoint.

Below is an example for updating the name and description of a tier:

```json
// PUT /admin/tiers/{id}/
{
    "tiers": [
        {
            "name": "Silver",
            "description": "silver"
        }
    ]
}
```

## Newsletters

Newsletters allow finer control over distribution of site content via email, allowing members to opt-in or opt-out of different categories of content. By default each site has one newsletter.

### The newsletter object

```json
// GET admin/newsletters/?limit=all
{
    "newsletters": [
        {
            "id": "62750bff2b868a34f814af08",
            "name": "My Ghost site",
            "description": null,
            "slug": "default-newsletter",
            "sender_name": null,
            "sender_email": null,
            "sender_reply_to": "newsletter",
            "status": "active",
            "visibility": "members",
            "subscribe_on_signup": true,
            "sort_order": 0,
            "header_image": null,
            "show_header_icon": true,
            "show_header_title": true,
            "title_font_category": "sans_serif",
            "title_alignment": "center",
            "show_feature_image": true,
            "body_font_category": "sans_serif",
            "footer_content": null,
            "show_badge": true,
            "created_at": "2022-05-06T11:52:31.000Z",
            "updated_at": "2022-05-20T07:43:43.000Z",
            "show_header_name": true,
            "uuid": "59fbce16-c0bf-4583-9bb3-5cd52db43159"
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "limit": "all",
            "pages": 1,
            "total": 1,
            "next": null,
            "prev": null
        }
    }
}
```


| Key                       | Description                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **name**                  | Public name for the newsletter                                                                                                                      |
| **description**           | (nullable) Public description of the newsletter                                                                                                     |
| **status**                | `active` or `archived` - denotes if the newsletter is active or archived                                                                            |
| **slug**                  | The reference to this newsletter that can be used in the`newsletter` option when sending a post via email                                           |
| **sender\_name**          | (nullable) The sender name of the emails                                                                                                            |
| **sender\_email**         | (nullable) The email from which to send emails. Requires validation.                                                                                |
| **sender\_reply\_to**     | The reply-to email address for sent emails. Can be either`newsletter` (= use `sender_email`) or `support` (use support email from Portal settings). |
| **subscribe\_on\_signup** | `true`/`false`. Whether members should automatically subscribe to this newsletter on signup                                                         |
| **header\_image**         | (nullable) Path to an image to show at the top of emails. Recommended size 1200x600                                                                 |
| **show\_header\_icon**    | `true`/`false`. Show the site icon in emails                                                                                                        |
| **show\_header\_title**   | `true`/`false`. Show the site name in emails                                                                                                        |
| **show\_header\_name**    | `true`/`false`. Show the newsletter name in emails                                                                                                  |
| **title\_font\_category** | Title font style. Either`serif` or `sans_serif`                                                                                                     |
| **show\_feature\_image**  | `true`/`false`. Show the post's feature image in emails                                                                                             |
| **body\_font\_category**  | Body font style. Either`serif` or `sans_serif`                                                                                                      |
| **footer\_content**       | (nullable) Extra information or legal text to show in the footer of emails. Should contain valid HTML.                                              |
| **show\_badge**           | `true`/`false`. Show you’re a part of the indie publishing movement by adding a small Ghost badge in the footer                                    |

### Creating a Newsletter

```js
POST /admin/newsletters/
```

Required fields: `name`

Options: `opt_in_existing`

When `opt_in_existing` is set to `true`, existing members with a subscription to one or more active newsletters are also subscribed to this newsletter. The response metadata will include the number of members opted-in.

Below is an example for creating a newsletter with all available properties:

```json
// POST /admin/newsletters/?opt_in_existing=true
{
    "newsletters": [
        {
            "name": "My newly created newsletter",
            "description": "This is a newsletter description",
            "sender_reply_to": "newsletter",
            "status": "active",
            "subscribe_on_signup": true,
            "show_header_icon": true,
            "show_header_title": true,
            "show_header_name": true,
            "title_font_category": "sans_serif",
            "title_alignment": "center",
            "show_feature_image": true,
            "body_font_category": "sans_serif",
            "show_badge": true
        }
    ]
}
```

### Updating a Newsletter

```json
PUT /admin/newsletters/629711f95d57e7229f16181c/
{
    "newsletters": [
        {
            "id": "62750bff2b868a34f814af08",
            "name": "My newly created newsletter",
            "description": "This is an edited newsletter description",
            "sender_name": "Daily Newsletter",
            "sender_email": null,
            "sender_reply_to": "newsletter",
            "status": "active",
            "subscribe_on_signup": true,
            "sort_order": 1,
            "header_image": null,
            "show_header_icon": true,
            "show_header_title": true,
            "title_font_category": "sans_serif",
            "title_alignment": "center",
            "show_feature_image": true,
            "body_font_category": "sans_serif",
            "footer_content": null,
            "show_badge": true,
            "show_header_name": true
        }
    ]
}
```

### Sender email validation

When updating the `sender_email` field, email verification is required before emails are sent from the new address. After updating the property, the `sent_email_verification` metadata property will be set, containing `sender_email`. The `sender_email` property will remain unchanged until the address has been verified by clicking the link that is sent to the address specified in `sender_email`.

```json
PUT /admin/newsletters/62750bff2b868a34f814af08/
{
    "newsletters": [
        {
            "sender_email": "daily-newsletter@domain.com"
        }
    ]
}

// Response
{
    "newsletters": [
        {
            "id": "62750bff2b868a34f814af08",
            "name": "My newly created newsletter",
            "description": "This is an edited newsletter description",
            "sender_name": "Daily Newsletter",
            "sender_email": null,
            "sender_reply_to": "newsletter",
            "status": "active",
            "subscribe_on_signup": true,
            "sort_order": 1,
            "header_image": null,
            "show_header_icon": true,
            "show_header_title": true,
            "title_font_category": "sans_serif",
            "title_alignment": "center",
            "show_feature_image": true,
            "body_font_category": "sans_serif",
            "footer_content": null,
            "show_badge": true,
            "show_header_name": true
        }
    ],
    "meta": {
        "sent_email_verification": [
            "sender_email"
        ]
    }
}
```

## Offers

Use offers to create a discount or special price for members signing up on a tier.

### The offer object

When you fetch, create, or edit an offer, the API responds with an array of one or more offer objects. These objects include related `tier` data.

```json
// GET /admin/offers/
{
    "offers": [
        {
            "id": "6230dd69e8bc4d3097caefd3",
            "name": "Black friday",
            "code": "black-friday",
            "display_title": "Black friday sale!",
            "display_description": "10% off our yearly price",
            "type": "percent",
            "cadence": "year",
            "amount": 10,
            "duration": "once",
            "duration_in_months": null,
            "currency_restriction": false,
            "currency": null,
            "status": "active",
            "redemption_count": 0,
            "tier": {
                "id": "62307cc71b4376a976734038",
                "name": "Platinum"
            }
        }
    ]
}
```


| Key                       | Description                                                                                                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **display\_title**        | Name displayed in the offer window                                                                                                                                         |
| **display\_description**  | Text displayed in the offer window                                                                                                                                         |
| **name**                  | Internal name for an offer, must be unique                                                                                                                                 |
| **code**                  | Shortcode for the offer, for example: https://yoursite.com/black-friday                                                                                                    |
| **status**                | `active` or `archived` - denotes if the offer is active or archived                                                                                                        |
| **type**                  | `percent` or `fixed` - whether the amount off is a percentage or fixed                                                                                                     |
| **amount**                | Offer discount amount, as a percentage or fixed value as set in`type`. *Amount is always denoted by the smallest currency unit (e.g., 100 cents instead of \$1.00 in USD)* |
| **currency**              | `fixed` type offers only - specifies tier's currency as three letter ISO currency code                                                                                     |
| **currency\_restriction** | Denotes whether the offer\`currency\` is restricted. If so, changing the currency invalidates the offer                                                                    |
| **duration**              | `once`/`forever`/`repeating`. `repeating` duration is only available when `cadence` is `month`                                                                             |
| **duration\_in\_months**  | Number of months offer should be repeated when`duration` is `repeating`                                                                                                    |
| **redemption\_count**     | Number of times the offer has been redeemed                                                                                                                                |
| **tier**                  | Tier on which offer is applied                                                                                                                                             |
| **cadence**               | `month` or `year` - denotes if offer applies to tier's monthly or yearly price                                                                                             |

### Creating an Offer

```js
POST /admin/offers/
```

Required fields: `name`, `code`, `cadence`, `duration`, `amount`, `tier.id` , `type`

When offer `type` is `fixed`, `currency` is also required and must match the tier’s currency. New offers are created as active by default.

Below is an example for creating an offer with all properties including prices, description, and benefits:

```json
// POST /admin/offers/
{
    "offers": [
        {
            "name": "Black Friday",
            "code": "black-friday",
            "display_title": "Black Friday Sale!",
            "display_description": "10% off on yearly plan",
            "type": "percent",
            "cadence": "year",
            "amount": 12,
            "duration": "once",
            "duration_in_months": null,
            "currency_restriction": false,
            "currency": null,
            "status": "active",
            "redemption_count": 0,
            "tier": {
                "id": "62307cc71b4376a976734038",
                "name": "Gold"
            }
        }
    ]
}
```

### Updating an Offer

For existing offers, only `name` , `code`, `display_title` and `display_description` are editable.

The example below updates `display title` and `code`.

```json
// PUT /admin/offers/{id}/
{
    "offers": [
        {
            "display_title": "Black Friday 2022",
            "code": "black-friday-2022"
        }
    ]
}
```

## Members

The members resource provides an endpoint for fetching, creating, and updating member data.

Fetch members (by default, the 15 newest members are returned):

```json
// GET /admin/members/?include=newsletters%2Clabels
{
    "members": [
        {
            "id": "623199bfe8bc4d3097caefe0",
            "uuid": "4fa3e4df-85d5-44bd-b0bf-d504bbe22060",
            "email": "jamie@example.com",
            "name": "Jamie",
            "note": null,
            "geolocation": null,
            "created_at": "2022-03-16T08:03:11.000Z",
            "updated_at": "2022-03-16T08:03:40.000Z",
            "labels": [
                {
                    "id": "623199dce8bc4d3097caefe9",
                    "name": "Label 1",
                    "slug": "label-1",
                    "created_at": "2022-03-16T08:03:40.000Z",
                    "updated_at": "2022-03-16T08:03:40.000Z"
                }
            ],
            "subscriptions": [],
            "avatar_image": "https://gravatar.com/avatar/76a4c5450dbb6fde8a293a811622aa6f?s=250&d=blank",
            "email_count": 0,
            "email_opened_count": 0,
            "email_open_rate": null,
            "status": "free",
            "last_seen_at": "2022-05-20T16:29:29.000Z",
            "newsletters": [
                {
                    "id": "62750bff2b868a34f814af08",
                    "name": "My Ghost Site",
                    "description": null,
                    "status": "active"
                }
            ]
        },
        ...
    ]
}
```

### Subscription object

A paid member includes a subscription object that provides subscription details.

```json
// Subscription object
[
    {
        "id": "sub_1KlTkYSHlkrEJE2dGbzcgc61",
        "customer": {
            "id": "cus_LSOXHFwQB7ql18",
            "name": "Jamie",
            "email": "jamie@ghost.org"
        },
        "status": "active",
        "start_date": "2022-04-06T07:57:58.000Z",
        "default_payment_card_last4": "4242",
        "cancel_at_period_end": false,
        "cancellation_reason": null,
        "current_period_end": "2023-04-06T07:57:58.000Z",
        "price": {
            "id": "price_1Kg0ymSHlkrEJE2dflUN66EW",
            "price_id": "6239692c664a9e6f5e5e840a",
            "nickname": "Yearly",
            "amount": 100000,
            "interval": "year",
            "type": "recurring",
            "currency": "USD"
        },
        "tier": {...},
        "offer": null
    }
]
```


| Key                               | Description                                                     |
| --------------------------------- | --------------------------------------------------------------- |
| **customer**                      | Stripe customer attached to the subscription                    |
| **start\_date**                   | Subscription start date                                         |
| **default\_payment\_card\_last4** | Last 4 digits of the card                                       |
| **cancel\_at\_period\_end**       | If the subscription should be canceled or renewed at period end |
| **cancellation\_reason**          | Reason for subscription cancellation                            |
| **current\_period\_end**          | Subscription end date                                           |
| **price**                         | Price information for subscription including Stripe price ID    |
| **tier**                          | Member subscription tier                                        |
| **offer**                         | Offer details for a subscription                                |

### Creating a member

At minimum, an email is required to create a new, free member.

```json
// POST /admin/members/
{
    "members": [
        {
            "email": "jamie@ghost.org",
        }
    ]
}

// Response
{
    "members": [
        {
            "id": "624d445026833200a5801bce",
            "uuid": "83525d87-ac70-40f5-b13c-f9b9753dcbe8",
            "email": "jamie@ghost.org",
            "name": null,
            "note": null,
            "geolocation": null,
            "created_at": "2022-04-06T07:42:08.000Z",
            "updated_at": "2022-04-06T07:42:08.000Z",
            "labels": [],
            "subscriptions": [],
            "avatar_image": "https://gravatar.com/avatar/7d8efd2c2a781111599a8cae293cf704?s=250&d=blank",
            "email_count": 0,
            "email_opened_count": 0,
            "email_open_rate": null,
            "status": "free",
            "last_seen_at": null,
            "tiers": [],
            "newsletters": []
        }
    ]
}
```

Additional writable member fields include:


| Key             | Description                                      |
| --------------- | ------------------------------------------------ |
| **name**        | member name                                      |
| **note**        | notes on the member                              |
| **labels**      | member labels                                    |
| **newsletters** | List of newsletters subscribed to by this member |

Create a new, free member with name, newsletter, and label:

```json
// POST /admin/members/
{
    "members": [
        {
            "email": "jamie@ghost.org",
            "name": "Jamie",
            "labels": [
                {
                    "name": "VIP",
                    "slug": "vip"
                }
            ],
            "newsletters": [
                {
                    "id": "624d445026833200a5801bce"
                }
            ]
        }
    ]
}
```

### Updating a member

```js
PUT /admin/members/{id}/
```

All writable fields of a member can be updated. It’s recommended to perform a `GET` request to fetch the latest data before updating a member.

Below is a minimal example for updating the name of a member:

```json
// PUT /admin/members/{id}/
{
    "members": [
        {
            "name": "Jamie II"
        }
    ]
}
```

## Users

The users resource provides an endpoint for fetching and editing staff user data.

Fetch users (by default, the 15 newest staff users are returned):

```json
// GET /admin/users/?include=count.posts%2Cpermissions%2Croles%2Croles.permissions
{
    "id": "1",
    "name": "Jamie Larson",
    "slug": "jamie",
    "email": "jamie@example.com",
    "profile_image": "http://localhost:2368/content/images/1970/01/jamie-profile.jpg",
    "cover_image": null,
    "bio": null,
    "website": null,
    "location": null,
    "facebook": null,
    "twitter": null,
    "accessibility": null,
    "status": "active",
    "meta_title": null,
    "meta_description": null,
    "tour": null,
    "last_seen": "1970-01-01T00:00:00.000Z",
    "comment_notifications": true,
    "free_member_signup_notification": true,
    "paid_subscription_started_notification": true,
    "paid_subscription_canceled_notification": false,
    "mention_notifications": true,
    "milestone_notifications": true,
    "created_at": "1970-01-01T00:00:00.000Z",
    "updated_at": "1970-01-01T00:00:00.000Z",
    "permissions": [],
    "roles": [{
        "id": "64498c2a7c11e805e0b4ad4f",
        "name": "Owner",
        "description": "Site Owner",
        "created_at": "1970-01-01T00:00:00.000Z",
        "updated_at": "1970-01-01T00:00:00.000Z",
        "permissions": []
    }],
    "count": {
        "posts": 1
    },
    "url": "http://localhost:2368/author/jamie/"
    },
        ...
    ]
}
```

Note that the Owner user does not have permissions assigned to it, or to the Owner role. This is because the Owner user has *all* permissions implicitly.

### Roles

The roles resource provides an endpoint for fetching role data.

```json
// GET /admin/roles/
{
    "roles": [
        {
            "id": "64498c2a7c11e805e0b4ad4b",
            "name": "Administrator",
            "description": "Administrators",
            "created_at": "1920-01-01T00:00:00.000Z",
            "updated_at": "1920-01-01T00:00:00.000Z"
        },
        ...
    ]
}
```

### Invites

The invites resource provides an endpoint for inviting staff users to the Ghost instance. To invite a user you must specify the ID of the role they should receive (fetch roles, detailed above, to find the role IDs for your site), and the email address that the invite link should be sent to.

Create a staff user invite:

```json
// POST /admin/invites/
{
    "invites": [
        {
            "role_id": "64498c2a7c11e805e0b4ad4b",
            "email": "person@example.com"
        },
        ...
    ]
}
```

### Updating a user

```js
PUT /admin/users/{id}/
```

All writable fields of a user can be updated. It’s recommended to perform a `GET` request to fetch the latest data before updating a user.

Below is a minimal example for updating the name of a user:

```json
// PUT /admin/users/{id}/
{
    "users": [
        {
            "name": "Cameron Larson"
        }
    ]
}
```

### Deleting a user

```js
DELETE /admin/users/{id}/
```

This will delete the user. Note: You cannot delete the Owner user.

## Images

Sending images to Ghost via the API allows you to upload images one at a time, and store them with a [storage adapter](https://ghost.org/integrations/?tag=storage). The default adapter stores files locally in /content/images/ without making any modifications, except for sanitising the filename.

```js
POST /admin/images/upload/
```

### The image object

Images can be uploaded to, and fetched from storage. When an image is uploaded, the response is an image object that contains the new URL for the image - the location from which the image can be fetched.

`url`: *URI* The newly created URL for the image.

`ref`: *String (optional)* The reference for the image, if one was provided with the upload.

```json
// POST /admin/images/upload/

{
    "images": [
        {
            "url": "https://demo.ghost.io/content/images/2019/02/ghost-logo.png",
            "ref": "ghost-logo.png"
        }
    ]
}
```

### Uploading an Image

To upload an image, send a multipart formdata request by providing the `'Content-Type': 'multipart/form-data;'` header, along with the following fields encoded as [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData):

`file`: *[Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [File](https://developer.mozilla.org/en-US/docs/Web/API/File)* The image data that you want to upload.

`purpose`: *String (default: `image`)* Intended use for the image, changes the validations performed. Can be one of `image` , `profile_image` or `icon`. The supported formats for `image`, `icon`, and `profile_image` are WEBP, JPEG, GIF, PNG and SVG. `profile_image` must be square. `icon` must also be square, and additionally supports the ICO format.

`ref`: *String (optional)* A reference or identifier for the image, e.g. the original filename and path. Will be returned as-is in the API response, making it useful for finding & replacing local image paths after uploads.

```bash
curl -X POST -F 'file=@/path/to/images/my-image.jpg' -F 'ref=path/to/images/my-image.jpg' -H "Authorization: 'Ghost $token'" -H "Accept-Version: $version" https://{admin_domain}/ghost/api/admin/images/upload/
```

## Themes

Themes can be uploaded from a local ZIP archive and activated.

```js
POST /admin/themes/upload;
PUT /admin/themes/{ name }/activate;
```

### The theme object

When a theme is uploaded or activated, the response is a `themes` array containing one theme object with metadata about the theme, as well as its status (active or not).

`name`: *String* The name of the theme. This is the value that is used to activate the theme.

`package`: *Object* The contents of the `package.json` file is exposed in the API as it contains useful theme metadata.

`active`: *Boolean* The status of the theme showing if the theme is currently used or not.

`templates`: *Array* The list of templates defined by the theme.

```json
// POST /admin/images/upload/
{
    themes: [{
      name: "Alto-master",
      package: {...},
      active: false,
      templates: [{
        filename: "custom-full-feature-image",
        name: "Full Feature Image",
        for: ["page", "post"],
        slug: null
      }, ...]
    }]
}
```

### Uploading a theme

To upload a theme ZIP archive, send a multipart formdata request by providing the `'Content-Type': 'multipart/form-data;'` header, along with the following field encoded as [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData):

`file`: *[Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [File](https://developer.mozilla.org/en-US/docs/Web/API/File)* The theme archive that you want to upload.

```bash
curl -X POST -F 'file=@/path/to/themes/my-theme.zip' -H "Authorization: Ghost $token" -H "Accept-Version: $version" https://{admin_domain}/ghost/api/admin/themes/upload
```

## Site

Site is a special unauthenticated, read-only endpoint for retrieving basic information about a site. This information is useful for integrations and clients that need to show some details of a site before providing authentication.

```js
GET /admin/site/
```

### The site object

The site endpoint returns a single object, rather than an array.

`title`: *String* The title of the site, same as the title returned from the `settings` endpoint.

`description`: *String* The description of the site, same as the description returned from the `settings` endpoint.

`logo`: *String* The logo of the site, provided as a relative path. Same as the logo returned from the `settings` endpoint.

`url`: *URI* The frontend URL for the site, which can be different to the Ghost Admin / API URL. This comes from the configuration JSON file.

`version`: *Semver String (major.minor)* The current version of the Ghost site. Use this to check the minimum version is high enough for compatibility with integrations.

```json
// GET admin/site/
{
    "site": {
        "title": "Ghost",
        "description": "The professional publishing platform",
        "logo": "/content/images/2014/09/logo.png",
        "url": "https://demo.ghost.io/",
        "version": "3.14"
    }
}
```

## Webhooks

Webhooks allow you to build or set up [custom integrations](https://ghost.org/integrations/custom-integrations/#api-webhook-integrations), which subscribe to certain events in Ghost. When one of such events is triggered, Ghost sends a HTTP POST payload to the webhook’s configured URL. For instance, when a new post is published Ghost can send a notification to configured endpoint to trigger a search index re-build, slack notification, or whole site deploy. For more information about webhooks read [this webhooks reference](https://ghost.org/docs/webhooks/).

```js
POST /admin/webhooks/
PUT /admin/webhooks/{id}/
DELETE /admin/webhooks/{id}/
```

### The webhook object

Webhooks can be created, updated, and removed. There is no API to retrieve webhook resources independently.

### Creating a Webhook

```js
POST /admin/webhooks/
```

Required fields: `event`, `target_url` Conditionally required field: `integration_id` - required if request is done using [user authentication](https://ghost.org/docs/admin-api/#user-authentication) Optional fields: `name`, `secret`, `api_version`

Below is a minimal example to create a webhook using [token authenticated](https://ghost.org/docs/admin-api/#token-authentication) request:

```json
// POST /admin/webhooks/
{
    "webhooks": [{
            "event": "post.added",
            "target_url": "https://example.com/hook/"
    }]
}
```

When creating a webhook through [user authenticated](https://ghost.org/docs/admin-api/#user-authentication) request, minimal payload would look like following:

```json
// POST /admin/webhooks/
{
    "webhooks": [{
            "event": "post.added",
            "target_url": "https://example.com/hook/",
            "integration_id": "5c739b7c8a59a6c8ddc164a1"
    }]
}
```

and example response for both requests would be:

```json
{
    "webhooks": [
        {
            "id": "5f04028cc9b839282b0eb5e3",
            "event": "post.added",
            "target_url": "https://example.com/hook/",
            "name": null,
            "secret": null,
            "api_version": "v5",
            "integration_id": "5c739b7c8a59a6c8ddc164a1",
            "status": "available",
            "last_triggered_at": null,
            "last_triggered_status": null,
            "last_triggered_error": null,
            "created_at": "2020-07-07T05:05:16.000Z",
            "updated_at": "2020-09-15T04:01:07.643Z"
        }
    ]
}
```

### Updating a Webhook

```js
PUT /admin/webhooks/{id}/
```

All writable fields of a webhook can be updated via edit endpoint. These are following fields:

* `event` - one of [available events](https://ghost.org/docs/webhooks/#available-events)
* `target_url` - the target URL to notify when event happens
* `name` - custom name
* `api_version` - API version used when creating webhook payload for an API resource

```json
// PUT admin/webhooks/5f04028cc9b839282b0eb5e3
{
    "webhooks": [{
            "event": "post.published.edited",
            "name": "webhook example"
    }]
}
```

and example response for update requests would be:

```json
{
    "webhooks": [
        {
            "id": "5f04028cc9b839282b0eb5e3",
            "event": "post.published.edited",
            "target_url": "https://example.com/hook/",
            "name": "webhook example",
            "secret": null,
            "api_version": "v",
            "integration_id": "5c739b7c8a59a6c8ddc164a1",
            "status": "available",
            "last_triggered_at": null,
            "last_triggered_status": null,
            "last_triggered_error": null,
            "created_at": "2020-07-07T05:05:16.000Z",
            "updated_at": "2020-09-15T04:05:07.643Z"
        }
    ]
}
```

### Deleting a Webhook

```js
DELETE /admin/webhooks/{id}/
```

Delete requests have no payload in the request or response. Successful deletes will return an empty 204 response.
