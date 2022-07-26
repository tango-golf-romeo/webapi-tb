import {IRcvWorkspaceWidgetContentResponseItem} from "../interfaces/ircv-workspace-widget-content-response-item";
import {RcvWidgetResponseItem} from "./rcv-widget-response-item";

export class RcvWorkspaceWidgetContentResponseItem implements IRcvWorkspaceWidgetContentResponseItem
{
public widgetID: string = '';
public jsonUIConf: string = '';
public widget: RcvWidgetResponseItem|null = null;
}