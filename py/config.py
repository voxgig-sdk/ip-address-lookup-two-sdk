# IpAddressLookupTwo SDK configuration


def make_config():
    return {
        "main": {
            "name": "IpAddressLookupTwo",
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
            "auth": {
                "prefix": "Bearer",
            },
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
            "active": True,
            "name": "asn",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "city",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "country",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "country_code",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "ip",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "isp",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "latitude",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "longitude",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "organization",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "timezone",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "ipn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "8.8.8.8",
                      "kind": "query",
                      "name": "ip",
                      "orig": "ip",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
