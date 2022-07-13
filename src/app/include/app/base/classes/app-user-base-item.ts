export class AppUserBaseItem
{
	loginName: string = '';
	userName: string = '';
	departmentID?: string;
	email: string = '';
	phone: string = '';
	description: string = '';
	isWindows: boolean = false;
	isDisabled: boolean = false;
	telegramLogin: string = '';

	constructor (sLoginName:string, sUserName:string)
	{
		this.loginName = sLoginName;
		this.userName = sUserName;
	}
}