import {IAppBaseItem} from "./iapp-base-item";

export interface IAppWorkspaceBaseItem extends IAppBaseItem
{
	isDisabled: boolean;
	jsonUIConf: string;
	tags: string[];
}