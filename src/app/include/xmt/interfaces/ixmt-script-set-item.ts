import {IAppScriptBaseItem} from "../../app/base/interfaces/iapp-script-base-item";

export interface IXmtScriptSetItem extends IAppScriptBaseItem
{
	scriptID?: string;
	scriptFileByteArray: number[];
}