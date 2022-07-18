export interface IXmtWorkspaceItemFinder
{
	workspaceID?: string;
	workspaceName: string;
	workspaceTypes: string[];
	isLayout?: boolean;
	isDisabled?: boolean;
}