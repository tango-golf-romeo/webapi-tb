import {IAppWidgetDataSource} from "./iapp-widget-data-source";

export interface IAppWidgetBaseItem
{
	name: string;
	description: string;
	jsonUIConf: string;
	widgetType: string;
	widgetDataSource: IAppWidgetDataSource;
}