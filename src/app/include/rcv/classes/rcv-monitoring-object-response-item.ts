import {IRcvMonitoringObjectResponseItem} from "../interfaces/ircv-monitoring-object-response-item";
import {RcvMonitoringObjectAnalyzerItem} from "./rcv-monitoring-object-analyzer-item";

export class RcvMonitoringObjectResponseItem implements IRcvMonitoringObjectResponseItem
{
public nodeID?: number;
public nodeName: string  = '';
public locationID?: number;
public locationName: string = '';
public parentID?: string;
public monitoringObjectID: string = '';
public objectKind: string = '';
public objectKindName: string = '';
public modifiedDate: string = '';
public isDisabled: boolean = false;
public name: string = '';
public typeID?: number;
public typeName: string = '';
public objectType: string = '';
public url: string = '';
public presetAlarmID?: number;
public presetAlarmName: string = '';
public presetRecordingID?: number;
public presetRecordingName: string = '';
public presetProbeID?: number;
public presetProbeName: string = '';
public presetProbeType?: number;
public presetMeasureID?: number;
public presetMeasureName: string = '';
public scriptID?: string;
public analyzerItemList: RcvMonitoringObjectAnalyzerItem[] = [];
public isReadOnly: boolean = false;
public hasMosaic: boolean = false;
public hasPreview: boolean = false;
public isVideoObject: boolean = false;
public isPreviewObject: boolean = false;
public hasMeasures: boolean = false;
public isChild: boolean = false;
public workspaceType: string = '';
public serviceID: string = '';
public tags: string[] = [];
public childIDs: string[] = [];
}