import {IAppNodeBaseItem} from "../interfaces/iapp-node-base-item";
import {AppBaseItem} from "./app-base-item";

export class AppNodeBaseItem extends AppBaseItem implements IAppNodeBaseItem
{
public xmlParameters?: string;
public locationID?: number;
public nodeType: string = 'multiScreen';
public ipAddress: string = '127.0.0.1';
}