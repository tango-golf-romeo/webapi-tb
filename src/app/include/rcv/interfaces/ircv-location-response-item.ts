import {IAppLocationBaseItem} from "../../app/base/interfaces/iapp-location-base-item";
import {IRcvLocationGroupItem} from "./ircv-location-group-item";

export interface IRcvLocationResponseItem extends IAppLocationBaseItem
{
	locationID: number;
	modifiedDate: string;
	parentName: string;
	locationTypeName: string;
	groups: IRcvLocationGroupItem[];
}