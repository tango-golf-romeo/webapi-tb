import {IXmtPayloadBase} from "./xmt-payload-base";

export interface IXmtActionResultBase<T extends IXmtPayloadBase>
{
	get result (): boolean;
	get payload (): T|null;
	get havePayload (): boolean;
}