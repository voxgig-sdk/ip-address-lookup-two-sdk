# IpAddressLookupTwo SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

IpAddressLookupTwoUtility.registrar = ->(u) {
  u.clean = IpAddressLookupTwoUtilities::Clean
  u.done = IpAddressLookupTwoUtilities::Done
  u.make_error = IpAddressLookupTwoUtilities::MakeError
  u.feature_add = IpAddressLookupTwoUtilities::FeatureAdd
  u.feature_hook = IpAddressLookupTwoUtilities::FeatureHook
  u.feature_init = IpAddressLookupTwoUtilities::FeatureInit
  u.fetcher = IpAddressLookupTwoUtilities::Fetcher
  u.make_fetch_def = IpAddressLookupTwoUtilities::MakeFetchDef
  u.make_context = IpAddressLookupTwoUtilities::MakeContext
  u.make_options = IpAddressLookupTwoUtilities::MakeOptions
  u.make_request = IpAddressLookupTwoUtilities::MakeRequest
  u.make_response = IpAddressLookupTwoUtilities::MakeResponse
  u.make_result = IpAddressLookupTwoUtilities::MakeResult
  u.make_point = IpAddressLookupTwoUtilities::MakePoint
  u.make_spec = IpAddressLookupTwoUtilities::MakeSpec
  u.make_url = IpAddressLookupTwoUtilities::MakeUrl
  u.param = IpAddressLookupTwoUtilities::Param
  u.prepare_auth = IpAddressLookupTwoUtilities::PrepareAuth
  u.prepare_body = IpAddressLookupTwoUtilities::PrepareBody
  u.prepare_headers = IpAddressLookupTwoUtilities::PrepareHeaders
  u.prepare_method = IpAddressLookupTwoUtilities::PrepareMethod
  u.prepare_params = IpAddressLookupTwoUtilities::PrepareParams
  u.prepare_path = IpAddressLookupTwoUtilities::PreparePath
  u.prepare_query = IpAddressLookupTwoUtilities::PrepareQuery
  u.result_basic = IpAddressLookupTwoUtilities::ResultBasic
  u.result_body = IpAddressLookupTwoUtilities::ResultBody
  u.result_headers = IpAddressLookupTwoUtilities::ResultHeaders
  u.transform_request = IpAddressLookupTwoUtilities::TransformRequest
  u.transform_response = IpAddressLookupTwoUtilities::TransformResponse
}
