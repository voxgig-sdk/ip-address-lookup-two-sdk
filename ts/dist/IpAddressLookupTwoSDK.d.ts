import { IpnEntity } from './entity/IpnEntity';
export type * from './IpAddressLookupTwoTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { IpAddressLookupTwoEntityBase } from './IpAddressLookupTwoEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class IpAddressLookupTwoSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Ipn(entopts?: Record<string, any>): IpnEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): IpAddressLookupTwoSDK;
    tester(testopts?: any, sdkopts?: any): IpAddressLookupTwoSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof IpAddressLookupTwoSDK;
export { stdutil, config, BaseFeature, IpAddressLookupTwoEntityBase, IpAddressLookupTwoSDK, SDK, };
