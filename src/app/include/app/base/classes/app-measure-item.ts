import {IAppMeasureItem} from "../interfaces/iapp-measure-item";
import {AppBaseItem} from "./app-base-item";

export class AppMeasureItem extends AppBaseItem implements IAppMeasureItem
{
public measureID?: number;
public unit: string = '';
public columnName: string = '';
public dataType: string = '';
public orderBy?: number;
}