import {IAppDataFilter} from "../interfaces/iapp-data-filter";
import {AppInterpolation} from "./app-interpolation";
import {AppPaging} from "./app-paging";

export class AppDataFilter implements IAppDataFilter
{
public locationIDs: number[] = [];
public virtualServiceIDs: string[] = [];
public alarmGroupID?: number;
public beginDate?: string;
public endDate?: string;
public pagingProperty: AppPaging = new AppPaging();
public interpolation: AppInterpolation = new AppInterpolation();
}