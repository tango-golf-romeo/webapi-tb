import {IAppWorkspaceBaseItem} from "../../app/base/interfaces/iapp-workspace-base-item";

export interface IXmtWorkspaceSetItem extends IAppWorkspaceBaseItem
{
	workspaceID?: string;
	analyzerID?: number;
	groupsID: number[];
	workspaceType: string;
}