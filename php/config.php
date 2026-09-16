<?php
declare(strict_types=1);

// IpAddressLookupTwo SDK configuration

class IpAddressLookupTwoConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "IpAddressLookupTwo",
                "slug" => "ip-address-lookup-two",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.ip.sb",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "ipn" => [],
                ],
            ],
            "entity" => [
        'ipn' => [
          'fields' => [
            [
              'name' => 'asn',
              'short' => 'Autonomous System Number',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'city',
              'short' => 'City name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country',
              'short' => 'Country name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country_code',
              'short' => 'ISO country code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip',
              'short' => 'The IP address',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'isp',
              'short' => 'Internet Service Provider',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'float',
              'name' => 'latitude',
              'short' => 'Latitude coordinate',
              'type' => '`$NUMBER`',
            ],
            [
              'format' => 'float',
              'name' => 'longitude',
              'short' => 'Longitude coordinate',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'organization',
              'short' => 'Organization name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'region',
              'short' => 'Region or state',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timezone',
              'short' => 'Timezone identifier',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'ipn',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => '8.8.8.8',
                        'kind' => 'query',
                        'name' => 'ip',
                        'orig' => 'ip',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/ip',
                  'segments' => [
                    [
                      'lit' => 'ip',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'ip',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'ip',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return IpAddressLookupTwoFeatures::make_feature($name);
    }
}
