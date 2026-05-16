# IpAddressLookupTwo SDK exists test

require "minitest/autorun"
require_relative "../IpAddressLookupTwo_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = IpAddressLookupTwoSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
