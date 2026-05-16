-- IpAddressLookupTwo SDK error

local IpAddressLookupTwoError = {}
IpAddressLookupTwoError.__index = IpAddressLookupTwoError


function IpAddressLookupTwoError.new(code, msg, ctx)
  local self = setmetatable({}, IpAddressLookupTwoError)
  self.is_sdk_error = true
  self.sdk = "IpAddressLookupTwo"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function IpAddressLookupTwoError:error()
  return self.msg
end


function IpAddressLookupTwoError:__tostring()
  return self.msg
end


return IpAddressLookupTwoError
