import {IRcvUserDataResponseItem} from "../interfaces/ircv-user-data-response-item";
import {RcvUserDataProfile} from "./rcv-user-data-profile";

export class RcvUserDataResponseItem implements IRcvUserDataResponseItem
{
public profile:RcvUserDataProfile|null = null;
}