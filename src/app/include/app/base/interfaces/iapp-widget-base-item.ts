import {IAppBaseItem} from "./iapp-base-item";
import {IAppWidgetDataSource} from "./iapp-widget-data-source";

export interface IAppWidgetBaseItem extends IAppBaseItem
{
	jsonUIConf: string;
	widgetType: string;
	widgetDataSource: IAppWidgetDataSource;
}