# IpAddressLookupTwo SDK utility: make_context

from ipaddresslookuptwo_sdk.core.context import IpAddressLookupTwoContext


def make_context_util(ctxmap, basectx):
    return IpAddressLookupTwoContext(ctxmap, basectx)
