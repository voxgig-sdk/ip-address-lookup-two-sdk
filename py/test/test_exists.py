# ProjectName SDK exists test

import pytest
from ipaddresslookuptwo_sdk import IpAddressLookupTwoSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = IpAddressLookupTwoSDK.test(None, None)
        assert testsdk is not None
