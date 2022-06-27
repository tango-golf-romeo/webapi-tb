import {IXmtPayload} from "./xmt-payload";

export interface IBadLogin extends IXmtPayload
{
	get error (): string;
	get message (): string;
	get badLoginCount (): number;
	get availableLoginCount (): number;
	get bannedTime (): string;
}