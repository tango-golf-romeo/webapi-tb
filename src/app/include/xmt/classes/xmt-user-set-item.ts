import {AppUserBaseItem} from "../../app/base/classes/app-user-base-item";
import {IXmtUserSetItem} from "../interfaces/ixmt-user-set-item";

export class XmtUserSetItem extends AppUserBaseItem implements IXmtUserSetItem
{
public userID?: string;
public setPassword: boolean = false;
public password: string = '';
public confirmPassword: string = '';
public previousPassword: string = '';
public setPhoto: boolean = false;
public photo: number[] = [];
	//TimeZoneSettings skipped so far

	constructor (sLoginName:string, sUserName:string, sPassword:string)
	{
		super(sLoginName,sUserName);

		this.password = sPassword;
	}
}