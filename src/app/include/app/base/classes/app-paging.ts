import {IAppPaging} from "../interfaces/iapp-paging";

export class AppPaging implements IAppPaging
{
public topCount: number = 0;
public fromIndex: number = -1;
public itemCount: number = 0;
public maximalDate: string = '';
}