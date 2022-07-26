export interface IRcvScriptMeasureResponseItem
{
	scriptID: string;
	scriptName: string;
	analyzerID: number;
	externalDeviceTypeID?: number;
	externalDeviceTypeName: string;
	measureCount: number;
}