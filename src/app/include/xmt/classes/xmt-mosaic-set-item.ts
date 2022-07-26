import {AppMosaicBaseItem} from "../../app/base/classes/app-mosaic-base-item";
import {IXmtMosaicSetItem} from "../interfaces/ixmt-mosaic-set-item";

export class XmtMosaicSetItem extends AppMosaicBaseItem implements IXmtMosaicSetItem
{
public mosaicID?: string;
public isHidden: boolean = false;

	constructor (sName:string, sDesc:string, iNodeId:number)
	{
		super(sName,sDesc);

		this.nodeID = iNodeId;
	}
}