import {AppMosaicBaseItem} from "../../app/base/classes/app-mosaic-base-item";
import {IRcvMosaicResponseItem} from "../interfaces/ircv-mosaic-response-item";

export class RcvMosaicResponseItem extends AppMosaicBaseItem implements IRcvMosaicResponseItem
{
public mosaicID: string = '';
public nodeName: string = '';
public presetMosaicName: string = '';
public displayIDs: string[] = [];
public cellTemplateIDs: string[] = [];
public isHidden: boolean = false;
//previews not implemented so far
}