export enum ApiServices
{
	Dummy = 'Test/Dummy',
	Login = 'Admin/Login',
	Logout = 'Logout',
	Mosaic = 'Frontend/Mosaic',
	Node = 'Probe/Node',
	Proc = 'Cleanup/Proc',
	StatePanel = 'Frontend/StatePanel'
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