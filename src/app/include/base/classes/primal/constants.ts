export enum ApiServices
{
	Dummy = 'Test/Dummy',
	Group = 'Admin/Group',
	Location = 'Geography/Location',
	LocationType = 'Geography/LocationType',
	Login = 'Admin/Login',
	Logout = 'Logout',
	MonitoringObject = 'Probe/MonitoringObject',
	Mosaic = 'Frontend/Mosaic',
	Node = 'Probe/Node',
	Proc = 'Cleanup/Proc',
	StatePanel = 'Frontend/StatePanel',
	User = 'Admin/User'
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