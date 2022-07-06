import {AppNodeBaseItem} from "../../app/base/classes/app-node-base-item";
import {IRcvNodeResponseItem} from "../interfaces/ircv-node-response-item";

export class RcvNodeResponseItem extends AppNodeBaseItem implements IRcvNodeResponseItem
{
	nodeID:number = -1;
	modifiedDate:string = '';
	probeManagerVersion:string = '';
	ottProbeServiceVersion:string = '';
	emailerVersion:string = '';
	scriptProbeVersion:string = '';
	multiScreenServerVersion:string = '';
	multiProbeGuardVersion:string = '';
	mosaicManagerVersion:string = '';
	isDeleted:boolean = false;

	constructor (id:number, sName:string, sDesc:string)
	{
		super(sName,sDesc);

		this.nodeID = id;
	}
}