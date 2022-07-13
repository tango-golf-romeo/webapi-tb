import {AppUserBaseItem} from "../../app/base/classes/app-user-base-item";
import {IRcvUserResponseItem} from "../interfaces/ircv-user-response-item";

export class RcvUserResponseItem extends AppUserBaseItem implements IRcvUserResponseItem
{
public userID?: string;
public modifiedDate?: string;
public departmentName: string = '';
	//Groups skipped so far
	//TimeZoneSettings skipped so far
public passwordHash: number[] = [];
public wrongPassword: boolean = false;
}