import {IAppBaseItem} from "./iapp-base-item";

export interface IAppNodeBaseItem extends IAppBaseItem
{
	xmlParameters?: string;
	locationID?: number;
	nodeType: string;
	ipAddress: string;
}