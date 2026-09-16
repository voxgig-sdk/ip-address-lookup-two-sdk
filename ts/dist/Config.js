"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'IpAddressLookupTwo',
        slug: "ip-address-lookup-two",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.ip.sb",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            ipn: {},
        }
    };
    entity = {
        "ipn": {
            "fields": [
                {
                    "name": "asn",
                    "short": "Autonomous System Number",
                    "type": "`$STRING`"
                },
                {
                    "name": "city",
                    "short": "City name",
                    "type": "`$STRING`"
                },
                {
                    "name": "country",
                    "short": "Country name",
                    "type": "`$STRING`"
                },
                {
                    "name": "country_code",
                    "short": "ISO country code",
                    "type": "`$STRING`"
                },
                {
                    "name": "ip",
                    "short": "The IP address",
                    "type": "`$STRING`"
                },
                {
                    "name": "isp",
                    "short": "Internet Service Provider",
                    "type": "`$STRING`"
                },
                {
                    "format": "float",
                    "name": "latitude",
                    "short": "Latitude coordinate",
                    "type": "`$NUMBER`"
                },
                {
                    "format": "float",
                    "name": "longitude",
                    "short": "Longitude coordinate",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "organization",
                    "short": "Organization name",
                    "type": "`$STRING`"
                },
                {
                    "name": "region",
                    "short": "Region or state",
                    "type": "`$STRING`"
                },
                {
                    "name": "timezone",
                    "short": "Timezone identifier",
                    "type": "`$STRING`"
                }
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
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/ip",
                            "segments": [
                                {
                                    "lit": "ip"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "ip"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "ip"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map