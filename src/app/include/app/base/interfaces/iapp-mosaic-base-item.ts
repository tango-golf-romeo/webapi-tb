export interface IAppMosaicBaseItem
{
	name:string;
	description:string;
	columnCount:number;
	rowCount:number;
	renderingRange:number;
	width:number;
	height:number;
	preferredGPUSocket?:number;
	nodeID:number;
	presetMosaicID?:number;
	isDisabled:boolean;
	isTemporary:boolean;
	mosaicType:string;
	statePanelIDs:string[]
}