import {IAppBaseMessagesResponse} from "../interfaces/iapp-base-messages-response";

export class AppBaseMessagesResponse implements IAppBaseMessagesResponse
{
public error: string = '';
public message: string = '';

	//need no constructor as it is only received always
}