import {AppScriptBaseItem} from "../../app/base/classes/app-script-base-item";
import {IXmtScriptSetItem} from "../interfaces/ixmt-script-set-item";

export class XmtScriptSetItem extends AppScriptBaseItem implements IXmtScriptSetItem
{
public scriptID?: string;
public scriptFileByteArray: number[] = [];
}