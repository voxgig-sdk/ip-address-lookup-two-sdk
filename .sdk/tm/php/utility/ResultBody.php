<?php
declare(strict_types=1);

// IpAddressLookupTwo SDK utility: result_body

class IpAddressLookupTwoResultBody
{
    public static function call(IpAddressLookupTwoContext $ctx): ?IpAddressLookupTwoResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
