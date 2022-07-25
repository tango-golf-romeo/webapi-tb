import {IAppWorkspaceBaseItem} from "../interfaces/iapp-workspace-base-item";
import {AppBaseItem} from "./app-base-item";

export class AppWorkspaceBaseItem extends AppBaseItem implements IAppWorkspaceBaseItem
{
public isDisabled: boolean = false;
public jsonUIConf: string = '';
public tags: string[] = [];
}