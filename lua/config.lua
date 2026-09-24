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
            ["title"] = "Asn",
            ["type"] = "`$STRING`",
            ["short"] = "Autonomous System Number",
          },
          {
            ["name"] = "city",
            ["title"] = "City",
            ["type"] = "`$STRING`",
            ["short"] = "City name",
          },
          {
            ["name"] = "country",
            ["title"] = "Country",
            ["type"] = "`$STRING`",
            ["short"] = "Country name",
          },
          {
            ["name"] = "country_code",
            ["title"] = "Country Code",
            ["type"] = "`$STRING`",
            ["short"] = "ISO country code",
          },
          {
            ["name"] = "ip",
            ["title"] = "Ip",
            ["type"] = "`$STRING`",
            ["short"] = "The IP address",
          },
          {
            ["name"] = "isp",
            ["title"] = "Isp",
            ["type"] = "`$STRING`",
            ["short"] = "Internet Service Provider",
          },
          {
            ["name"] = "latitude",
            ["title"] = "Latitude",
            ["type"] = "`$NUMBER`",
            ["short"] = "Latitude coordinate",
            ["format"] = "float",
          },
          {
            ["name"] = "longitude",
            ["title"] = "Longitude",
            ["type"] = "`$NUMBER`",
            ["short"] = "Longitude coordinate",
            ["format"] = "float",
          },
          {
            ["name"] = "organization",
            ["title"] = "Organization",
            ["type"] = "`$STRING`",
            ["short"] = "Organization name",
          },
          {
            ["name"] = "region",
            ["title"] = "Region",
            ["type"] = "`$STRING`",
            ["short"] = "Region or state",
          },
          {
            ["name"] = "timezone",
            ["title"] = "Timezone",
            ["type"] = "`$STRING`",
            ["short"] = "Timezone identifier",
          },
        },
        ["name"] = "ipn",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ip",
                ["segments"] = {
                  {
                    ["lit"] = "ip",
                  },
                },
                ["parts"] = {
                  "ip",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "ip",
                      ["orig"] = "ip",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "8.8.8.8",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "ip",
                  },
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
