import {IAppNodeBaseItem} from "../../app/base/interfaces/iapp-node-base-item";
import {IAppNodeStreamsItem} from "../../app/base/interfaces/iapp-node-streams-item";
import {IAppNodeThumbnailsItem} from "../../app/base/interfaces/iapp-node-thumbnails-item";

export interface IXmtNodeSetItem extends IAppNodeBaseItem
{
	nodeID?: number;
	nodeThumbnails: IAppNodeThumbnailsItem|null; //let's make it nullable so far
	nodeStreams: IAppNodeStreamsItem|null; // let's make it nullable so far
}