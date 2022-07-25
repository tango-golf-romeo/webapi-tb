import {IAppBaseItem} from "../interfaces/iapp-base-item";

export class AppBaseItem implements IAppBaseItem
{
public name: string = '';
public description: string = '';

	constructor (sName:string, sDesc:string)
	{
		this.name = sName;
		this.description = sDesc;
	}
}