import {AppGroupBaseItem} from "../../app/base/classes/app-group-base-item";
import {IRcvGroupResponseItem} from "../interfaces/ircv-group-response-item";

export class RcvGroupResponseItem extends AppGroupBaseItem implements IRcvGroupResponseItem
{
public groupID: number = -1;
public isReadOnly: boolean = false;
public isAccessible: boolean = false;
public userIDs: string[] = [];
}