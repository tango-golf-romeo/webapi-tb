import {IAppInterpolation} from "./iapp-interpolation";
import {IAppPaging} from "./iapp-paging";

export interface IAppDataFilter
{
	locationIDs: number[];
	virtualServiceIDs: string[];
	alarmGroupID?: number;
	beginDate?: string;
	endDate?: string;
	pagingProperty: IAppPaging;
	interpolation: IAppInterpolation;
}