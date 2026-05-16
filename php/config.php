<?php
declare(strict_types=1);

// IpAddressLookupTwo SDK configuration

class IpAddressLookupTwoConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "IpAddressLookupTwo",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.ip.sb",
                "auth" => [
                    "prefix" => "Bearer",
                ],
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
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'city',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'country',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'country_code',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'ip',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'isp',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'latitude',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'longitude',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'organization',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'region',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'timezone',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 10,
            ],
          ],
          'name' => 'ipn',
          'op' => [
            'load' => [
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
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/ip',
                  'parts' => [
                    'ip',
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
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
