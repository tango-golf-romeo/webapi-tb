export interface IXmtUserSessionData
{
	get userID (): string;
	get loginName (): string;
	get userName (): string;
	get email (): string;
	get userToken (): string;
	get machineID (): string;
}