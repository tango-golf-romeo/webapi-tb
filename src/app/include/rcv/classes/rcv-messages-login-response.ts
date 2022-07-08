import {AppBaseMessagesResponse} from "../../app/base/classes/app-base-messages-response";
import {IRcvMessagesLoginResponse} from "../interfaces/ircv-messages-login-response";

export class RcvMessagesLoginResponse extends AppBaseMessagesResponse implements IRcvMessagesLoginResponse
{
public badLoginCount: number = 0;
public availableLoginCount: number = 0;
public bannedTime?: string;
}