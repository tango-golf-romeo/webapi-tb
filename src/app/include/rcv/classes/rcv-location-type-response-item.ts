import {AppLocationTypeBaseItem} from "../../app/base/classes/app-location-type-base-item";
import {IRcvLocationTypeResponseItem} from "../interfaces/ircv-location-type-response-item";

export class RcvLocationTypeResponseItem extends AppLocationTypeBaseItem implements IRcvLocationTypeResponseItem
{
public locationTypeID?: number;
public modifiedDate?: string;
public isDeleted: boolean = false;
}