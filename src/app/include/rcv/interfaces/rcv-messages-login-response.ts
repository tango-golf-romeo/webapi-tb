import {IRcvBaseMessagesResponse} from "./rcv-base-messages-response";

export interface IRcvMessagesLoginResponse extends IRcvBaseMessagesResponse
{
	get badLoginCount (): number;
	get availableLoginCount (): string;
	get bannedTime (): string;
}