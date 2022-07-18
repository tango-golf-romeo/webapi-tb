import {AppWorkspaceBaseItem} from "../../app/base/classes/app-workspace-base-item";
import {IXmtWorkspaceSetItem} from "../interfaces/ixmt-workspace-set-item";

export class XmtWorkspaceSetItem extends AppWorkspaceBaseItem implements IXmtWorkspaceSetItem
{
public workspaceID?: string;
public analyzerID?: number;
public groupsID: number[] = [];
public workspaceType: string = 'workspace';
}