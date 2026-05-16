package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewIpnEntityFunc func(client *IpAddressLookupTwoSDK, entopts map[string]any) IpAddressLookupTwoEntity

