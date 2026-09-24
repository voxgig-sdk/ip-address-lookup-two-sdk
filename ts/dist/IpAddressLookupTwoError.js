"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpAddressLookupTwoError = void 0;
class IpAddressLookupTwoError extends Error {
    isIpAddressLookupTwoError = true;
    sdk = 'IpAddressLookupTwo';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.IpAddressLookupTwoError = IpAddressLookupTwoError;
//# sourceMappingURL=IpAddressLookupTwoError.js.map