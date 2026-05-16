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
            "name": "asn",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "city",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "country",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "country_code",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "ip",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "isp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "latitude",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "longitude",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "organization",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "timezone",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
        ],
        "name": "ipn",
        "op": {
          "load": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
