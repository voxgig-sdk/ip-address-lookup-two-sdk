<?php
declare(strict_types=1);

// IpAddressLookupTwo SDK exists test

require_once __DIR__ . '/../ipaddresslookuptwo_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = IpAddressLookupTwoSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
