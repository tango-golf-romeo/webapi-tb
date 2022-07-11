import {AppLocationBaseItem} from "../../app/base/classes/app-location-base-item";
import {IRcvLocationGroupItem} from "../interfaces/ircv-location-group-item";
import {IRcvLocationResponseItem} from "../interfaces/ircv-location-response-item";

export class RcvLocationResponseItem extends AppLocationBaseItem implements IRcvLocationResponseItem
{
public locationID: number = -1;
public modifiedDate: string = '';
public parentName: string = '';
public locationTypeName: string = '';
public groups: IRcvLocationGroupItem[] = [];
}