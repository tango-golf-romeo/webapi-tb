import {IRcvBaseMessagesResponse} from "./rcv-base-messages-response";

export interface IRcvMessagesSessionResponse extends IRcvBaseMessagesResponse
{
	get sessionRemainingTime (): number;
}