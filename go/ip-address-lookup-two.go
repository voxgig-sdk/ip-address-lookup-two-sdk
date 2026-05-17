package voxgigipaddresslookuptwosdk

import (
	"github.com/voxgig-sdk/ip-address-lookup-two-sdk/go/core"
	"github.com/voxgig-sdk/ip-address-lookup-two-sdk/go/entity"
	"github.com/voxgig-sdk/ip-address-lookup-two-sdk/go/feature"
	_ "github.com/voxgig-sdk/ip-address-lookup-two-sdk/go/utility"
)

// Type aliases preserve external API.
type IpAddressLookupTwoSDK = core.IpAddressLookupTwoSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IpAddressLookupTwoEntity = core.IpAddressLookupTwoEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IpAddressLookupTwoError = core.IpAddressLookupTwoError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewIpnEntityFunc = func(client *core.IpAddressLookupTwoSDK, entopts map[string]any) core.IpAddressLookupTwoEntity {
		return entity.NewIpnEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIpAddressLookupTwoSDK = core.NewIpAddressLookupTwoSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
