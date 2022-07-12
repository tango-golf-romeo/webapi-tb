import {IRcvMonitoringObjectAnalyzerItem} from "./ircv-monitoring-object-analyzer-item";

export interface IRcvMonitoringObjectResponseItem
{
	nodeID?: number;
	nodeName: string;
	locationID?: number;
	locationName: string;
	parentID?: string;
	monitoringObjectID: string;
	objectKind: string;
	objectKindName: string;
	modifiedDate: string;
	isDisabled: boolean;
	name: string;
	typeID?: number;
	typeName: string;
	objectType: string;
	url: string;
	presetAlarmID?: number;
	presetAlarmName: string;
	presetRecordingID?: number;
	presetRecordingName: string;
	presetProbeID?: number;
	presetProbeName: string;
	presetProbeType?: number;
	presetMeasureID?: number;
	presetMeasureName: string;
	scriptID?: string;
	analyzerItemList: IRcvMonitoringObjectAnalyzerItem[];
	isReadOnly: boolean;
	hasMosaic: boolean;
	hasPreview: boolean;
	isVideoObject: boolean;
	isPreviewObject: boolean;
	hasMeasures: boolean;
	isChild: boolean;
	workspaceType: string;
	serviceID: string;
	tags: string[];
	childIDs: string[];
}