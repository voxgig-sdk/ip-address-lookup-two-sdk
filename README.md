# IpAddressLookupTwo SDK

Look up IPv4/IPv6 addresses and resolve them to location, ASN, and ISP details

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About IP Address Lookup API

IP.SB is a free REST API that returns the caller's public IP address and resolves any IPv4 or IPv6 address to geolocation and network metadata. It is operated by [SB Professional Services, LLC](https://ip.sb/) alongside related services such as DNS.SB.

What you get from the API:

- Plain-text or JSON echo of the visitor's IP (`/ip`, `/jsonip`)
- Geolocation lookup for the visitor or any supplied IP (`/geoip`, `/geoip/{ip}`)
- Fields returned by GeoIP include country code and name, region code and name, city, postal code, continent code, latitude, longitude, timezone, ASN, and ISP organization
- Dual IPv4/IPv6 endpoint variants and JSONP callback support

No API key or authentication is required and CORS is enabled. Geolocation is powered by MaxMind GeoLite data, so accuracy is approximate — especially at the city level. Invalid input IPs return HTTP 400 with a JSON error message.

## Try it

**TypeScript**
```bash
npm install ip-address-lookup-two
```

**Python**
```bash
pip install ip-address-lookup-two-sdk
```

**PHP**
```bash
composer require voxgig/ip-address-lookup-two-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/ip-address-lookup-two-sdk/go
```

**Ruby**
```bash
gem install ip-address-lookup-two-sdk
```

**Lua**
```bash
luarocks install ip-address-lookup-two-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { IpAddressLookupTwoSDK } from 'ip-address-lookup-two'

const client = new IpAddressLookupTwoSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o ip-address-lookup-two-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "ip-address-lookup-two": {
      "command": "/abs/path/to/ip-address-lookup-two-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Ipn** | An IP address record carrying geolocation and network attributes (country, region, city, postal code, latitude/longitude, timezone, ASN, ISP); served from `/jsonip`, `/geoip`, and `/geoip/{ip}`. | `/ip` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from ipaddresslookuptwo_sdk import IpAddressLookupTwoSDK

client = IpAddressLookupTwoSDK({})


# Load a specific ipn
ipn, err = client.Ipn(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'ipaddresslookuptwo_sdk.php';

$client = new IpAddressLookupTwoSDK([]);


// Load a specific ipn
[$ipn, $err] = $client->Ipn(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/ip-address-lookup-two-sdk/go"

client := sdk.NewIpAddressLookupTwoSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "IpAddressLookupTwo_sdk"

client = IpAddressLookupTwoSDK.new({})


# Load a specific ipn
ipn, err = client.Ipn(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("ip-address-lookup-two_sdk")

local client = sdk.new({})


-- Load a specific ipn
local ipn, err = client:Ipn(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = IpAddressLookupTwoSDK.test()
const result = await client.Ipn().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = IpAddressLookupTwoSDK.test(None, None)
result, err = client.Ipn(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = IpAddressLookupTwoSDK::test(null, null);
[$result, $err] = $client->Ipn(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Ipn(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = IpAddressLookupTwoSDK.test(nil, nil)
result, err = client.Ipn(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Ipn(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the IP Address Lookup API

- Upstream: [https://ip.sb/](https://ip.sb/)
- API docs: [https://ip.sb/api/](https://ip.sb/api/)

- Operated by SB Professional Services, LLC as a free public service
- Includes GeoLite data created by MaxMind, available from [maxmind.com](https://www.maxmind.com) — attribution required when redistributing geolocation results
- API source derives from the open-source [Telize](https://github.com/fcambus/telize) project
- No published rate limits or terms; treat as best-effort and avoid abusive usage

---

Generated from the IP Address Lookup API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
