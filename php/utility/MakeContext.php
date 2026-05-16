<?php
declare(strict_types=1);

// IpAddressLookupTwo SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class IpAddressLookupTwoMakeContext
{
    public static function call(array $ctxmap, ?IpAddressLookupTwoContext $basectx): IpAddressLookupTwoContext
    {
        return new IpAddressLookupTwoContext($ctxmap, $basectx);
    }
}
