# IpAddressLookupTwo SDK utility: make_context
require_relative '../core/context'
module IpAddressLookupTwoUtilities
  MakeContext = ->(ctxmap, basectx) {
    IpAddressLookupTwoContext.new(ctxmap, basectx)
  }
end
