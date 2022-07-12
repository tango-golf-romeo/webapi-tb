import {IXmtMonitoringObjectItemFinder} from "../../interfaces/find/ixmt-monitoring-object-item-finder";

export class XmtMonitoringObjectItemFinder implements IXmtMonitoringObjectItemFinder
{
public monitoringObjectID?: string;
public monitoringObjectIDList: string[] = [];
public nodeID?: number;
public nodeIDs: number[] = [];
public locationID?: number;
public locationIDs: number[] = [];
public name: string = '';
public objectKind?: string;
public typeID?: number;
public typeIDs: number[] = [];
public isReadOnly?: boolean;
public isVideoObject?: boolean;
public isChild?: boolean;
public hasMosaic?: boolean;
public hasPreview?: boolean;
public isPreviewObject?: boolean;
public parentID?: string;
public childID?: string;
}