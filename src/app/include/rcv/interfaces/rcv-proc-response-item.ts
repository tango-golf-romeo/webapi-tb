export interface IRcvProcResponseItem
{
	get schemaID (): number;
	get procID (): number;
	get modifiedByUserID (): string;
	get modifiedByUserName (): string;
	get modifiedDate (): string;
	get name (): string;
	get maxSizeLogs (): number;
	get maxRows (): number;
	get lastStarted (): string;
	get deletedRows (): number;
}