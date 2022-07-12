export interface IXmtMonitoringObjectItemFinder
{
	monitoringObjectID?: string;
	monitoringObjectIDList: string[];
	nodeID?: number;
	nodeIDs: number[];
	locationID?: number;
	locationIDs: number[];
	name: string;
	objectKind?: string;
	typeID?: number;
	typeIDs: number[];
	isReadOnly?: boolean;
	isVideoObject?: boolean;
	isChild?: boolean;
	hasMosaic?: boolean;
	hasPreview?: boolean;
	isPreviewObject?: boolean;
	parentID?: string;
	childID?: string;
}