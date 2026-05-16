
import { Context } from './Context'


class IpAddressLookupTwoError extends Error {

  isIpAddressLookupTwoError = true

  sdk = 'IpAddressLookupTwo'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  IpAddressLookupTwoError
}

