-- IpAddressLookupTwo SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "IpAddressLookupTwo",
      slug = "ip-address-lookup-two",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api.ip.sb",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["ipn"] = {},
      },
    },
    entity = {
      ["ipn"] = {
        ["fields"] = {
          {
            ["name"] = "asn",
            ["short"] = "Autonomous System Number",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "city",
            ["short"] = "City name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "country",
            ["short"] = "Country name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "country_code",
            ["short"] = "ISO country code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ip",
            ["short"] = "The IP address",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "isp",
            ["short"] = "Internet Service Provider",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "float",
            ["name"] = "latitude",
            ["short"] = "Latitude coordinate",
            ["type"] = "`$NUMBER`",
          },
          {
            ["format"] = "float",
            ["name"] = "longitude",
            ["short"] = "Longitude coordinate",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "organization",
            ["short"] = "Organization name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "region",
            ["short"] = "Region or state",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timezone",
            ["short"] = "Timezone identifier",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "ipn",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "8.8.8.8",
                      ["kind"] = "query",
                      ["name"] = "ip",
                      ["orig"] = "ip",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ip",
                ["segments"] = {
                  {
                    ["lit"] = "ip",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "ip",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "ip",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
