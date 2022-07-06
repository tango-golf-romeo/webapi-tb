import {AppBaseMessagesResponse} from "../../app/base/classes/app-base-messages-response";
import {IRcvMessagesResponse} from "../interfaces/ircv-messages-response";

export class RcvMessagesResponse extends AppBaseMessagesResponse implements IRcvMessagesResponse
{
	constructor (sErr:string, sMsg:string)
	{
		super(sErr,sMsg);
	}
}