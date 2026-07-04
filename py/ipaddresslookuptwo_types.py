# Typed models for the IpAddressLookupTwo SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Ipn(TypedDict, total=False):
    asn: str
    city: str
    country: str
    country_code: str
    ip: str
    isp: str
    latitude: float
    longitude: float
    organization: str
    region: str
    timezone: str


class IpnLoadMatch(TypedDict, total=False):
    asn: str
    city: str
    country: str
    country_code: str
    ip: str
    isp: str
    latitude: float
    longitude: float
    organization: str
    region: str
    timezone: str
