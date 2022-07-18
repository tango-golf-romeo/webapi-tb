import {IRcvWorkspaceResponseItem} from "./ircv-workspace-response-item";
import {IRcvWorkspaceWidgetContentResponseItem} from "./ircv-workspace-widget-content-response-item";

export interface IRcvWorkspaceContentResponseItem
{
	workspace: IRcvWorkspaceResponseItem|null;
	workspaceWidget: IRcvWorkspaceWidgetContentResponseItem[];
}