import {IAppUserBaseItem} from "../../app/base/interfaces/iapp-user-base-item";

export interface IXmtUserSetItem extends IAppUserBaseItem
{
	userID?: string;
	setPassword: boolean;
	password: string;
	confirmPassword: string;
	previousPassword: string;
	setPhoto: boolean;
	photo: number[];
	//TimeZoneSettings skipped so far
}