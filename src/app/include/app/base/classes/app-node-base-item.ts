import {IAppNodeBaseItem} from "../interfaces/iapp-node-base-item";

export class AppNodeBaseItem implements IAppNodeBaseItem
{
	public name:string = '';
	public description:string = '';
	public xmlParameters?:string;
	public locationID?:number;
	public nodeType:string = 'multiScreen';
	public ipAddress:string = '127.0.0.1';

	constructor (sName:string, sDesc:string)
	{
		this.name = sName;
		this.description = sDesc;
	}
}