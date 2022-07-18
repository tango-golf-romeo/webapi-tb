import {IRcvWidgetResponseItem} from "./ircv-widget-response-item";

export interface IRcvWorkspaceWidgetContentResponseItem
{
	widgetID: string;
	jsonUIConf: string;
	widget: IRcvWidgetResponseItem;
}