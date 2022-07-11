import {IAppLocationBaseItem} from "../interfaces/iapp-location-base-item";

export class AppLocationBaseItem implements IAppLocationBaseItem
{
public name: string = '';
public parentID?: number;
public locationTypeID?: number;
public description: string = '';

	constructor (sName:string, sDesc:string)
	{
		this.name = sName;
		this.description = sDesc;
	}
}