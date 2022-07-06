import {IAppMosaicBaseItem} from "../../app/base/interfaces/iapp-mosaic-base-item";
import {IRcvPayloadBase} from "../../base/interfaces/rcv/rcv-payload-base";

export interface IXmtMosaicSetItem extends IAppMosaicBaseItem, IRcvPayloadBase
{
	mosaicID?:string;
	isHidden:boolean;
	name:string;
	description:string;
	columnCount:number;
	rowCount:number;
	renderingRange:number;
	width:number;
	height:number;
	preferredGPUSocket?:number
	nodeID:number;
	presetMosaicID?:number;
	isDisabled:boolean;
	isTemporary:boolean;
	mosaicType:string;
	statePanelIDs:string[]
}