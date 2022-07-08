import {IAppNodeBaseItem} from "../../app/base/interfaces/iapp-node-base-item";

export interface IXmtNodeSetItem extends IAppNodeBaseItem
{
	nodeID?: number;
	//we skip nodeThumbnails and nodeStreams so far
}