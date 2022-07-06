export interface IRcvStatePanelResponseItem
{
	get $type (): string;
	get name (): string;
	get description (): string;
	get statePanelID (): string;
}