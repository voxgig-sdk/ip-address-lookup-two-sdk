# IpAddressLookupTwo SDK feature factory

from ipaddresslookuptwo_sdk.feature.base_feature import IpAddressLookupTwoBaseFeature
from ipaddresslookuptwo_sdk.feature.test_feature import IpAddressLookupTwoTestFeature


def _make_feature(name):
    features = {
        "base": lambda: IpAddressLookupTwoBaseFeature(),
        "test": lambda: IpAddressLookupTwoTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
