import {IXmtProcItemFinder} from "../../interfaces/find/ixmt-proc-item-finder";

export class XmtProcItemFinder implements IXmtProcItemFinder
{
public schemaID?: number;
public procID?: number;
public name: string = '';
public procIds: number[] = [];
}