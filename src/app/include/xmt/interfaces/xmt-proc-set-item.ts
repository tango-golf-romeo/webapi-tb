import {IRcvPayloadBase} from "../../base/interfaces/rcv/rcv-payload-base";

export interface IXmtProcSetItem extends IRcvPayloadBase
{
	get ProcID (): number;
	get MaxSizeLogs (): number;
	get MaxRows (): number;
}