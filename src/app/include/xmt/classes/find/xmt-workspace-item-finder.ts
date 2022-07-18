import {IXmtWorkspaceItemFinder} from "../../interfaces/find/ixmt-workspace-item-finder";

export class XmtWorkspaceItemFinder implements IXmtWorkspaceItemFinder
{
public workspaceID?: string;
public workspaceName: string = '';
public workspaceTypes: string[] = [];
public isLayout?: boolean;
public isDisabled?: boolean;
}