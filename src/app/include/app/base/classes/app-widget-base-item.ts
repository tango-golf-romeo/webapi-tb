import {IAppWidgetBaseItem} from "../interfaces/iapp-widget-base-item";
import {AppBaseItem} from "./app-base-item";
import {AppWidgetDataSource} from "./app-widget-data-source";

export class AppWidgetBaseItem extends AppBaseItem implements IAppWidgetBaseItem
{
public jsonUIConf: string = '';
public widgetType: string = '';
public widgetDataSource: AppWidgetDataSource = new AppWidgetDataSource();
}