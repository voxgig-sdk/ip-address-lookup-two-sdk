# IpAddressLookupTwo SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module IpAddressLookupTwoFeatures
  def self.make_feature(name)
    case name
    when "base"
      IpAddressLookupTwoBaseFeature.new
    when "test"
      IpAddressLookupTwoTestFeature.new
    else
      IpAddressLookupTwoBaseFeature.new
    end
  end
end
