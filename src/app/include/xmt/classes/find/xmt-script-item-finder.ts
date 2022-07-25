import {IXmtScriptItemFinder} from "../../interfaces/find/ixmt-script-item-finder";

export class XmtScriptItemFinder implements IXmtScriptItemFinder
{
public scriptID?: string;
public name: string = '';
public scriptType?: string;
public interpreterID?: number;
public analyzerID?: number;
}