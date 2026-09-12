import { IpAddressLookupTwoEntityBase } from '../IpAddressLookupTwoEntityBase';
import type { IpAddressLookupTwoSDK } from '../IpAddressLookupTwoSDK';
import type { Control } from '../types';
import type { Ipn, IpnLoadMatch } from '../IpAddressLookupTwoTypes';
declare class IpnEntity extends IpAddressLookupTwoEntityBase<Ipn> {
    constructor(client: IpAddressLookupTwoSDK, entopts: any);
    make(this: IpnEntity): IpnEntity;
    load(this: any, reqmatch?: IpnLoadMatch, ctrl?: Control): Promise<IpnEntity>;
}
export { IpnEntity };
