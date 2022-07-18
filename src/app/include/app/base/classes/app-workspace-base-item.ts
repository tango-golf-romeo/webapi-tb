import {IAppWorkspaceBaseItem} from "../interfaces/iapp-workspace-base-item";

export class AppWorkspaceBaseItem implements IAppWorkspaceBaseItem
{
public name: string = '';
public description: string = '';
public isDisabled: boolean = false;
public jsonUIConf: string = '';
public tags: string[] = [];

	constructor (sName:string, sDesc:string)
	{
		this.name = sName;
		this.description = sDesc;
	}
}