package = "voxgig-sdk-ip-address-lookup-two"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/ip-address-lookup-two-sdk.git"
}
description = {
  summary = "IpAddressLookupTwo SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["ip-address-lookup-two_sdk"] = "ip-address-lookup-two_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
