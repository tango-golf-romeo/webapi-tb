import {IAppBaseMessagesResponse} from "../../app/base/interfaces/iapp-base-messages-response";

export interface IRcvMessagesLoginResponse extends IAppBaseMessagesResponse
{
	get badLoginCount (): number;
	get availableLoginCount (): string;
	get bannedTime (): string;
}