<?php
declare(strict_types=1);

// Typed models for the IpAddressLookupTwo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Ipn entity data model. */
class Ipn
{
    public ?string $asn = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?string $country_code = null;
    public ?string $ip = null;
    public ?string $isp = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?string $organization = null;
    public ?string $region = null;
    public ?string $timezone = null;
}

/** Request payload for Ipn#load. */
class IpnLoadMatch
{
    public ?string $ip = null;
}

