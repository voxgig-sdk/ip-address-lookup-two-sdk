

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IpAddressLookupTwoSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('IpnEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_ADDRESS_LOOKUP_TWO_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_ADDRESS_LOOKUP_TWO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpAddressLookupTwoSDK.test()
    const ent = testsdk.Ipn()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_ADDRESS_LOOKUP_TWO_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ipn.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"asn":{"a":true,"h":"Asn","n":"asn","r":false,"sh":"Autonomous System Number","t":"`$STRING`","key$":"asn","index$":0},"city":{"a":true,"h":"City","n":"city","r":false,"sh":"City name","t":"`$STRING`","key$":"city","index$":1},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Country name","t":"`$STRING`","key$":"country","index$":2},"country_code":{"a":true,"h":"Country Code","n":"country_code","r":false,"sh":"ISO country code","t":"`$STRING`","key$":"country_code","index$":3},"ip":{"a":true,"h":"Ip","n":"ip","r":false,"sh":"The IP address","t":"`$STRING`","key$":"ip","index$":4},"isp":{"a":true,"h":"Isp","n":"isp","r":false,"sh":"Internet Service Provider","t":"`$STRING`","key$":"isp","index$":5},"latitude":{"a":true,"fo":"float","h":"Latitude","n":"latitude","r":false,"sh":"Latitude coordinate","t":"`$NUMBER`","key$":"latitude","index$":6},"longitude":{"a":true,"fo":"float","h":"Longitude","n":"longitude","r":false,"sh":"Longitude coordinate","t":"`$NUMBER`","key$":"longitude","index$":7},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"Organization name","t":"`$STRING`","key$":"organization","index$":8},"region":{"a":true,"h":"Region","n":"region","r":false,"sh":"Region or state","t":"`$STRING`","key$":"region","index$":9},"timezone":{"a":true,"h":"Timezone","n":"timezone","r":false,"sh":"Timezone identifier","t":"`$STRING`","key$":"timezone","index$":10}},"name":"ipn","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /ip","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"8.8.8.8","k":"query","n":"ip","or":"ip","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/ip","q":{"exist":["ip"]},"r":{},"s":[{"lit":"ip"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ipn","name__orig":"ipn","Name":"Ipn","name_":"ipn","name-":"ipn","NAME":"IPN","index$":0}, {"active":true,"entity":"ipn","key$":"BasicIpnFlow","kind":"basic","name":"BasicIpnFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ipn_ref01","srcdatavar":"ipn_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ipn_ref01"}}],"index$":0}]}, 'Ipn', {"GET /ip":{"protocol":"http","operationId":"getIpInfo","responses":{"200":{"description":"Successful response with IP address information","content":{"application/json":{"schema":{"type":"object","properties":{"ip":{"description":"The IP address","example":"8.8.8.8","key$":"ip","type":"string"},"country":{"description":"Country name","example":"United States","key$":"country","type":"string"},"country_code":{"description":"ISO country code","example":"US","key$":"country_code","type":"string"},"region":{"description":"Region or state","example":"California","key$":"region","type":"string"},"city":{"description":"City name","example":"Mountain View","key$":"city","type":"string"},"latitude":{"description":"Latitude coordinate","example":37.386,"format":"float","key$":"latitude","type":"number"},"longitude":{"description":"Longitude coordinate","example":-122.0838,"format":"float","key$":"longitude","type":"number"},"timezone":{"description":"Timezone identifier","example":"America/Los_Angeles","key$":"timezone","type":"string"},"isp":{"description":"Internet Service Provider","example":"Google LLC","key$":"isp","type":"string"},"organization":{"description":"Organization name","example":"Google LLC","key$":"organization","type":"string"},"asn":{"description":"Autonomous System Number","example":"AS15169","key$":"asn","type":"string"}},"index$":0}}}},"400":{"description":"Bad request - Invalid IP address format","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Invalid IP address format"}}}}}},"404":{"description":"IP address not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"IP address not found"}}}}}},"429":{"description":"Too many requests - Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Rate limit exceeded"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"Internal server error"}}}}}}},"parameters":[{"name":"ip","in":"query","description":"The IP address to lookup (IPv4 or IPv6). If not provided, returns information about the requesting client's IP address.","required":false,"schema":{"type":"string","example":"8.8.8.8"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ipn_ref01_data = Object.values(setup.data.existing.ipn)[0] as any

    // LOAD
    const ipn_ref01_ent = client.Ipn()
    const ipn_ref01_match_dt0: any = {}
    const ipn_ref01_data_dt0 = (await ipn_ref01_ent.load(ipn_ref01_match_dt0)).data()
    assert(null != ipn_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ipn/IpnTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IpAddressLookupTwoSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['ipn01','ipn02','ipn03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_ADDRESS_LOOKUP_TWO_TEST_IPN_ENTID': idmap,
    'IP_ADDRESS_LOOKUP_TWO_TEST_LIVE': 'FALSE',
    'IP_ADDRESS_LOOKUP_TWO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_ADDRESS_LOOKUP_TWO_TEST_IPN_ENTID']

  const live = 'TRUE' === env.IP_ADDRESS_LOOKUP_TWO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_ADDRESS_LOOKUP_TWO_TEST_IPN_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IpAddressLookupTwoSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.IP_ADDRESS_LOOKUP_TWO_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
