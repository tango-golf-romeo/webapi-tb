import {AppNodeBaseItem} from "../../app/base/classes/app-node-base-item";
import {IXmtNodeSetItem} from "../interfaces/ixmt-node-set-item";

export class XmtNodeSetItem extends AppNodeBaseItem implements IXmtNodeSetItem
{
	nodeID?:number;

	constructor (id:number, sName:string, sDesc:string)
	{
		super(sName,sDesc);

		this.nodeID = id;
	}
}