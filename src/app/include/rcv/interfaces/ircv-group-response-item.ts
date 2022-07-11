import {IAppGroupBaseItem} from "../../app/base/interfaces/iapp-group-base-item";

export interface IRcvGroupResponseItem extends IAppGroupBaseItem
{
	groupID: number;
	isReadOnly: boolean;
	isAccessible: boolean;
	userIDs: string[];
}