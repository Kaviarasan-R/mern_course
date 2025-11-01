# Authentication

Refresh Token:

- Long time
- One time generation
- Sent as cookie
- Must have expiration date
- Issued at authorization
- Client uses to request new access token
- Verified with endpoint and database
- Must be allowed to expire or logout

Access Token:

- Short time
- Can be generated multiple times
- Sent as JSON
- Client stores in like Global state memory (Not in cookies & localstorage)
- Issued at authorization
- Client uses API access until expires
- Verified with middleware
- New token issued at Refresh request

Hazards: XSS & CSRF
