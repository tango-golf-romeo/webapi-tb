import {IAppScriptBaseItem} from "../interfaces/iapp-script-base-item";
import {AppBaseItem} from "./app-base-item";

export class AppScriptBaseItem extends AppBaseItem implements IAppScriptBaseItem
{
public scriptType?: string;
public interpreterID?: number;
public arguments: string = '';
public hasHandle?: boolean;
}