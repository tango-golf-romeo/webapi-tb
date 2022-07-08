export interface IXmtMosaicItemFinder
{
	mosaicID?:string;
	mosaicIDs:string[];
	cellTemplateID?:string;
	nodeID?:number;
	nodeIDs:number[];
	isTemporary?:boolean;
	presetMosaicID?:number;
}