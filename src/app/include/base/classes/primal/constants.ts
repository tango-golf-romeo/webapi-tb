export enum ApiServices
{
	Login = 'Admin/Login',
	Logout = 'Logout'
}

export class Constants
{
	public static readonly Name:string = 'Web API Test Bed';

	public static readonly UseExpress:boolean = false;

	public static readonly HttpRootDevIIS:string = 'http://localhost:5000/';
	public static readonly HttpRootDevKestrel:string = 'http://localhost:5000/';
	public static readonly HttpRootDevIISExpress:string = 'http://localhost:5000/';

	public static readonly RelativePathWebApi:string = 'api';

	public static readonly Username = 'SystemAdmin';
	public static readonly Password = 'StreamLabs';
}