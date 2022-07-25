import {IAppBaseItem} from "./iapp-base-item";

export interface IAppMosaicBaseItem extends IAppBaseItem
{
	columnCount: number;
	rowCount: number;
	renderingRange: number;
	width: number;
	height: number;
	preferredGPUSocket?: number;
	nodeID: number;
	presetMosaicID?: number;
	isDisabled: boolean;
	isTemporary: boolean;
	mosaicType: string;
	statePanelIDs: string[]
}