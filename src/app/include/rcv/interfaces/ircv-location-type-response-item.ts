import {IAppLocationBaseItem} from "../../app/base/interfaces/iapp-location-base-item";

export interface IRcvLocationTypeResponseItem extends IAppLocationBaseItem
{
	locationTypeID?: number;
	modifiedDate?: string;
	isDeleted: boolean;
}