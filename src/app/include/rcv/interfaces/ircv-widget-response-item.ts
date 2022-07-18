import {IAppWidgetBaseItem} from "../../app/base/interfaces/iapp-widget-base-item";

export interface IRcvWidgetResponseItem extends IAppWidgetBaseItem
{
	widgetID: string;
	modifiedDate: string;
	isReadOnly: boolean;
}