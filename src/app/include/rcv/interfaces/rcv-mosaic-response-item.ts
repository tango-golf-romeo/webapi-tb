import {IAppMosaicBaseItem} from "../../app/base/interfaces/iapp-mosaic-base-item";
import {IRcvPayloadBase} from "../../base/interfaces/rcv/rcv-payload-base";

export interface IRcvMosaicResponseItem extends IAppMosaicBaseItem, IRcvPayloadBase
{
	mosaicID:string;
	nodeName:string;
	presetMosaicName:string;
	displayIDs:string[];
	cellTemplateIDs:string[];
	isHidden:boolean;
}