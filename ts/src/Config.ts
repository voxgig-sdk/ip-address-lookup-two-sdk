
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://api.ip.sb',

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      ipn: {
      },

    }
  }


  entity = {
    "ipn": {
      "fields": [
        {
          "name": "asn",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "city",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "country",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "country_code",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "ip",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "isp",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "latitude",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "longitude",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "organization",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 8
        },
        {
          "name": "region",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 9
        },
        {
          "name": "timezone",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 10
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/ip",
              "parts": [
                "ip"
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

