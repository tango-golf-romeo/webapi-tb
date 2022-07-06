import {IAppBaseMessagesResponse} from "../interfaces/iapp-base-messages-response";

export class AppBaseMessagesResponse implements IAppBaseMessagesResponse
{
	error:string = '';
	message:string = '';

	constructor (sErr:string, sMsg:string)
	{
		this.error = sErr;
		this.message = sMsg;
	}
}