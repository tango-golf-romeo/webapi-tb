import {AppWorkspaceBaseItem} from "../../app/base/classes/app-workspace-base-item";
import {IRcvWorkspaceResponseItem} from "../interfaces/ircv-workspace-response-item";

export class RcvWorkspaceResponseItem extends AppWorkspaceBaseItem implements IRcvWorkspaceResponseItem
{
public workspaceID: string = '';
public analyzerID?: number;
public analyzerName: string = '';
public analyzerDescription: string = '';
public modifiedDate: string = '';
public isLayout: boolean = false;
public workspaceType: string = '';
	//previews and groups not implemented yet
public isReadOnly: boolean = false;
public json: string = '';
}