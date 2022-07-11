import {IXmtLocationItemFinder} from "../../interfaces/find/ixmt-location-item-finder";

export class XmtLocationItemFinder implements IXmtLocationItemFinder
{
public locationID?: number;
public locationIDs: number[] = [];
public name: string = '';
public parentID?: number;
public locationTypeID?: number;
}