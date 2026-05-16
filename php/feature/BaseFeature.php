<?php
declare(strict_types=1);

// IpAddressLookupTwo SDK base feature

class IpAddressLookupTwoBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(IpAddressLookupTwoContext $ctx, array $options): void {}
    public function PostConstruct(IpAddressLookupTwoContext $ctx): void {}
    public function PostConstructEntity(IpAddressLookupTwoContext $ctx): void {}
    public function SetData(IpAddressLookupTwoContext $ctx): void {}
    public function GetData(IpAddressLookupTwoContext $ctx): void {}
    public function GetMatch(IpAddressLookupTwoContext $ctx): void {}
    public function SetMatch(IpAddressLookupTwoContext $ctx): void {}
    public function PrePoint(IpAddressLookupTwoContext $ctx): void {}
    public function PreSpec(IpAddressLookupTwoContext $ctx): void {}
    public function PreRequest(IpAddressLookupTwoContext $ctx): void {}
    public function PreResponse(IpAddressLookupTwoContext $ctx): void {}
    public function PreResult(IpAddressLookupTwoContext $ctx): void {}
    public function PreDone(IpAddressLookupTwoContext $ctx): void {}
    public function PreUnexpected(IpAddressLookupTwoContext $ctx): void {}
}
