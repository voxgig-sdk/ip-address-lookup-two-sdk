# IpAddressLookupTwo SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "IpAddressLookupTwo",
            "slug": "ip-address-lookup-two",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.ip.sb",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "ipn": {},
            },
        },
        "entity": {
      "ipn": {
        "fields": [
          {
            "name": "asn",
            "short": "Autonomous System Number",
            "type": "`$STRING`",
          },
          {
            "name": "city",
            "short": "City name",
            "type": "`$STRING`",
          },
          {
            "name": "country",
            "short": "Country name",
            "type": "`$STRING`",
          },
          {
            "name": "country_code",
            "short": "ISO country code",
            "type": "`$STRING`",
          },
          {
            "name": "ip",
            "short": "The IP address",
            "type": "`$STRING`",
          },
          {
            "name": "isp",
            "short": "Internet Service Provider",
            "type": "`$STRING`",
          },
          {
            "name": "latitude",
            "short": "Latitude coordinate",
            "type": "`$NUMBER`",
          },
          {
            "name": "longitude",
            "short": "Longitude coordinate",
            "type": "`$NUMBER`",
          },
          {
            "name": "organization",
            "short": "Organization name",
            "type": "`$STRING`",
          },
          {
            "name": "region",
            "short": "Region or state",
            "type": "`$STRING`",
          },
          {
            "name": "timezone",
            "short": "Timezone identifier",
            "type": "`$STRING`",
          },
        ],
        "name": "ipn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "8.8.8.8",
                      "kind": "query",
                      "name": "ip",
                      "orig": "ip",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/ip",
                "parts": [
                  "ip",
                ],
                "select": {
                  "exist": [
                    "ip",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
