import {IRcvPayloadBase} from '../../base/interfaces/rcv/rcv-payload-base';

export interface IXmtLoginItem extends IRcvPayloadBase
{
	get login (): string;
	get password (): string;
	get target (): string; //not used so far
}