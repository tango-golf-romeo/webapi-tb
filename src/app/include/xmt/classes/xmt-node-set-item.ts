import {AppNodeBaseItem} from "../../app/base/classes/app-node-base-item";
import {IAppNodeStreamsItem} from "../../app/base/interfaces/iapp-node-streams-item";
import {IAppNodeThumbnailsItem} from "../../app/base/interfaces/iapp-node-thumbnails-item";
import {IXmtNodeSetItem} from "../interfaces/ixmt-node-set-item";

export class XmtNodeSetItem extends AppNodeBaseItem implements IXmtNodeSetItem
{
public nodeID?: number;
public nodeThumbnails: IAppNodeThumbnailsItem|null = null; //let's make it nullable so far
public nodeStreams: IAppNodeStreamsItem|null = null; // let's make it nullable so far

	constructor (id:number, sName:string, sDesc:string)
	{
		super(sName,sDesc);

		this.nodeID = id;
	}
}