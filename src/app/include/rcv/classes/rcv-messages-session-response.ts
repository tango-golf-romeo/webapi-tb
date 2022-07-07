import {AppBaseMessagesResponse} from "../../app/base/classes/app-base-messages-response";
import {IRcvMessagesSessionResponse} from "../interfaces/ircv-messages-session-response";

export class RcvMessagesSessionResponse extends AppBaseMessagesResponse implements IRcvMessagesSessionResponse
{
	sessionRemainingTime?:number;
}