# IpAddressLookupTwo SDK configuration

module IpAddressLookupTwoConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "IpAddressLookupTwo",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.ip.sb",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "ipn" => {},
        },
      },
      "entity" => {
        "ipn" => {
          "fields" => [
            {
              "name" => "asn",
              "type" => "`$STRING`",
            },
            {
              "name" => "city",
              "type" => "`$STRING`",
            },
            {
              "name" => "country",
              "type" => "`$STRING`",
            },
            {
              "name" => "country_code",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip",
              "type" => "`$STRING`",
            },
            {
              "name" => "isp",
              "type" => "`$STRING`",
            },
            {
              "name" => "latitude",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "longitude",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "organization",
              "type" => "`$STRING`",
            },
            {
              "name" => "region",
              "type" => "`$STRING`",
            },
            {
              "name" => "timezone",
              "type" => "`$STRING`",
            },
          ],
          "name" => "ipn",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "8.8.8.8",
                        "kind" => "query",
                        "name" => "ip",
                        "orig" => "ip",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/ip",
                  "parts" => [
                    "ip",
                  ],
                  "select" => {
                    "exist" => [
                      "ip",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    IpAddressLookupTwoFeatures.make_feature(name)
  end
end
