import {IAppBaseItem} from "./iapp-base-item";

export interface IAppScriptBaseItem extends IAppBaseItem
{
	scriptType?: string;
	interpreterID?: number;
	arguments: string;
	hasHandle?: boolean;
}