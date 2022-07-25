import {IAppScriptBaseItem} from "../../app/base/interfaces/iapp-script-base-item";

export interface IRcvScriptResponseItem extends IAppScriptBaseItem
{
	scriptID?: string;
	analyzerID: number;
	modifiedDate?: string;
	inUse?: number;
	interpreterName: string;
}