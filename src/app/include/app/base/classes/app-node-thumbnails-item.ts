import {IAppNodeThumbnailsItem} from "../interfaces/iapp-node-thumbnails-item";

export class AppNodeThumbnailsItem implements IAppNodeThumbnailsItem
{
public folder: string = '';
public mosaicFolder: string = '';
public periodSec: number = -1;
public height: number = -1;
public codec: string = '';
public fileStorageDepthDays: number = -1;
public burnTimestamp: boolean = false;
}