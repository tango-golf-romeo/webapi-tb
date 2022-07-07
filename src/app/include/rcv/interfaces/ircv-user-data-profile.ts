export interface IRcvUserDataProfile
{
	userID:string;
	loginName:string;
	userName:string;
	email:string;
	userToken:string;
	machineID:string;
	featureIDList:number[];
	userRoleIDs:number[];
	//time zone settings skipped so far
}