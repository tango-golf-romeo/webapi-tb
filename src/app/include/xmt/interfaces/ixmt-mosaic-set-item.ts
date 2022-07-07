import {IAppMosaicBaseItem} from "../../app/base/interfaces/iapp-mosaic-base-item";

export interface IXmtMosaicSetItem extends IAppMosaicBaseItem
{
	mosaicID?:string;
	isHidden:boolean;
}