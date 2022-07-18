import {IAppWidgetBaseItem} from "../interfaces/iapp-widget-base-item";
import {AppWidgetDataSource} from "./app-widget-data-source";

export class AppWidgetBaseItem implements IAppWidgetBaseItem
{
public name: string = '';
public description: string = '';
public jsonUIConf: string = '';
public widgetType: string = '';
public widgetDataSource: AppWidgetDataSource = new AppWidgetDataSource();
}