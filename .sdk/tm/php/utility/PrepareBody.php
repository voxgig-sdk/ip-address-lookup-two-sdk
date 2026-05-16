<?php
declare(strict_types=1);

// IpAddressLookupTwo SDK utility: prepare_body

class IpAddressLookupTwoPrepareBody
{
    public static function call(IpAddressLookupTwoContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
