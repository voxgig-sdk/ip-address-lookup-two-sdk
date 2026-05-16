<?php
declare(strict_types=1);

// IpAddressLookupTwo SDK utility: result_headers

class IpAddressLookupTwoResultHeaders
{
    public static function call(IpAddressLookupTwoContext $ctx): ?IpAddressLookupTwoResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
