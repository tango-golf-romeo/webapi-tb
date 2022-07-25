import {IAppBaseItem} from "./iapp-base-item";

export interface IAppLocationBaseItem extends IAppBaseItem
{
	parentID?: number;
	locationTypeID?: number;
}