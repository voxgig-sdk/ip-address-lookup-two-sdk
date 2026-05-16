<?php
declare(strict_types=1);

// IpAddressLookupTwo SDK utility: feature_add

class IpAddressLookupTwoFeatureAdd
{
    public static function call(IpAddressLookupTwoContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
