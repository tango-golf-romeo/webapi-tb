import {IAppLocationBaseItem} from "../interfaces/iapp-location-base-item";
import {AppBaseItem} from "./app-base-item";

export class AppLocationBaseItem extends AppBaseItem implements IAppLocationBaseItem
{
public parentID?: number;
public locationTypeID?: number;
}