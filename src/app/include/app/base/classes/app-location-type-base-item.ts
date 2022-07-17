import {IAppLocationTypeBaseItem} from "../interfaces/iapp-location-type-base-item";

export class AppLocationTypeBaseItem implements IAppLocationTypeBaseItem
{
public name: string = '';
public description: string = '';

	constructor (sName: string, sDesc: string)
	{
		this.name = sName;
		this.description = sDesc;
	}
}