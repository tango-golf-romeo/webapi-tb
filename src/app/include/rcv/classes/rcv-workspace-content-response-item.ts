import {IRcvWorkspaceContentResponseItem} from "../interfaces/ircv-workspace-content-response-item";
import {RcvWorkspaceResponseItem} from "./rcv-workspace-response-item";
import {RcvWorkspaceWidgetContentResponseItem} from "./rcv-workspace-widget-content-response-item";

export class RcvWorkspaceContentResponseItem implements IRcvWorkspaceContentResponseItem
{
public workspace: RcvWorkspaceResponseItem|null = null;
public workspaceWidget: RcvWorkspaceWidgetContentResponseItem[] = [];
}