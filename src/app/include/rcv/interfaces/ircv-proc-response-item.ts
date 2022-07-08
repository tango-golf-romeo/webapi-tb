export interface IRcvProcResponseItem
{
	schemaID?: number;
	procID: number;
	modifiedByUserID?: string;
	modifiedByUserName: string;
	modifiedDate: string;
	name: string;
	maxSizeLogs: number;
	maxRows: number;
	lastStarted: string;
	deletedRows?: number;
}