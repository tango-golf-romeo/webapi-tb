import {AppLocationBaseItem} from "../../app/base/classes/app-location-base-item";
import {XmtLocationSetItem} from "../../xmt/classes/xmt-location-set-item";
import {IRcvLocationGroupItem} from "../interfaces/ircv-location-group-item";
import {IRcvLocationResponseItem} from "../interfaces/ircv-location-response-item";

export class RcvLocationResponseItem extends AppLocationBaseItem implements IRcvLocationResponseItem
{
public locationID: number = -1;
public modifiedDate: string = '';
public parentName: string = '';
public locationTypeName: string = '';
public groups: IRcvLocationGroupItem[] = [];

	public cloneSetItem (): XmtLocationSetItem
	{
	const ret:XmtLocationSetItem = new XmtLocationSetItem(this.name,this.description);
		ret.parentID = this.parentID;
		ret.locationTypeID = this.locationTypeID;
		ret.locationID = this.locationID;
		ret.groupIDs = this.groups.map(e => e.groupID);

		return ret;
	}
}