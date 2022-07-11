import {AppLocationBaseItem} from "../../app/base/classes/app-location-base-item";
import {IXmtLocationSetItem} from "../interfaces/ixmt-location-set-item";

export class XmtLocationSetItem extends AppLocationBaseItem implements IXmtLocationSetItem
{
public locationID?: number;
public groupIDs: number[] = [];
}