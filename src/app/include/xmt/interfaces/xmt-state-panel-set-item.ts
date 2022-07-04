import {IRcvPayloadBase} from "../../base/interfaces/rcv/rcv-payload-base";

export interface IXmtStatePanelSetItem extends IRcvPayloadBase
{
	$type?: string;
	get name (): string;
	get description (): string;
}