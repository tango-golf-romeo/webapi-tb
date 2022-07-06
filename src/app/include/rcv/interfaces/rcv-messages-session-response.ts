import {IAppBaseMessagesResponse} from "../../app/base/interfaces/iapp-base-messages-response";

export interface IRcvMessagesSessionResponse extends IAppBaseMessagesResponse
{
	get sessionRemainingTime (): number;
}