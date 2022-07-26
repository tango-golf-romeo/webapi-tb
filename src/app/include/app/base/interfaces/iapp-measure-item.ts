import {IAppBaseItem} from "./iapp-base-item";

export interface IAppMeasureItem extends IAppBaseItem
{
	measureID?: number;
	unit: string;
	columnName: string;
	dataType: string;
	orderBy?: number;
}