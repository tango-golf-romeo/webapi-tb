import {IXmtProcSetItem} from "../interfaces/ixmt-proc-set-item";

export class XmtProcSetItem implements IXmtProcSetItem
{
public procID: number = 1;
public maxSizeLogs: number = 0;
public maxRows: number = 0;

	constructor (iProcId:number, iMaxSizeLogs:number, iMaxRows:number)
	{
		this.procID = iProcId;
		this.maxSizeLogs = iMaxSizeLogs;
		this.maxRows = iMaxRows;
	}
}