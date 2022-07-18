import {IAppWorkspaceBaseItem} from "../../app/base/interfaces/iapp-workspace-base-item";

export interface IRcvWorkspaceResponseItem extends IAppWorkspaceBaseItem
{
	workspaceID: string;
	analyzerID?: number;
	analyzerName: string;
	analyzerDescription: string;
	modifiedDate: string;
	isLayout: boolean;
	workspaceType: string;
	//previews and groups not implemented yet
	isReadOnly: boolean;
	json: string;
}