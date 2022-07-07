import {IAppBaseMessagesResponse} from "../../app/base/interfaces/iapp-base-messages-response";

export interface IRcvMessagesLoginResponse extends IAppBaseMessagesResponse
{
	badLoginCount:number;
	availableLoginCount:number;
	bannedTime?:string;
}