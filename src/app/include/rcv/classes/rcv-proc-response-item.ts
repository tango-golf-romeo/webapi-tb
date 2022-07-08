import {IRcvProcResponseItem} from "../interfaces/ircv-proc-response-item";

export class RcvProcResponseItem implements IRcvProcResponseItem
{
public schemaID?: number;
public procID: number = -1;
public modifiedByUserID?: string;
public modifiedByUserName: string = '';
public modifiedDate: string = '';
public name: string = '';
public maxSizeLogs: number = 0;
public maxRows: number = 0;
public lastStarted: string = '';
public deletedRows?: number;
}