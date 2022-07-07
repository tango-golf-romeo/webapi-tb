import {IAppMosaicBaseItem} from "../../app/base/interfaces/iapp-mosaic-base-item";

export interface IRcvMosaicResponseItem extends IAppMosaicBaseItem
{
	mosaicID:string;
	nodeName:string;
	presetMosaicName:string;
	displayIDs:string[];
	cellTemplateIDs:string[];
	isHidden:boolean;
	//previews not implemented so far
}