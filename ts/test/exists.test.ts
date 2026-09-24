
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpAddressLookupTwoSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = IpAddressLookupTwoSDK.test()
    equal(testsdk instanceof IpAddressLookupTwoSDK, true,
      'IpAddressLookupTwoSDK.test() must return a client synchronously')
  })

})
