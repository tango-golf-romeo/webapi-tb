import {IRcvPayloadBase} from "../../base/interfaces/rcv/rcv-payload-base";

export interface IRcvStatePanelResponseItem extends IRcvPayloadBase
{
	get $type (): string;
	get name (): string;
	get description (): string;
	get statePanelID (): string;
}