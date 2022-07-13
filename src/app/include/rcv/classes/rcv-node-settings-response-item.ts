import {AppNodeBaseItem} from "../../app/base/classes/app-node-base-item";
import {AppNodeStreamsItem} from "../../app/base/classes/app-node-streams-item";
import {AppNodeThumbnailsItem} from "../../app/base/classes/app-node-thumbnails-item";
import {IRcvNodeSettingsResponseItem} from "../interfaces/ircv-node-settings-response-item";

export class RcvNodeSettingsResponseItem extends AppNodeBaseItem implements IRcvNodeSettingsResponseItem
{
public nodeID: number = -1;
public modifiedDate?: string;
public isReadOnly: boolean = false;
public nodeThumbnails: AppNodeThumbnailsItem|null = null;
public nodeStreams: AppNodeStreamsItem|null = null;
}