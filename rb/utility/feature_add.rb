# IpAddressLookupTwo SDK utility: feature_add
module IpAddressLookupTwoUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
