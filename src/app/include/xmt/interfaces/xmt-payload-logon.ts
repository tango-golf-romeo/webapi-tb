import {IXmtPayloadBase} from "./xmt-payload-base";

export interface IXmtPayloadLogon extends IXmtPayloadBase
{
	get id (): string;
}