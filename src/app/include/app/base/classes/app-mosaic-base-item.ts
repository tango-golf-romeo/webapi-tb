import {IAppMosaicBaseItem} from "../interfaces/iapp-mosaic-base-item";

export class AppMosaicBaseItem implements IAppMosaicBaseItem
{
public name:string = '';
public description:string = '';
public columnCount:number = 1;
public rowCount:number = 1;
public renderingRange:number = 0;
public width:number = 200;
public height:number = 100;
public preferredGPUSocket?:number;
public nodeID:number = -1;
public presetMosaicID?:number;
public isDisabled:boolean = false;
public isTemporary:boolean = false;
public mosaicType:string = 'staticMosaic';
public statePanelIDs:string[] = [];

	constructor (sName:string, sDesc:string, iNodeId:number)
	{
		this.name = sName;
		this.description = sDesc;
		this.nodeID = iNodeId;
	}
}