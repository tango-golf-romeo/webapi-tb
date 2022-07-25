import {AppScriptBaseItem} from "../../app/base/classes/app-script-base-item";
import {IRcvScriptResponseItem} from "../interfaces/ircv-script-response-item";

export class RcvScriptResponseItem extends AppScriptBaseItem implements IRcvScriptResponseItem
{
public scriptID?: string;
public analyzerID: number = -1;
public modifiedDate?: string;
public inUse?: number;
public interpreterName: string = '';
}