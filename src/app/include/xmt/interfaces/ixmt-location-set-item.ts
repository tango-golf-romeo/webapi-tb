import {IAppLocationBaseItem} from "../../app/base/interfaces/iapp-location-base-item";

export interface IXmtLocationSetItem extends IAppLocationBaseItem
{
	locationID?: number;
	groupIDs: number[];
}