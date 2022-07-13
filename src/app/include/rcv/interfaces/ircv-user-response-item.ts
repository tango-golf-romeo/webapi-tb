import {IAppUserBaseItem} from "../../app/base/interfaces/iapp-user-base-item";

export interface IRcvUserResponseItem extends IAppUserBaseItem
{
	userID?: string;
	modifiedDate?: string;
	departmentName: string;
	//Groups skipped so far
	//TimeZoneSettings skipped so far
	passwordHash: number[];
	wrongPassword: boolean;
}