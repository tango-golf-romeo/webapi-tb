import {IAppStatePanelBaseItem} from "../interfaces/iapp-state-panel-base-item";

export class AppStatePanelBaseItem implements IAppStatePanelBaseItem
{
public name:string = '';
public description:string = '';

	constructor (sName:string, sDesc:string)
	{
		this.name = sName;
		this.description = sDesc;
	}
}