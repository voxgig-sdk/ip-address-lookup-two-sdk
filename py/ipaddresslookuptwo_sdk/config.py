# IpAddressLookupTwo SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Asn",
            "type": "`$STRING`",
            "short": "Autonomous System Number",
          },
          {
            "name": "city",
            "title": "City",
            "type": "`$STRING`",
            "short": "City name",
          },
          {
            "name": "country",
            "title": "Country",
            "type": "`$STRING`",
            "short": "Country name",
          },
          {
            "name": "country_code",
            "title": "Country Code",
            "type": "`$STRING`",
            "short": "ISO country code",
          },
          {
            "name": "ip",
            "title": "Ip",
            "type": "`$STRING`",
            "short": "The IP address",
          },
          {
            "name": "isp",
            "title": "Isp",
            "type": "`$STRING`",
            "short": "Internet Service Provider",
          },
          {
            "name": "latitude",
            "title": "Latitude",
            "type": "`$NUMBER`",
            "short": "Latitude coordinate",
            "format": "float",
          },
          {
            "name": "longitude",
            "title": "Longitude",
            "type": "`$NUMBER`",
            "short": "Longitude coordinate",
            "format": "float",
          },
          {
            "name": "organization",
            "title": "Organization",
            "type": "`$STRING`",
            "short": "Organization name",
          },
          {
            "name": "region",
            "title": "Region",
            "type": "`$STRING`",
            "short": "Region or state",
          },
          {
            "name": "timezone",
            "title": "Timezone",
            "type": "`$STRING`",
            "short": "Timezone identifier",
          },
        ],
        "name": "ipn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/ip",
                "segments": [
                  {
                    "lit": "ip",
                  },
                ],
                "parts": [
                  "ip",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "ip",
                      "orig": "ip",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "8.8.8.8",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "ip",
                  ],
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
