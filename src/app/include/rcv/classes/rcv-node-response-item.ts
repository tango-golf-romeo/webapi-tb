import {AppNodeBaseItem} from "../../app/base/classes/app-node-base-item";
import {IRcvNodeResponseItem} from "../interfaces/ircv-node-response-item";

export class RcvNodeResponseItem extends AppNodeBaseItem implements IRcvNodeResponseItem
{
public nodeID:number = -1;
public modifiedDate:string = '';
public probeManagerVersion:string = '';
public ottProbeServiceVersion:string = '';
public emailerVersion:string = '';
public scriptProbeVersion:string = '';
public multiScreenServerVersion:string = '';
public multiProbeGuardVersion:string = '';
public mosaicManagerVersion:string = '';
public isDeleted:boolean = false;
}